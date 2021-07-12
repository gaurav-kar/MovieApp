import React from "react";
import FavouriteGridContainer from "./FavouriteGridContainer";
import FavouritesWrapper from "./FavouritesWrapper";
import "./FavouriteGridItems.css";

const FavouriteGridItems = (props) => {
  const movies = props.data;
  const onDelete = props.onDelete; //Delete Handler

  return (
    <>
      <h2 className='fav_grid__heading'>Your Favourites...</h2>
      <FavouritesWrapper>
        {movies.map((item) => (
          <FavouriteGridContainer
            key={item.id}
            image={item.img}
            text={item.title}
            movieName={item.movieName}
            releaseDate={item.releaseDate}
            backDropImg={item.backDropImg}
            vote_average={item.vote_average}
            overview={item.overview}
            id={item.id}
            onDelete={onDelete}
          />
        ))}
      </FavouritesWrapper>
    </>
  );
};

export default FavouriteGridItems;
