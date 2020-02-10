const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");

// Connect to database
mongoose.connect(config.database);

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

app.use("/users", users);

app.get("/", (req, res) => {
  res.send("Invalid Endpoint");
});

app.listen(port, () => {
  console.log("server started on " + port);
});
