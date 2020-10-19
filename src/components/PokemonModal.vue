<template>
  <Modal>
    <template v-if="fetchingPokemon">
      <p>Loading</p>
    </template>
    <template v-else-if="activePokemon">
      <p>{{ activePokemon.name }}</p>
      <p>{{ activePokemon.type1 }}</p>
      <p v-if="activePokemon.type2">{{ activePokemon.type2 }}</p>
    </template>
    <template v-else>
      <p>No pokemon selected</p>
    </template>
  </Modal>
</template>

<script lang="ts">
//TODO definir vista mas elaborada de pokemon individual
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { PokemonInfo } from "@/api/pokemons";
import { State } from "@/store";
import Modal from "./Modal.vue";
export default defineComponent({
  name: "PokemonModal",
  props: {},
  components: {
    Modal
  },
  setup() {
    const store = useStore();
    const storeState: State = store.state;
    const fetchingPokemon = computed((): boolean => {
      return storeState.fetchingSinglePokemon;
    });

    const activePokemon = computed((): PokemonInfo | null => {
      return storeState.selectedPokemon;
    });

    return {
      activePokemon,
      fetchingPokemon
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
li {
  list-style-type: none;
}
</style>
