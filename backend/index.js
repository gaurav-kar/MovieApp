const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

app.use(express.json());

const trendingRoute = require("./routes/trendingMovies");
const latestRoute = require("./routes/upcomingMovies");
const searchRoute = require("./routes/searchMovies");
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const favourites = require("./routes/favourites");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.use("/api/trendingMovies", trendingRoute);
app.use("/api/upcomingMovies", latestRoute);
app.use("/api/searchMovies", searchRoute);
app.use("/api/user/register", signupRoute);
app.use("/api/user/login", loginRoute);
app.use("/api/user/favourites", favourites);

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log("DB connection successfull")
);

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
