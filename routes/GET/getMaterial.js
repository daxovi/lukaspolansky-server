const getMaterials = require("express").Router();
const materials = require("../../models/material");
getMaterials.get("/get-materials", (req,res) => {
    materials.find({}, (err,docs) => {
        if(err){
            return res.json({
                msg:"Bohužel se nepodařilo získat žádné dokumenty",
                documents:[]
            })
        }else{
            return res.json({
                msg:"Úspěšné se nám podařilo získat suroviny",
                documents:docs
            })
        }
    })
})

module.exports = getMaterials;