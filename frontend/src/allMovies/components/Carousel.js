import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import "./Carousel.css";

const Carousel = (props) => {
  return (
    <div className='carousel-wrapper '>
      <div className='carousel'>
        <Link
          to={{
            pathname: "/movieTrendInfo",
            movieClicked: {
              movie: props,
            },
          }}
        >
          <AnimatePresence>
            <motion.img
              key={props.data.id}
              src={props.data.img}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, rotate: -180, scale: 0 }}
              transition={{ duration: 0.6 }}
              className='carousel__photo'
            />
          </AnimatePresence>
        </Link>
        <div className='carousel__button--next' onClick={props.next}></div>
        <div className='carousel__button--prev' onClick={props.prev}></div>
      </div>
    </div>
  );
};

export default Carousel;
