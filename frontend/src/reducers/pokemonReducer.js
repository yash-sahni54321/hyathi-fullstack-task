import {
  ALL_POKEMON_FAIL,
  ALL_POKEMON_REQUEST,
  ALL_POKEMON_SUCCESS,
  NEW_POKEMON_REQUEST,
  NEW_POKEMON_SUCCESS,
  NEW_POKEMON_FAIL,
  DELETE_POKEMON_REQUEST,
  DELETE_POKEMON_SUCCESS,
  DELETE_POKEMON_RESET,
  DELETE_POKEMON_FAIL,
  POKEMON_DETAILS_REQUEST,
  POKEMON_DETAILS_FAIL,
  POKEMON_DETAILS_SUCCESS,
  CLEAR_ERRORS,
  POKEMON_FEED_REQUEST,
  POKEMON_FEED_SUCCESS,
  POKEMON_FEED_FAIL,
  POKEMON_FEED_RESET,
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

export const pokemonsReducer = (state = { pokemons: [] }, action) => {
  switch (action.type) {
    case ALL_POKEMON_REQUEST:
      return {
        loading: true,
        pokemons: [],
      };
    case ALL_POKEMON_SUCCESS:
      return {
        loading: false,
        pokemons: action.payload.pokemons,
      };

    case ALL_POKEMON_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newPokemonReducer = (state = { pokemon: {} }, action) => {
  switch (action.type) {
    case NEW_POKEMON_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_POKEMON_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        pokemon: action.payload.pokemon,
      };
    case NEW_POKEMON_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_POKEMON_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case DELETE_POKEMON_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_POKEMON_RESET:
      return {
        ...state,
        isDeleted: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const pokemonDetailsReducer = (state = { pokemon: {} }, action) => {
  switch (action.type) {
    case POKEMON_DETAILS_REQUEST:
    case ADOPT_POKEMON_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POKEMON_DETAILS_SUCCESS:
    case ADOPT_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemon: action.payload,
      };
    case POKEMON_DETAILS_FAIL:
    case ADOPT_POKEMON_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Feed Reducer
export const pokemonFeedReducer = (state = {}, action) => {
  switch (action.type) {
    case POKEMON_FEED_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case POKEMON_FEED_SUCCESS:
      return {
        ...state,
        loading: false,
        isFeeded: action.payload,
      };
    case POKEMON_FEED_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case POKEMON_FEED_RESET:
      return {
        ...state,
        isFeeded: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// My Pokemons Reducer
export const myPokemonsReducer = (state = { myPokemons: [] }, action) => {
  switch (action.type) {
    case MY_POKEMON_REQUEST:
      return {
        loading: true,
        myPokemons: [],
      };
    case MY_POKEMON_SUCCESS:
      return {
        loading: false,
        myPokemons: action.payload.myPokemons,
      };

    case MY_POKEMON_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Adopt Pokemon
export const AdoptPokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case ADOPT_POKEMON_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADOPT_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        Adopted: action.payload,
      };
    case ADOPT_POKEMON_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADOPT_POKEMON_RESET:
      return {
        ...state,
        Adopted: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Remove Pokemon
export const RemovePokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case REMOVE_POKEMON_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        Adopted: action.payload,
      };
    case REMOVE_POKEMON_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
