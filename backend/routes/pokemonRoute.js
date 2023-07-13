const express = require("express");
const {
  getAllPokemons,
  createPokemon,
  deletePokemon,
  getPokemonDetails,
  feedPokemon,
  decreaseHealthPokemon,
  adoptPokemon,
  getMyPokemons,
  removePokemon,
} = require("../controllers/pokemonController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/pokemons").get(getAllPokemons);
router
  .route("/admin/pokemon/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createPokemon);
router
  .route("/admin/pokemon/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deletePokemon);
router
  .route("/pokemon/:id")
  .get(getPokemonDetails)
  .put(isAuthenticatedUser, feedPokemon)
  .post(decreaseHealthPokemon);
router.route("/pokemon/adopt/:id").get(isAuthenticatedUser, adoptPokemon);
router.route("/pokemon/remove/:id").post(isAuthenticatedUser, removePokemon);
router.route("/me/pokemons").get(isAuthenticatedUser, getMyPokemons);
module.exports = router;
