import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";
import { decrement, increment } from "./store/slices/counter/counterSlice";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { pokemons, isLoading, page } = useSelector((state) => state.pokemons);
  const { counter } = useSelector((state) => state.counter);

  useEffect(() => {
    dispatch(getPokemons(counter));
  }, [counter]);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />

      {isLoading && <p> Cargando... </p>}
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.url}>{pokemon.name}</li>
        ))}
      </ul>

      <button onClick={() => dispatch(increment())}> Siguientes </button>
      <button disabled={page === 1} onClick={() => dispatch(decrement())} > Anteriores </button>
    </>
  );
};
