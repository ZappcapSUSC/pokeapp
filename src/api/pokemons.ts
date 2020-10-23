import { usePokeApi } from "./api";

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
      generation: generation,
      sprite: result.sprites.front_default
    };

  } catch (error) {
    return Promise.reject(error).then((value): PokemonInfo => {console.log("entra"); return value}, (valuenone): PokemonInfo => {console.log("fail"); return valuenone} );
  }
}


export const usePokemonCompleteList = async (): Promise<PokemonInfo[]> => {
  //TODO cargar por batches los pokes para que no tarde tanto
  try {
    let result: Pokemon[] = await usePokemons(1);

    const resGen1 =  await result.map(async (value)=>{
      const aux = await useSinglePokemon(value.name, 1);
      return aux;
    });

    result = await usePokemons(2);

    const resGen2 =  await result.map(async (value)=>{
      //TODO Verificar por 404 en vez de nombre en especifico
      const aux = await useSinglePokemon(value.name, 2);
      return aux;
    });


    const res = resGen1.concat(resGen2);


    console.log(res.length);


    return await Promise.all(res);

  } catch (error) {
    return Promise.reject(error);
  }
} 
