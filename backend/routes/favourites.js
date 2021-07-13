const express = require("express");
const router = express.Router();
const { Favourites } = require("../model/user");

const verify = require("../helpers/tokenVerify");

//Get All favourites for the user
router.get("/", verify, async (req, res, next) => {
  try {
    const allUserFavourites = await Favourites.find({ userRef: req.user.user });
    res.status(200).json({ response: allUserFavourites });
  } catch (err) {
    res.status(400).json({ message: "Bad Request" });
  }
});

//Add user favourites to the database
router.post("/", verify, async (req, res, next) => {
  //Check if favourite is already in the database or not
  const favExists = await Favourites.find({
    userRef: req.user.user,
    id: req.body.id,
  });
  if (favExists.length != 0)
    return res.status(400).json({ message: "Already added to favourites" });

  //Add to Database
  const favMovie = new Favourites({
    ...req.body,
    userRef: req.user.user,
  });
  try {
    const savedFavMovie = await favMovie.save();
    res.status(201).json({ movie: savedFavMovie });
  } catch (err) {
    res.status(400).json({ message: "Bad Request" });
  }
});

//Delete user favourites
router.delete("/", verify, async (req, res, next) => {
  try {
    const isDeleted = await Favourites.deleteMany({
      userRef: req.user.user,
      id: req.body.id,
    });
    return res.status(204).json({ movie: "Movie Removed" });
  } catch (err) {
    return res.status(400).json({ message: "Bad Request" });
  }
});

module.exports = router;
