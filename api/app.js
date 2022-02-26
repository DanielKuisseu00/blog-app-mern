require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

try {
  mongoose.connect(
    "mongodb+srv://danielkissner00:Blackgoku199@blog-db.xpacr.mongodb.net/blog-db?retryWrites=true&w=majority"
  );

  console.log("connected to db");
} catch (err) {
  console.log(err);
}

const authRoute = require("./routes/auth");
// middlewares
app.use(express.json());

// routes
app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`running on port ${PORT}`));
