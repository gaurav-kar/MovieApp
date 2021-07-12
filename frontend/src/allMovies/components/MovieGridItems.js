import React, { useContext } from "react";
import MovieGridContainer from "./MovieGridContainer";
import MovieWrapper from "./MovieWrapper";
import "./MovieGridItems.css";
import { AuthContext } from "../../context/auth-context";

const MovieGridItems = (props) => {
  const auth = useContext(AuthContext);
  const movies = props.data;

  const onAddToFav = (favInfo) => {
    //Add it to the mongoDB using the user token in context

    fetch("http://localhost:5000/api/user/favourites", {
      method: "POST",
      headers: {
        Authorization: auth.userToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...favInfo,
      }),
    });
  };
  return (
    <>
      <h2 className='movie_grid__heading'>Movie Dashboard...</h2>
      <MovieWrapper>
        {movies.map((item) => (
          <MovieGridContainer
            key={item.id}
            image={item.img}
            text={item.title}
            movieName={item.movieName}
            releaseDate={item.releaseDate}
            backDropImg={item.backDropImg}
            vote_average={item.vote_average}
            overview={item.overview}
            onAddtoFav={onAddToFav}
            id={item.id}
          />
        ))}
      </MovieWrapper>
    </>
  );
};

export default MovieGridItems;
