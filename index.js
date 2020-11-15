require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error("Database error: " + err.message));

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

app.post("/addtimer", (req, res) => {
  const data = req.body.data;
  kennel.insertMany([...data], function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
