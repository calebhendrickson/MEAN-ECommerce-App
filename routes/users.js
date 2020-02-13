const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

const config = require("../config/database");
const User = require("../models/user");

// Register
router.post("/register", (req, res, next) => {
  var status = false;

  // implment non-duplicate users
  User.getUserByUsername(req.body.username, (err, user) => {
    if (err) {
      throw err;
    }
    if (user != null) {
      res.json({ success: false, msg: "sorry that username is taken" });
    }
  });

  // this is the "magic line"
  if (req.body.username == "manager") {
    status = true;
  }
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    type: status
  });

  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({ success: false, msg: "failed to register user" });
    } else {
      res.json({ success: true, msg: "user registered" });
    }
  });
});

// Authenticate
router.post("/authenticate", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if (err) {
      throw err;
    }
    if (!user) {
      return res.json({ success: false, msg: "User not found" });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) {
        throw err;
      }
      if (isMatch) {
        const token = jwt.sign(user.toJSON(), config.secret, {
          // one week in seconds
          expiresIn: 604800
        });

        res.json({
          success: true,
          token: "Bearer " + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            type: user.type
          }
        });
      } else {
        return res.json({ success: false, msg: "Wrong Password" });
      }
    });
  });
});

router.put("/reset/:_id", (req, res, next) => {
  // generate random key
  // get the user by id
  // set that key as the user's password
  // send email to that user using mailgun containing the key
  // also within the email tell the user to login using that key
  // and that they can change the password from the profile page
});

router.put("/changepassword:_id", (req, res, next) => {
  // get user by id
  // update the password field
});

// Profile
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.json({ user: req.user });
  }
);

module.exports = router;
