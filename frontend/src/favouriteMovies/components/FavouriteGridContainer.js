import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import "./FavouriteGridContainer.css";

const FavouriteGridContainer = (props) => {
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
        <button className='fav_card_action__button' type='button' onClick={() => props.onDelete({ id: props.id })}>
          x
        </button>
      </div>
    </div>
  );
};

export default FavouriteGridContainer;
