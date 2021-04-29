const mongoose = require("mongoose");
const material = new mongoose.Schema({
name:{
    type:String,
}
});
module.exports = mongoose.model("Material", material);