<template>
  <Pokemon-Filter></Pokemon-Filter>
  <div class="card-list">
    <Pokemon-List-Item
      v-for="pokemon in pokemonStore"
      :key="pokemon.id"
      :id="pokemon.id"
      :name="pokemon.name"
    ></Pokemon-List-Item>
  </div>
</template>

<script lang="ts">
//TODO checar una imagen de not found pokemon
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import PokemonListItem from "./PokemonListItem.vue";
import PokemonFilter from "./PokemonFilter.vue";
import { State } from "@/store";

export default defineComponent({
  name: "PokemonList",
  components: {
    PokemonListItem,
    PokemonFilter
  },
  setup() {
    const store = useStore();
    const storeState: State = store.state;

    const pokemonStore = computed(() =>
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
