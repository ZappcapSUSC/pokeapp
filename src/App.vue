<template>
  <template v-if="loadingList">
    <div class="full_screen_loader">
      <p>Loading</p>
    </div>
  </template>
  <template v-else>
    <Pokemon-List></Pokemon-List>
    <Scrim v-if="toggleScrim"></Scrim>
    <Pokemon-Modal v-if="toggleModal"></Pokemon-Modal>
  </template>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import PokemonList from "./components/PokemonList.vue";
import PokemonModal from "./components/PokemonModal.vue";
import Scrim from "./components/Scrim.vue";

export default defineComponent({
  name: "App",
  components: {
    PokemonList,
    PokemonModal,
    Scrim
  },
  setup() {
    const store = useStore();
    const storeState = store.state;
    const toggleScrim = computed((): boolean => {
      return storeState.scrimActive;
    });
    const toggleModal = computed((): boolean => {
      return store.state.modalActive;
    });
    const loadingList = computed((): boolean => {
      return store.state.fetchingPokemonList;
    });
    store.dispatch("createPokemonList");
    return {
      toggleModal,
      loadingList,
      toggleScrim
    };
  }
});
</script>

<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.full_screen_loader {
  width: 100vw;
  height: 100vh;
  background-color: #d4d4d4;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  vertical-align: center;
  align-items: center;

  p {
    color: black;
    font-size: 40px;
  }
}
</style>
