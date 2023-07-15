import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getPokemonDetails,
  clearErrors,
  feedPokemon,
  adoptPokemon,
  removePokemon,
} from "../../actions/pokemonAction";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../layout/Loader";
import { useAlert } from "react-alert";
const PokemonDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const alert = useAlert();
  const navigate = useNavigate();

  const { pokemon, error, loading } = useSelector(
    (state) => state.pokemonDetails
  );
  const { loading: isAdoptedSuccess, Adopted } = useSelector(
    (state) => state.adoptPokemon
  );
  const { success } = useSelector((state) => state.removePokemon);

  const feedHandler = () => {
    dispatch(feedPokemon(params.id));
  };
  const removePokemonHandler = () => {
    dispatch(removePokemon(params.id));
    navigate("/");
    alert.success("Pokemon removed Successfully");
  };
  const adoptHandler = () => {
    dispatch(adoptPokemon(params.id, pokemon));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getPokemonDetails(params.id));
  }, [dispatch, error, params.id, alert, success]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
              <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <img
                    alt="Pokemon"
                    src={pokemon?.avatar?.url || " "}
                    className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                  />

                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">
                      Pokemon Name
                    </h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                      {pokemon.name} {" - "}
                      {pokemon.hp}
                    </h1>

                    <div className=" space-y-3 flex-col p-3 justify-center items-center border-b-2 border-gray-200 mb-5">
                      <div>
                        {"Hp- "}
                        {pokemon.hp}
                      </div>
                      <div className="space-x-2">
                        <span>Age: {pokemon.age}</span>
                        <span>Weight: {pokemon.weight}</span>
                      </div>
                      <div className="space-x-3">
                        <span>Speed: {pokemon.speed}</span>
                        <span>Height: {pokemon.height}</span>
                        <span>Level: {pokemon.level}</span>
                      </div>
                    </div>

                    <div className="flex justify-evenly">
                      {pokemon.isAdopted === "false" && (
                        <button
                          onClick={adoptHandler}
                          className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
                        >
                          Adopt
                        </button>
                      )}
                      {pokemon.isAdopted === "true" && (
                        <button
                          onClick={feedHandler}
                          className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
                        >
                          Feed
                        </button>
                      )}
                      {pokemon.isAdopted === "true" && (
                        <button
                          onClick={removePokemonHandler}
                          className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default PokemonDetails;
