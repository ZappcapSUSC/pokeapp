<template>
  <div class="card-item" @click="switchToggleTrue">
    <span class="card-id"># {{ id }}</span>
    <img :src="sprite" alt="" />
    <span>{{ nameToUpperCase }}</span>
    <p>
      {{ type1 }}<span v-if="type2">, {{ type2 }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "PokemonListItem",
  props: {
    name: String,
    sprite: String,
    type1: String,
    type2: String,
    id: Number
  },
  setup(props) {
    const store = useStore();
    const toggleStore = computed((): boolean => store.state.modalActive);
    const nameToUpperCase = computed((): string => {
      if (props.name) {
        return props.name.toUpperCase();
      } else {
        return "";
      }
    });
    const switchToggleTrue = (): void => {
      if (toggleStore.value === false) {
        store.dispatch("fetchSinglePokemon", props.name);
        store.commit("switchModalTrue");
      }
    };

    return {
      toggleStore,
      switchToggleTrue,
      nameToUpperCase
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
  min-width: 150px;
  border-radius: 10px;
  background-color: #41454d;
  position: relative;
  cursor: pointer;

  p, span {
    color: white;
  }

  .card-id {
    position: absolute;
    top: 10px;
    left: 10px;
  }
}
</style>
