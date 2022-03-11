require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const authRoute = require("./routes/auth");
const blogRoute = require("./routes/blog");

try {
  mongoose.connect(process.env.MONGO_URL);

  console.log("connected to db");
} catch (err) {
  console.log(err);
}

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

// middlewares
app.use(express.json());
app.use(cors({ origin: "*" }));

// routes
app.use("/api/auth", authRoute);
app.use("/api/blogs", blogRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`running on port ${PORT}`));
