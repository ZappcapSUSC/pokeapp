<template>
  <div class="card-item" @click="switchToggleTrue">
    <span class="card-id"># {{ id }}</span>
    <img :src="sprite" alt="" />
    <span>{{ nameToUpperCase }}</span>
    <div class="type-imgs">
      <svg viewBox="0 0 1 1" width="50" height="50">
        <use :xlink:href="type1SpriteId"></use>
      </svg>
      <svg v-if="type2" viewBox="0 0 1 1" width="50" height="50">
        <use :xlink:href="type2SpriteId"></use>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "PokemonListItem",
  props: {
    name: { type: String, required: true },
    sprite: { type: String, required: true },
    type1: { type: String, required: true },
    type2: String,
    id: { type: Number, required: true }
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

    const firstLeterToUpperCase = (value: string): string => {
      return value.charAt(0).toUpperCase() + value.slice(1);
    };

    const type1SpriteId = `#${firstLeterToUpperCase(props.type1)}--sprite`;

    const type2SpriteId = props.type2
      ? `#${firstLeterToUpperCase(props.type2)}--sprite`
      : "";

    const switchToggleTrue = (): void => {
      if (toggleStore.value === false) {
        store.dispatch("fetchSinglePokemon", props.name);
        store.commit("switchModalTrue");
      }
    };

    return {
      toggleStore,
      switchToggleTrue,
      nameToUpperCase,
      type1SpriteId,
      type2SpriteId
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

  .type-imgs {
    display: flex;
    justify-content: space-around;
  }
}
</style>
