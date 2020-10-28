<template>
  <Pokemon-Filter></Pokemon-Filter>
  <div class="card-list">
    <Pokemon-List-Item
      v-for="pokemon in pokemonStore"
      :key="pokemon.id"
      :sprite="pokemon.sprite"
      :name="pokemon.name"
      :type1="pokemon.type1"
      :type2="pokemon.type2"
      :id="pokemon.id"
    ></Pokemon-List-Item>

    <p v-if="pokemonStore.length === 0">NOTHING TO SHOW</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import PokemonListItem from "./PokemonListItem.vue";
import PokemonFilter from "./PokemonFilter.vue";
import { State } from "@/store";
import { PokemonInfo } from "@/api/pokemons";

export default defineComponent({
  name: "PokemonList",
  components: {
    PokemonListItem,
    PokemonFilter
  },
  setup() {
    //TODO cargar por batches los pokes para que no tarde tanto
    const store = useStore();
    const storeState: State = store.state;
    const pokemonStore = computed((): PokemonInfo[] =>
      storeState.pokeListFiltered.sort((a, b) => a.id - b.id)
    );

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
