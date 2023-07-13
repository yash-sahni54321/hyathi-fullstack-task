const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Pokemon = require("../models/pokemonModel");
const ErrorHandler = require("../utils/ErrorHandler");
const cron = require("node-cron");
// create Pokemon -- Admin
exports.createPokemon = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;
  const pokemon = await Pokemon.create(req.body);

  res.status(201).json({
    success: true,
    pokemon,
  });
});

//Delete a pokemon -- Admin
exports.deletePokemon = catchAsyncErrors(async (req, res, next) => {
  const pokemon = await Pokemon.findById(req.params.id);

  if (!pokemon) {
    return next(new ErrorHandler("Pokemon Not Found", 404));
  }

  await pokemon.deleteOne();
  res.status(200).json({
    success: true,
    message: "Pokemon deleted successfully",
  });
});

//Get Pokemon Details
exports.getPokemonDetails = catchAsyncErrors(async (req, res, next) => {
  const pokemon = await Pokemon.findById(req.params.id);

  if (!pokemon) {
    return next(new ErrorHandler("Pokemon Not Found", 404));
  }

  res.status(200).json({
    success: true,
    pokemon,
  });
});

//Get All Pokemons
exports.getAllPokemons = catchAsyncErrors(async (req, res, next) => {
  const Allpokemons = await Pokemon.find();
  const pokemons = Allpokemons.filter((poke) => poke.isAdopted == "false");
  res.status(200).json({
    success: true,
    pokemons,
  });
});

//Feed Pokemon
exports.feedPokemon = catchAsyncErrors(async (req, res, next) => {
  const pokemon = await Pokemon.findById(req.params.id);
  if (!pokemon) {
    return next(new ErrorHandler("Pokemon Not Found", 404));
  }
  pokemon.hp += 10;
  const data = await pokemon.save();

  res.status(200).json({
    success: true,
    pokemon: data,
    message: `Pokemon fed successfully # New hp : ${pokemon.hp}`,
  });
});

//Decrese Health of Pokemon
exports.decreaseHealthPokemon = () => {
  const decreaseHealthPokemonCron = cron.schedule(
    "*/10 * * * * *",
    async () => {
      try {
        const pokemons = await Pokemon.find();
        let count = 0;
        pokemons.forEach(async (pokemon) => {
          const lastUpdated = pokemon.updatedAt;
          // if (((Date.now() - lastUpdated) / 3600000 >= 24) && pokemon.hp>0) {
          //   //Decrese health after 24 hours.

          // if (((Date.now() - lastUpdated) / 1000*60*1 >= 30) && pokemon.hp>0) {
          //   // Decrese health after 30 mins.

          if ((Date.now() - lastUpdated) / 1000 >= 10 && pokemon.hp > 0) {
            //Decrese health after 10 secs.

            pokemon.hp -= 5;
            await pokemon.save();
            count++;
            if (pokemon.hp <= 0) {
              pokemon.isAdopted = "false";
              pokemon.user = " ";
              await pokemon.save({ validateBeforeSave: false });
            }
          } else if (pokemon.hp === 0) {
            pokemon.isAdopted = "false";
            pokemon.user = " ";
            await pokemon.save({ validateBeforeSave: false });
          }
        });
      } catch (err) {}
    }
  );

  decreaseHealthPokemonCron.start();
};

// Adopt Pokemons
exports.adoptPokemon = catchAsyncErrors(async (req, res, next) => {
  const pokemon = await Pokemon.findById(req.params.id);

  if (!pokemon) {
    return next(new ErrorHandler("Product not Found", 404));
  }

  if (pokemon.isAdopted === "true") {
    return next(new ErrorHandler("Pokemon already adopted", 400));
  }

  pokemon.isAdopted = "true";
  pokemon.hp = 10;
  pokemon.user = req.user.id;

  const data = await pokemon.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
    pokemon: data,
  });
});

//Get All Pokemon of user
exports.getMyPokemons = catchAsyncErrors(async (req, res, next) => {
  const MyPokemons = await Pokemon.find({ user: req.user._id });
  const myPokemons = MyPokemons.filter(
    (pokemon) => pokemon.isAdopted === "true"
  );
  res.status(200).json({
    success: true,
    myPokemons,
  });
});

//Remove Pokemon
exports.removePokemon = catchAsyncErrors(async (req, res, next) => {
  const pokemon = await Pokemon.findById(req.params.id);
  if (!pokemon) {
    return next(new ErrorHandler("Product not Found", 404));
  }
  pokemon.isAdopted = "false";
  pokemon.user = "";
  pokemon.hp = 0;

  await pokemon.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
  });
});
