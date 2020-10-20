<template>
  <div class="card-item" @click="switchToggleTrue">
    <img :src="sprite" alt="" />
    <span>{{ name }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "PokemonListItem",
  props: {
    name: String,
    sprite: String
  },
  setup(props) {
    const store = useStore();
    const toggleStore = computed((): boolean => store.state.modalActive);
    const switchToggleTrue = () => {
      if (toggleStore.value === false) {
        store.dispatch("fetchSinglePokemon", props.name);
        store.commit("switchModalTrue");
      }
    };

    return {
      toggleStore,
      switchToggleTrue
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.card-item {
  display: flex;
  flex-direction: column;
  border: 1px black solid;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  margin: 0px 5px 10px;
}
</style>
