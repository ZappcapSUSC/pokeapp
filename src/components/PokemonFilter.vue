<template>
  <div class="pokmeon-filter">
    <input
      type="text"
      name="name"
      v-model="pokemonName"
      placeholder="Search by Name -"
      id=""
    />
    <div>
      <label for="type1">Type 1: </label>
      <select name="type1" v-model="pokemonType1" id="">
        <option value="">Any</option>
        <option v-for="(type, index) in types" :key="index" :value="type">{{
          type
        }}</option>
      </select>
    </div>
    <div>
      <label for="type2">Type 2: </label>
      <select name="type2" v-model="pokemonType2" id="">
        <option value="">Any</option>
        <option v-for="(type, index) in types" :key="index" :value="type">{{
          type
        }}</option>
      </select>
    </div>
    <div>
      <label for="generation">Generation: </label>
      <select name="generation" v-model.number="pokemonGeneration" id="">
        <option :value="-1">Any</option>
        <option
          v-for="(gen, index) in generations"
          :key="index"
          :value="index + 1"
          >{{ gen }}</option
        >
      </select>
    </div>

    <button @click="clearFilter">CLEAR</button>
  </div>
</template>

<script lang="ts">
import { State } from "@/store";
import { computed, defineComponent, ref, Ref, watch } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "PokemonList",
  setup() {
    const store = useStore();
    const storeState: State = store.state;
    const generations = ["Gen 1", "Gen 2"];

    const pokemonName: Ref<string> = ref("");
    const pokemonType1: Ref<string> = ref("");
    const pokemonType2: Ref<string> = ref("");
    const pokemonGeneration: Ref<number> = ref(-1);
    const types = computed((): string[] => {
      return storeState.pokemonTypes;
    });
    const filterPokemonList = () => {
      store.dispatch("filterPokemons", {
        name: pokemonName.value,
        type1: pokemonType1.value,
        type2: pokemonType2.value,
        generation: pokemonGeneration.value
      });
    };
    const clearFilter = () => {
      pokemonName.value = "";
      pokemonType1.value = "";
      pokemonType2.value = "";
      pokemonGeneration.value = -1;
    };

    watch(pokemonName, filterPokemonList);
    watch(pokemonType1, filterPokemonList);
    watch(pokemonType2, filterPokemonList);
    watch(pokemonGeneration, filterPokemonList);

    return {
      pokemonName,
      pokemonType1,
      pokemonType2,
      types,
      clearFilter,
      pokemonGeneration,
      generations
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.pokmeon-filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}
</style>
