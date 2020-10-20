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
  generation: number;
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

export const useSinglePokemon = async function(name: string, generation: number): Promise<PokemonInfo> {
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
      generation: generation
    };

  } catch (error) {
    return Promise.reject(error);
  }
}


export const usePokemonCompleteList = async (): Promise<PokemonInfo[]> => {
  try {
    let result = await usePokemons(1);

    const res =  result.map(async (value)=>{
      console.log(value.name, 1);
      const aux = await useSinglePokemon(value.name, 1);
      return await aux;
    });

    result = await usePokemons(2);

    result.forEach((value) => {
      //TODO Verificar por 404 en vez de nombre en especifico
      if(value.name !== 'smeargle'){
        const aux = useSinglePokemon(value.name, 2);
        res.push(aux);
      }
    });

    return await Promise.all(res);

  } catch (error) {
    return Promise.reject(error);
  }
} 
