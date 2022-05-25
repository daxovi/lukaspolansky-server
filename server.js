const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const db = require("./databaze/connect");
const getMaterials = require("./routes/GET/getMaterial");
const saveMaterial = require("./routes/POST/saveMaterial");

const getUsers = require("./routes/GET/getUsers");
const saveUser = require("./routes/POST/saveUser");

const cors = require("cors");
db.connect();

/**
 * Middleware
 * Povolme přijímat JSON z frontendu
 */
 app.use(express.json({extended:false}));
 app.use(express.text({extended:false}));

/**
 * Routy - GET
 */
app.use("/",cors(), getMaterials);
app.use("/",cors(), getUsers);

/**
 * Routy - POST
 */
app.use("/", saveMaterial);
app.use("/", saveUser);


app.get("/", (request,response) => {
    response.send("Hlavní stránka");
});

app.listen(PORT, (err) => {
    console.log(`Server běží na ${PORT}!`)
});