const mongoose = require("mongoose");
const { string } = require("@hapi/joi");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const favMovies = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  userRef: String,
  img: String,
  title: String,
  movieName: String,
  backDropImg: String,
  overview: String,
  releaseDate: String,
  vote_average: Number,
});

const User = mongoose.model("user", userSchema);
const Favourites = mongoose.model("favourites", favMovies);

module.exports = {
  User,
  Favourites,
};
