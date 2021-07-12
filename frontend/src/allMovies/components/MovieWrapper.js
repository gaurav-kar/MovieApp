import React from "react";
import "./MovieWrapper.css";

const MovieWrapper = (props) => {
  return <div className='movie_wrapper'>{props.children}</div>;
};

export default MovieWrapper;
