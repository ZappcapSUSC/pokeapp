<template>
  <Pokemon-Filter></Pokemon-Filter>
  <div class="card-list">
    <Pokemon-List-Item
      v-for="(pokemon, index) in pokemonStore"
      :key="index"
      :id="pokemon.id"
      :name="pokemon.name"
    ></Pokemon-List-Item>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import PokemonListItem from "./PokemonListItem.vue";
import PokemonFilter from "./PokemonFilter.vue";

export default defineComponent({
  name: "PokemonList",
  components: {
    PokemonListItem,
    PokemonFilter
  },
  setup() {
    const store = useStore();

    const pokemonStore = computed(() => store.state.pokeListFiltered);

    return { pokemonStore };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
}
</style>
