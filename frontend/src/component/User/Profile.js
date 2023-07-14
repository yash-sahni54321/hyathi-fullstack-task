import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import Loader from "../layout/Loader";
import { myAllPokemons, clearErrors } from "../../actions/pokemonAction";
import PokemonCard from "../Pokemon/PokemonCard";
import Sidebar from "../layout/Sidebar";

import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const alert = useAlert();

  const { myPokemons, error, loading } = useSelector(
    (state) => state.myPokemons
  );
  const {
    user,
    error: userError,
    isAuthenticated,
  } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      dispatch(myAllPokemons());
    }
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <section className="flex mt-16">
            <Sidebar />
            <div>
              <h1 class="m-10 text-center text-xl font-extrabold leading-none tracking-tight text-gray-700 md:text-2xl lg:text-4xl dark:text-white">
                Adopted POKEMONS{" "}
                <mark class="px-3 m-4 text-white bg-blue-600 rounded dark:bg-blue-400">
                  {myPokemons?.length}
                </mark>{" "}
              </h1>
              <div className=" m-5 w-full flex justify-around flex-wrap text-xl text-gray-900 font-semibold">
                {myPokemons &&
                  myPokemons
                    .filter((pokemon) => pokemon.isAdopted === "true")
                    .map((poke) => {
                      return <PokemonCard pokemon={poke} />;
                    })}
              </div>
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
