const express = require("express");
const errorMiddleware = require("./middleware/error");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const pokemon = require("./routes/pokemonRoute");
const user = require("./routes/userRoute");
const { decreaseHealthPokemon } = require("./controllers/pokemonController");
const app = express();
app.use(
  cors({
    origin: ["https://hyathi-fullstack-yashtask.vercel.app/"],
    credentials: true, // Allow sending cookies in the request
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes Import

app.use("/api/v1", pokemon);
app.use("/api/v1", user);
decreaseHealthPokemon();

//Error Middleware
app.use(errorMiddleware);
module.exports = app;
