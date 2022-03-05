require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const authRoute = require("./routes/auth");
const blogRoute = require("./routes/blog");

try {
  mongoose.connect(
    "mongodb+srv://danielkissner00:Blackgoku199@blog-db.xpacr.mongodb.net/blog-db?retryWrites=true&w=majority"
  );

  console.log("connected to db");
} catch (err) {
  console.log(err);
}

// middlewares
app.use(express.json());
app.use(cors({ origin: "*" }));

// routes
app.use("/api/auth", authRoute);
app.use("/api/blogs", blogRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`running on port ${PORT}`));
