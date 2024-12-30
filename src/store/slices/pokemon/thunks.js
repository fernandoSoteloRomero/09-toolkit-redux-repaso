import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    // TODO REalizar peticion http

    // const res = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    // );

    // const data = await res.json();

    const resp = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

    dispatch(
      setPokemons({
        page: page + 1,
        pokemons: resp.data.results,
        isLoading: false,
      })
    );
  };
};
