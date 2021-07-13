import React, { useEffect, useState, useContext } from "react";
import FavouriteGridItems from "../components/FavouriteGridItems";
import { AuthContext } from "../../context/auth-context";

const Favourites = () => {
  const auth = useContext(AuthContext);
  const [gridItems, setGridItems] = useState(null);
  const [didDelete, setDidDelete] = useState(0);

  const onDeleteHandler = (movie_id) => {
    //Call Delete API passing the movie ID
    //Update didDelete state

    fetch("/api/user/favourites", {
      method: "DELETE",
      headers: {
        Authorization: auth.userToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...movie_id,
      }),
    }).then(() => setDidDelete(didDelete + 1));

    // setDidDelete(didDelete + 1);
  };

  useEffect(() => {
    fetch("/api/user/favourites", {
      headers: {
        Authorization: auth.userToken,
      },
    })
      .then((res) => res.json())
      .then((data) => setGridItems(data.response));
  }, [auth.userToken, didDelete]);

  return gridItems ? (
    <FavouriteGridItems onDelete={onDeleteHandler} data={gridItems} />
  ) : (
    "Loading your favourites"
  );
};

export default Favourites;
