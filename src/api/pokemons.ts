import { usePokeApi } from "./api";
import { useStore } from "vuex";

export interface PokemonInfo{
  id: number;
  name: string;
  baseExperience: number;
  type1: string;
  type2?: string;
  order: number;
  height: number;
  weight: number;
  generation: number;
  sprite: string;
}

export interface Pokemon {
  name: string;
  url: string;
}


export const usePokemons = async function(generation: number): Promise<Pokemon[]> {
  try {
    const result = await usePokeApi(`generation/${generation}`);
    return result.pokemon_species;
  } catch (error) {
    return Promise.reject(error);
  }
}

export const useSinglePokemon = async function(name: string, generation: number): Promise<PokemonInfo | null> {
  try {
    const result = await usePokeApi(`pokemon/${name}`);
    return {
      id: result.id,
      name: result.name,
      baseExperience: result.base_experience,
      type1: result.types[0].type.name,
      order: result.order,
      height: result.height,
      weight: result.weight,
      type2: result.types[1] ? result.types[1].type.name : undefined,
      generation: generation,
      sprite: result.sprites.front_default
    };

  } catch (error) {
    return Promise.reject(error).then((value): PokemonInfo => {console.log("entra"); return value}, (valuenone): null => {console.log("fail"); return null} );
  }
}


// export const usePokemonCompleteList = async () => {
//     //TODO cargar por batches los pokes para que no tarde tanto
//     let result: Pokemon[] = await usePokemons(1);
//     const store = useStore();

//     let count = 0;
//     result.forEach(async (value) => {
//       const aux: PokemonInfo | null = await useSinglePokemon(value.name, 1);
//       if(aux){
//         store.commit('addPokemon', value);
//         count++;
//         if(count===Math.ceil(result.length/10))
//         store.commit('setFetchingPokemonList', false);
//       }
//     });

//     result = await usePokemons(2);

//     result.forEach(async (value) => {
//       const aux: PokemonInfo | null = await useSinglePokemon(value.name, 2);
//       if(aux){
//         store.commit('addPokemon', value);
//         count++;
//         if(count===Math.ceil(result.length/10))
//           store.commit('setFetchingPokemonList', false);
//       }
//     });
// } 
