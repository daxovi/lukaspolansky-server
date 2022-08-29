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
        [lesson
            /*
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
            },
            {
                title: String,
                file: String,
                completed: Number,
                date: Date,
                eval: [Number]
            }
            */
        ],
});

module.exports = mongoose.model("User", user);