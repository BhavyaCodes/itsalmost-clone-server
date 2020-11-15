const mongoose = require("mongoose");

//post model

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

module.exports =  Post;
