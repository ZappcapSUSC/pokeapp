import { usePokeApi } from "./api";

export interface PokemonInfo{
  id: number,
  name: string;
  baseExperience: number;
  type1: string;
  type2?: string;
  order: number;
  height: number;
  weight: number;
}

export interface Pokemon {
  name: string;
  url: string;
}


export const usePokemons = async function(): Promise<Pokemon[]> {
  try {
    const result = await usePokeApi("pokemon?limit=251");
    return result.results;
  } catch (error) {
    return Promise.reject(error);
  }
}

export const useSinglePokemon = async function(name: string): Promise<PokemonInfo> {
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
      type2: result.types[1] ? result.types[1].type.name : undefined
    };

  } catch (error) {
    return Promise.reject(error);
  }
}


export const usePokemonCompleteList = async (): Promise<PokemonInfo[]> => {
  try {
    const result = await usePokemons();
    // const pokeArray: PokemonInfo[] = [];
    const res =  result.map(async (value)=>{
      return await useSinglePokemon(value.name);
    });
    return await Promise.all(res);

  } catch (error) {
    return Promise.reject(error);
  }
} 
