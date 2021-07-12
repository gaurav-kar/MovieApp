const express = require("express");
const { User } = require("../model/user");
const router = express.Router();
const { registerValidation } = require("../model/userValidation");
const encryptPassword = require("../helpers/passwordEncrypt");

router.post("/", async (req, res, next) => {
  //Validate Data before creating a new user

  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Check if user is already in the database or not
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email already exists");

  //Hash the password
  const hashedPassword = await encryptPassword(req.body.password);

  //Create a new User
  const user = new User({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    password: hashedPassword,
  });

  //Save user to database having passed all validations
  try {
    const savedUser = await user.save();
    res.status(200).json({ user: savedUser._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
