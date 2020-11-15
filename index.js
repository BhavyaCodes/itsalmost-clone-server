require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const Event = require("./models/Event");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

// routes
app.get("/ping", (req, res, next) => {
    res.send({ping: "pong"});
});

/**
 * Post event
 */
app.get('/events/:id', async (req, res, next) => {
    const {id} = req.params;
    try {
        const event = await Event.findOne({
            id
        });
        if(event === null || event === undefined){
            res.status(404).json({
                message: "There is no event with this id: " + id
            });
        }
        res.status(200).json(event);
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }

})

/**
 * Post event
 */
app.post('/events', async (req, res, next) => {
    const {eventName, eventDate} = req.body;
    try {
        const event = new Event({
          eventName,
          eventDate,
        });
        event.save({
          eventName,
          eventDate,
        });
        res.status(201).json(event);
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }

})

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));