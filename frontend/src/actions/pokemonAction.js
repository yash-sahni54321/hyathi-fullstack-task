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
const server = "https://adoptpokemon-backend.onrender.com";
const getUserToken = () => {
  return localStorage.getItem("token");
};

// Get All Pokemons
export const getPokemon = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_POKEMON_REQUEST });

    const { data } = await axios.get(`${server}/api/v1/pokemons`, {
      withCredentials: true,
    });

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
    // Get the token from localStorage
    const token = getUserToken();

    if (!token) {
      // Handle the case where the user is not authenticated
      throw new Error("Please log in to access this resource.");
    }

    const headers = {
      Authorization: `Bearer ${token}`, // Include the token in the headers
    };

    // Check the config object to verify the headers

    const { data } = await axios.post(
      `${server}/api/v1/admin/pokemon/new`,
      pokemonData,
      {
        headers: headers,
      }
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
    // Get the token from localStorage
    const token = getUserToken();

    if (!token) {
      // Handle the case where the user is not authenticated
      throw new Error("Please log in to access this resource.");
    }

    const headers = {
      Authorization: `Bearer ${token}`, // Include the token in the headers
    };

    // Check the config object to verify the headers

    const { data } = await axios.delete(
      `${server}/api/v1/admin/pokemon/${id}`,
      {
        headers: headers,
      }
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

    const { data } = await axios.get(`${server}/api/v1/pokemon/${id}`, {
      withCredentials: true,
    });

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
    // Get the token from localStorage
    const token = getUserToken();

    if (!token) {
      // Handle the case where the user is not authenticated
      throw new Error("Please log in to access this resource.");
    }
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json", // Include the token in the headers
    };

    // Check the config object to verify the headers
    console.log(headers);
    const { data } = await axios.put(`${server}/api/v1/pokemon/${id}`, config, {
      headers: headers,
    });
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
    // Get the token from localStorage
    const token = getUserToken();

    if (!token) {
      // Handle the case where the user is not authenticated
      throw new Error("Please log in to access this resource.");
    }

    const headers = {
      Authorization: `Bearer ${token}`, // Include the token in the headers
    };

    // Check the config object to verify the headers
    console.log(headers);
    const { data } = await axios.get(`${server}/api/v1/me/pokemons`, {
      headers: headers,
    });
    console.log("AllPok");
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

    // Get the token from localStorage
    const token = getUserToken();

    if (!token) {
      // Handle the case where the user is not authenticated
      throw new Error("Please log in to access this resource.");
    }

    const headers = {
      Authorization: `Bearer ${token}`, // Include the token in the headers
    };

    // Check the config object to verify the headers

    const { data } = await axios.get(
      `${server}/api/v1/pokemon/adopt/${id}`,

      { headers: headers }
    );

    console.log("hey after adopt");
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

    // Get the token from localStorage
    const token = getUserToken();

    if (!token) {
      // Handle the case where the user is not authenticated
      throw new Error("Please log in to access this resource.");
    }
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const headers = {
      Authorization: `Bearer ${token}`, // Include the token in the headers
    };

    // Check the config object to verify the headers
    const { data } = await axios.post(
      `${server}/api/v1/pokemon/remove/${id}`,
      config,
      {
        headers: headers,
      }
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
