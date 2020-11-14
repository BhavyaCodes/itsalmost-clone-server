require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000

const app = express()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.error(err));


const postSchema = new mongoose.Schema({
    eventName: String,
    eventDate: Date
});

const Post = mongoose.model('Post', postSchema);

app.listen(PORT)

console.log("listening on port 5000...");