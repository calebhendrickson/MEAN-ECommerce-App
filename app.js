const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");

// Connect to database
// TODO make this purely process.env.MONGODB_URI or localhost so that people cant have access to my db
mongoose.connect(process.env.MONGODB_URI || config.database);

// On connection
mongoose.connection.on("connected", () => {
  console.log("connected to database " + config.database);
});

// On error
mongoose.connection.on("error", err => {
  console.log("database error " + err);
});

// initialize instance of express (actually our app)
const app = express();

// setting up server-side routes
// TODO create separate routes for users and products
const users = require("./routes/users");

const port = process.env.PORT || 8080;

// cors allows us to make a request to our api from a
// different domain name
app.use(cors());

// place to put our client side files (our enitre angular 2 app)
// set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/uploads", express.static("uploads"));

// parses incoming request bodies
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

//  TODO create separate routes for users and products
app.use("/users", users);

app.get("/", (req, res) => {
  res.send("Invalid Endpoint");
});

app.listen(port, () => {
  console.log("server started on " + port);
});
