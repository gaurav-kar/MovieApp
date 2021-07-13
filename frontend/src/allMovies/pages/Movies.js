import React, { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import NavBarUI from "../components/NavBarUI";
import MovieGridItems from "../components/MovieGridItems";

const Movies = () => {
  const [counter, setCounter] = useState(0);
  const [carouselImages, setcarouselImages] = useState(null);
  const [gridItems, setGridItems] = useState(null);

  useEffect(() => {
    fetch("/api/upcomingMovies")
      .then((res) => res.json())
      .then((data) => setGridItems(data));
  }, []);

  useEffect(() => {
    fetch("/api/trendingMovies")
      .then((res) => res.json())
      .then((data) => setcarouselImages(data));
  }, []);

  const nextCarouselItemHandler = () => {
    if (carouselImages.length - 1 > counter) {
      setCounter(counter + 1);
    }
  };
  const prevCarouselItemHandler = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const onEnteredInput = (input) => {
    fetch(`/api/searchMovies/${input}`)
      .then((res) => res.json())
      .then((data) => setGridItems(data));
  };

  return (
    <React.Fragment>
      <NavBarUI change={onEnteredInput} />
      <main>
        {carouselImages ? (
          <Carousel
            data={carouselImages[counter]}
            next={nextCarouselItemHandler}
            prev={prevCarouselItemHandler}
          />
        ) : (
          "Loading!!!"
        )}
        {gridItems ? <MovieGridItems data={gridItems} /> : "Loading!!!"}
      </main>
    </React.Fragment>
  );
};

export default Movies;
