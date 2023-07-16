import axios from "axios";

import {
  ALL_POKEMON_FAIL,
  ALL_POKEMON_REQUEST,
  ALL_POKEMON_SUCCESS,
  NEW_POKEMON_REQUEST,
  NEW_POKEMON_SUCCESS,
  NEW_POKEMON_FAIL,
  DELETE_POKEMON_REQUEST,
  DELETE_POKEMON_SUCCESS,
  DELETE_POKEMON_FAIL,
  POKEMON_DETAILS_REQUEST,
  POKEMON_DETAILS_FAIL,
  POKEMON_DETAILS_SUCCESS,
  CLEAR_ERRORS,
  POKEMON_FEED_REQUEST,
  POKEMON_FEED_FAIL,
  MY_POKEMON_FAIL,
  MY_POKEMON_SUCCESS,
  MY_POKEMON_REQUEST,
  ADOPT_POKEMON_FAIL,
  ADOPT_POKEMON_REQUEST,
  ADOPT_POKEMON_RESET,
  ADOPT_POKEMON_SUCCESS,
  REMOVE_POKEMON_FAIL,
  REMOVE_POKEMON_REQUEST,
  REMOVE_POKEMON_SUCCESS,
} from "../constants/pokemonConstants";

// Get All Pokemons
export const getPokemon = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_POKEMON_REQUEST });

    const { data } = await axios.get(
      "https://adoptpokemon-backend.onrender.com/api/v1/pokemons",
      { withCredentials: true }
    );

    dispatch({
      type: ALL_POKEMON_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_POKEMON_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Pokemon
export const createPokemon = (pokemonData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_POKEMON_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `https://adoptpokemon-backend.onrender.com/api/v1/admin/pokemon/new`,
      pokemonData,
      config
    );

    dispatch({
      type: NEW_POKEMON_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_POKEMON_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Pokemon
export const deletePokemon = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_POKEMON_REQUEST });

    const { data } = await axios.delete(
      `https://adoptpokemon-backend.onrender.com/api/v1/admin/pokemon/${id}`
    );

    dispatch({
      type: DELETE_POKEMON_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_POKEMON_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Pokemons Details
export const getPokemonDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: POKEMON_DETAILS_REQUEST });

    const { data } = await axios.get(
      `https://adoptpokemon-backend.onrender.com/api/v1/pokemon/${id}`,
      { withCredentials: true }
    );

    dispatch({
      type: POKEMON_DETAILS_SUCCESS,
      payload: data.pokemon,
    });
  } catch (error) {
    dispatch({
      type: POKEMON_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Feed Pokemon
export const feedPokemon = (id) => async (dispatch) => {
  try {
    dispatch({ type: POKEMON_FEED_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.put(
      `https://adoptpokemon-backend.onrender.com/api/v1/pokemon/${id}`,
      config
    );
    dispatch({
      type: POKEMON_DETAILS_SUCCESS,
      payload: data.pokemon,
    });
  } catch (error) {
    dispatch({
      type: POKEMON_FEED_FAIL,
      payload: error.response.data.message,
    });
  }
};
// My Pokemons
export const myAllPokemons = () => async (dispatch) => {
  try {
    dispatch({ type: MY_POKEMON_REQUEST });

    const { data } = await axios.get(
      "https://adoptpokemon-backend.onrender.com/api/v1/me/pokemons",
      { withCredentials: true }
    );
    dispatch({ type: MY_POKEMON_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MY_POKEMON_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Adopt Pokemon
export const adoptPokemon = (id, pokemon) => async (dispatch) => {
  try {
    dispatch({ type: ADOPT_POKEMON_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    const { data } = await axios.get(
      `https://adoptpokemon-backend.onrender.com/api/v1/pokemon/adopt/${id}`,
      pokemon,
      config
    );

    dispatch({
      type: ADOPT_POKEMON_SUCCESS,
      payload: data.pokemon,
    });
  } catch (error) {
    dispatch({
      type: ADOPT_POKEMON_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Adopt Pokemon
export const removePokemon = (id) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_POKEMON_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    const { data } = await axios.post(
      `https://adoptpokemon-backend.onrender.com/api/v1/pokemon/remove/${id}`,

      config
    );

    dispatch({
      type: REMOVE_POKEMON_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: REMOVE_POKEMON_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
