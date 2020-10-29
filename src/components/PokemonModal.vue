<template>
  <Modal>
    <template v-if="fetchingPokemon">
      <p>Loading</p>
    </template>
    <template v-else-if="activePokemon">
      <div class="pokemon_modal">
        <div class="main_info">
          <img :src="activePokemon.sprite" alt="" />
          <div>
            <span>{{ activePokemon.name.toUpperCase() }}</span>
            <span>Base expreience: {{ activePokemon.baseExperience }}</span>
          </div>
        </div>
        <div class="types">
          <svg viewBox="0 0 1 1" width="50" height="50">
            <use :xlink:href="type1SpriteId"></use>
          </svg>
          <svg
            v-if="activePokemon.type2"
            viewBox="0 0 1 1"
            width="50"
            height="50"
          >
            <use :xlink:href="type2SpriteId"></use>
          </svg>
        </div>
        <div class="extra_info">
          <p>Order: {{ activePokemon.order }}</p>
          <p>Height: {{ activePokemon.height }}</p>
          <p>Weight: {{ activePokemon.weight }}</p>
        </div>
      </div>
    </template>
    <template v-else>
      <p>No pokemon selected</p>
    </template>
  </Modal>
</template>

<script lang="ts">
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

    const firstLeterToUpperCase = (value: string): string => {
      return value.charAt(0).toUpperCase() + value.slice(1);
    };

    const type1SpriteId = activePokemon.value
      ? `#${firstLeterToUpperCase(activePokemon.value.type1)}--sprite`
      : "";

    const type2SpriteId = activePokemon.value
      ? activePokemon.value.type2
        ? `#${firstLeterToUpperCase(activePokemon.value.type2)}--sprite`
        : ""
      : "";

    return {
      activePokemon,
      fetchingPokemon,
      type1SpriteId,
      type2SpriteId
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.pokemon_modal {
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
  }

  .main_info {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      padding-left: 10px;
      align-items: start;
      justify-content: center;
    }
  }

  .types {
    display: flex;
    justify-content: space-around;
  }

  .extra_info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}

li {
  list-style-type: none;
}
</style>
