const mongoose = require("mongoose");

const user = new mongoose.Schema({
    name: {
        type: String,
    },
    course:
        [{
            title: String,
            file: String,
            completed: Number,
            date: Date,
            eval: [Number]

        },
        {
            title: String,
            file: String,
            completed: Number,
            date: Date,
            eval: [Number]
        },
        {
            title: String,
            file: String,
            completed: Number,
            date: Date,
            eval: [Number]
        },
        {
            title: String,
            file: String,
            completed: Number,
            date: Date,
            eval: [Number]
        },
        {
            title: String,
            file: String,
            completed: Number,
            date: Date,
            eval: [Number]
        },
        {
            title: String,
            file: String,
            completed: Number,
            date: Date,
            eval: [Number]
        },
        {
            title: String,
            file: String,
            completed: Number,
            date: Date,
            eval: [Number]
        },
        {
            title: String,
            file: String,
            completed: Number,
            date: Date,
            eval: [Number]
        },
        {
            title: String,
            file: String,
            completed: Number,
            date: Date,
            eval: [Number]
        }],
});

module.exports = mongoose.model("User", user);