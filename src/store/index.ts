import { createStore, createLogger } from "vuex";
import { usePokemonCompleteList, useSinglePokemon, PokemonInfo } from "@/api/pokemons";

interface FilterOptions{
  name?: string;
  type1?: string;
  type2?: string;
  generation?: number;
}


export type State = { 
  pokeList: PokemonInfo[]; 
  modalActive: boolean; 
  selectedPokemon:PokemonInfo|null; 
  fetchingSinglePokemon: boolean;
  fetchingPokemonList: boolean;
  pokeListFiltered: PokemonInfo[]; 
  filterOptions: FilterOptions;
  pokemonTypes: string[];
};

const state: State = { 
  pokeList: [], 
  modalActive: false, 
  selectedPokemon:null, 
  fetchingSinglePokemon: false, 
  fetchingPokemonList: false, 
  pokeListFiltered: [], 
  filterOptions: {},
  pokemonTypes: [
    'bug', 
    'dark', 
    'dragon', 
    'electric', 
    'fairy', 
    'fighting',
    'fire', 
    'flying', 
    'ghost', 
    'grass', 
    'ground', 
    'ice', 
    'normal', 
    'poison', 
    'psychic', 
    'rock', 
    'steel', 
    'water'] 
  };

export default createStore({
  state,
  mutations: {
    addPokemon(state, payload: PokemonInfo) {
      state.pokeList.push(payload);
      state.pokeListFiltered.push(payload);
    },
    switchModalTrue(state) {
      state.modalActive = true;
    },
    switchModalFalse(state) {
      state.modalActive = false;
    },
    setSelectedPokemon(state, payload: PokemonInfo){
      state.selectedPokemon = payload;
    },
    setFetchingSinglePokemon(state, payload: boolean){
      state.fetchingSinglePokemon = payload;
    },
    setFetchingPokemonList(state, payload:boolean){
      state.fetchingPokemonList = payload;
    },
    setFilterOptions(state, payload:FilterOptions){
      state.filterOptions = payload;
    },
    setFilteredPokemonList(state, payload: PokemonInfo[]){
      state.pokeListFiltered = payload;
    }
  },
  actions: {
    async fetchSinglePokemon({ state, commit }, payload: string){
      try{
        commit('setFetchingSinglePokemon', true);
        const request = state.pokeList.find(element => element.name === payload);
        commit('setSelectedPokemon', request);
        commit('setFetchingSinglePokemon', false);
        return request;
      } catch(error){
        return Promise.reject(error);
      }
    },
    async fetchPokemonList(){
      try{
        const request = await usePokemonCompleteList();
        
        return request;
      } catch(error){
        return Promise.reject(error);
      }
    },
    async createPokemonList({commit, dispatch}){
      try{
        commit('setFetchingPokemonList', true);
        const request: PokemonInfo[] = await dispatch('fetchPokemonList');
        console.log(request, request.length);
        request.forEach(function(value){
          console.log(value.type2);
          commit('addPokemon', value);
        });
        commit('setFetchingPokemonList', false);

        return
      } catch(error){
        return Promise.reject(error);
      }
    },
    filterPokemons({commit}, payload:FilterOptions): void{
      const typeFilterBy = (type: string | undefined, filter: RegExp) => { return type && type.toLowerCase().search(filter) !== -1 };
      commit('setFilteredPokemonList', state.pokeList.filter((element, index, array)=>
      {
        const nameFilter = RegExp(`^${payload.name?.toLowerCase()}`);
        const type1Filter = RegExp(`^${payload.type1?.toLowerCase()}`);
        const type2Filter = RegExp(`^${payload.type2?.toLowerCase()}`);

        const nameContainsFilter = element.name.toLowerCase().search(nameFilter)!== -1;
        const generationIsGenerationFilter = (element.generation === payload.generation) || (payload.generation == -1);
        

        return (nameContainsFilter
          && (typeFilterBy(element.type1, type1Filter) || typeFilterBy(element.type2, type1Filter)) 
          && (typeFilterBy(element.type1, type2Filter)  || typeFilterBy(element.type2, type2Filter))
          && generationIsGenerationFilter);
      }))
    }
  },
  modules: {},
  plugins: [createLogger()]
});
