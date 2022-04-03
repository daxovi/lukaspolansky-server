const mongoose = require("mongoose");

const material = new mongoose.Schema({
    name:{
        type:String,
    }
});

// v databazi uklada do kolekde "materials" podle "Material"
module.exports = mongoose.model("Material", material);