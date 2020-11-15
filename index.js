
const express = require("express");
const Post = require("./models/Post");

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: false}))

// routes
app.get("/ping", (req, res, next) => {
    res.send({ping: "pong"});
});

/**
 * Post event
 */
app.post('/events', async (req, res, next) => {
    const {eventName, eventDate} = req.body;
    try {
        const post = new Post({
            eventName,
            eventDate
        })
        post.save({
            eventName, eventDate
        })
        res.status(201).json(post)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }

})

module.exports = app;

