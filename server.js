const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const db = require("./databaze/connect");

db.connect();
app.get("/", (request,response) => {
    response.send("Hlavní stránka");
});

app.listen(PORT, (err) => {
    console.log(`Server běží na ${PORT}!`)
});