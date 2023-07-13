import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  pokemonsReducer,
  pokemonDetailsReducer,
  newPokemonReducer,
  pokemonReducer,
  myPokemonsReducer,
  AdoptPokemonReducer,
  RemovePokemonReducer,
} from "./reducers/pokemonReducer";
import { userReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  pokemons: pokemonsReducer,
  pokemonDetails: pokemonDetailsReducer,
  newPokemon: newPokemonReducer,
  pokemon: pokemonReducer,
  user: userReducer,
  myPokemons: myPokemonsReducer,
  adoptPokemon: AdoptPokemonReducer,
  removePokemon: RemovePokemonReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
