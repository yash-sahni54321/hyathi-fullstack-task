import React from "react";

import { Link } from "react-router-dom";

import { adoptPokemon } from "../../actions/pokemonAction";
const PokemonCard = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon._id}`}>
      <div class="flex items-center justify-center p-3">
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-80 w-60">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src={pokemon.avatar.url}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white">
              {pokemon.name}
            </h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {"Hp: "}
              {pokemon.hp}
            </p>
            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              See More
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
