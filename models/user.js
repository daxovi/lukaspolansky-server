const mongoose = require("mongoose");

const lesson = new mongoose.Schema({
    title: String,
    file: String,
    completed: Number,
    date: Date,
    eval: [Number]
})

const user = new mongoose.Schema({
    name: {
        type: String,
    },
    course:
        [lesson],
});

module.exports = mongoose.model("User", user);