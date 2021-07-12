import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../../context/auth-context";
import "./MovieGridContainer.css";

const MovieGridContainer = (props) => {
  const auth = useContext(AuthContext);
  return (
    <div className='item'>
      <div className='content'>
        <div className='flip-card'>
          <Link
            to={{
              pathname: "/movieGridInfo",
              movieClicked: {
                movie: props,
              },
            }}
          >
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <AnimatePresence>
                  <motion.img
                    key={props.id}
                    src={props.image}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, rotate: -180, scale: 0 }}
                    transition={{ duration: 1 }}
                    className='carousel__photo'
                  />
                </AnimatePresence>
              </div>
              <div className='flip-card-back'>
                <h1>{props.movieName}</h1>
                <div className='flip-card-back__release_date'>
                  <em>Release Date: </em>
                  <p>{props.releaseDate}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        {auth.isLoggedIn && (
          <button
            className='card_action__button'
            type='button'
            onClick={() => {
              props.onAddtoFav({
                id: props.id,
                img: props.image,
                title: props.text,
                movieName: props.movieName,
                backDropImg: props.backDropImg,
                overview: props.overview,
                releaseDate: props.releaseDate,
                vote_average: props.vote_average,
              });
            }}
          >
            +
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieGridContainer;
