import React, { Fragment, useEffect, useState } from "react";
import PokemonCard from "../Pokemon/PokemonCard";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { getPokemon, clearErrors } from "../../actions/pokemonAction";
import Loader from "../layout/Loader";
import HomeSlider from "./HomeSlider";

const Home = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { pokemons, error, loading } = useSelector((state) => state.pokemons);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getPokemon());
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div>
            <HomeSlider />
            <div>
              <h1 class="m-10 text-center text-xl font-extrabold leading-none tracking-tight text-gray-700 md:text-5xl lg:text-6xl dark:text-white">
                Available Pokemons to{" "}
                <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-400">
                  ADOPT.
                </mark>{" "}
              </h1>
              <div className=" m-5 w-full flex justify-around flex-wrap text-xl text-gray-900 font-semibold">
                {pokemons &&
                  pokemons.map((poke) => {
                    return <PokemonCard pokemon={poke} />;
                  })}
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
