const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userHandler = require("../routeHandlers/userHandler");

// express app initialization
const app = express();
dotenv.config()
app.use(express.json());

// database connection with mongoose
mongoose
  .connect("mongodb://localhost/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

// application routes
app.use("/user", userHandler);

// default error handler
const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.use(errorHandler);

app.listen(3000, () => {
  console.log("app listening at port 3000");
});