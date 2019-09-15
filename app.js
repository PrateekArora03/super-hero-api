const express = require("express");
const app = express();
const mongoose = require("mongoose");

const indexRoutes = require("./routes/index");

mongoose.connect("mongodb:localhost/test", err => {
  err ? console.log(err) : console.log("connected to DB!");
});

app.use("/api", indexRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running ${PORT}`);
});
