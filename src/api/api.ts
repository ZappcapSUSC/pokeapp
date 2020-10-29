import { ref } from "vue";

export interface Pokemon {
  name: string;
  url: string;
}

export const useApi = async function(url: RequestInfo, options?: RequestInit): Promise<unknown> {
  const res = await fetch(url, options).then(response => {
    if(response.ok){
      return response
    } else if (response.status === 404) {
      return Promise.reject('error 404')
    }
  });

  if(res)
    return await res.json();
  else
    return "fail"
};

export const usePokeApi = async function(
  endpoint: string,
  options?: RequestInit
): Promise<unknown> {
  try {
    return await useApi(`https://pokeapi.co/api/v2/${endpoint}`, options);
  } catch (error) {
    return Promise.reject(error);
  }
};
