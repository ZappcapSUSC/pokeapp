import { ref } from "vue";

export interface Pokemon {
  name: string;
  url: string;
}

export const useApi = async function(url: RequestInfo, options?: RequestInit) {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};

export const usePokeApi = async function(
  endpoint: string,
  options?: RequestInit
) {
  try {
    return await useApi(`https://pokeapi.co/api/v2/${endpoint}`, options);
  } catch (error) {
    return Promise.reject(error);
  }
};
