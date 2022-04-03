const getUsers = require("express").Router();
const user = require("../../models/user");

getUsers.get("/get-users", (req,res) => {
    user.find({}, (err,docs) => {
        if(err){
            return res.json({
                msg:"Nepodařilo se načíst uživatele",
                documents:[]
            })
        }else{
            return res.json({
                msg:"Úspěšně se porařilo načíst uživatele",
                documents:docs
            })
        }
    })
})

module.exports = getUsers;