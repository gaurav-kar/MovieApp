const express = require("express");
const axios = require("axios");
const router = express.Router();
const API_KEY = process.env.API_KEY;

const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

router.get("/", async (req, res, next) => {
  try {
    const { data } = await axios.get(url);

    const movies = data.results.map((movie) => ({
      id: movie["id"],
      movieName: movie["original_title"],
      img: `https://image.tmdb.org/t/p/original${movie["backdrop_path"]}`,
      title: movie["title"],
      overview: movie["overview"],
      vote_average: movie["vote_average"],

      releaseDate: movie["release_date"],
    }));
    res.status(200).json(movies);
  } catch (err) {
    res.status(503).json({ message: "Service Unavailable" });
  }
});

module.exports = router;
