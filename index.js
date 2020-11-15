require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

const app = express();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error(err));

//mongoose model

const postSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);

// routes

app.get("/ping", (req, res, next) => {
  res.send({ ping: "pong" });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
