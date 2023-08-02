const express = require("express");
const errorMiddleware = require("./middleware/error");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const pokemon = require("./routes/pokemonRoute");
const user = require("./routes/userRoute");
const { decreaseHealthPokemon } = require("./controllers/pokemonController");
const morgan = require("morgan");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
// app.use(cookieParser());

//Routes Import
app.use(morgan("dev"));
app.use("/api/v1", pokemon);
app.use("/api/v1", user);
decreaseHealthPokemon();

//Error Middleware
app.use(errorMiddleware);
module.exports = app;
