const express = require("express");
const axios = require("axios");

const router = express.Router();
const API_KEY = process.env.API_KEY;

const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=GB`;

router.get("/", async (req, res, next) => {
  try {
    const { data } = await axios.get(url);

    const movies = data.results.map((movie) => ({
      id: movie["id"],
      movieName: movie["original_title"],
      img: `https://image.tmdb.org/t/p/w200${movie["poster_path"]}`,
      backDropImg: `https://image.tmdb.org/t/p/original${movie["backdrop_path"]}`,
      title: movie["title"],
      overview: movie["overview"],
      releaseDate: movie["release_date"],
      vote_average: movie["vote_average"],
    }));
    res.status(200).json(movies);
  } catch (err) {
    res.status(503).json({ message: "Service Unavailable" });
  }
});

module.exports = router;
