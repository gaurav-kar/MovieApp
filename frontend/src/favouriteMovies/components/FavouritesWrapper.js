import React from "react";
import "./FavouritesWrapper.css";

const FavouritesWrapper = (props) => {
  return <div className='favourites_wrapper'>{props.children}</div>;
};

export default FavouritesWrapper;
