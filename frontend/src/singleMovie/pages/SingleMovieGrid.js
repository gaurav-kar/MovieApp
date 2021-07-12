import React from "react";
import { useLocation } from "react-router-dom";
import "./SingleMovie.css";
import { motion, AnimatePresence } from "framer-motion";

const SingleMovieGrid = () => {
  const location = useLocation();
  const { movie } = location.movieClicked;

  return (
    <div className='movie_container'>
      <div className='movie_bannerImage'>
        <AnimatePresence>
          <motion.img
            key={movie.id}
            src={movie.backDropImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, rotate: -180, scale: 0 }}
            transition={{ duration: 0.7 }}
            className='carousel__photo'
          />
        </AnimatePresence>
      </div>
      <div className='movie_decription'>
        <p>
          {movie.movieName} <span>{movie.vote_average}/10</span>
        </p>
        <p>{movie.overview}</p>
        <p>Release Date: {movie.releaseDate}</p>
      </div>
    </div>
  );
};

export default SingleMovieGrid;
