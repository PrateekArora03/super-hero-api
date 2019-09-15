const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const indexRoutes = require("./routes/index");

mongoose.connect(process.env.mongodb_key, { useNewUrlParser: true }, err => {
  err ? console.log(err) : console.log("connected to DB!");
});

app.use("/api/hero-creater", indexRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running ${PORT}`);
});
