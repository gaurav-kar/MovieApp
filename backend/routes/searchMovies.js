const express = require("express");
const axios = require("axios");
const router = express.Router();
const API_KEY = process.env.API_KEY;

router.get("/:id", async (req, res, next) => {
  const movieSearchKeyword = req.params.id;
  const url = `
  https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieSearchKeyword}&page=1&include_adult=false`;
  try {
    const { data } = await axios.get(url);

    const movies = data.results.map((movie) => {
      return {
        id: movie["id"],
        movieName: movie["original_title"],
        img: `https://image.tmdb.org/t/p/w200${movie["poster_path"]}`,
        title: movie["title"],
        releaseDate: movie["release_date"],
        overview: movie["overview"],
        vote_average: movie["vote_average"],
        backDropImg: `https://image.tmdb.org/t/p/original${movie["backdrop_path"]}`,
      };
    });

    const filteredMovies = movies.filter((item) => !item.img.includes("null") && !item.backDropImg.includes("null"));

    res.status(200).json(filteredMovies);
  } catch (err) {
    res.status(503).json({ message: "Service Unavailable" });
  }
});

module.exports = router;
