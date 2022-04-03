const saveUser = require("express").Router();
const modelUser = require("../../models/user");

saveUser.post("/save-user", (req,res) => {
    const {name} = req.body;
    const surovina = new modelUser({
        name:name,
        course:
            [{
                url:"webovka1",
                completed:false,
            }, {
                url:"webovka2",
                completed:false,
            }]
    })
    surovina.save((err,document) => {
        if(err){
            return res.json({
                msg:"Bohužel nedošlo k vytvoření uživatele"
            })
        }else{
            return res.json({
                msg: `Došlo k úspěšnému vytvoření uživatele ${JSON.stringify(document)}`
            })
        }
    })
})

saveUser.get("/save-user", (req,res) => {
    res.send("Ano, navštívil jsi /save-user GETEM")
})

module.exports = saveUser;