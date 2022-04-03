const mongoose = require("mongoose");

const user = new mongoose.Schema({
    name:{
        type:String,
    },
    course:
    [{
        url:{
            type:String,
        },
        completed:{
            type:Boolean,
        }
    }, {
        url:{
            type:String,
        },
        completed:{
            type:Boolean,
        }
    }],
});

module.exports = mongoose.model("User", user);