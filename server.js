const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const db = require("./databaze/connect");
const getMaterials = require("./routes/GET/getMaterial");
const saveMaterial = require("./routes/POST/saveMaterial");
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
app.use("/",cors(),getMaterials);
/**
 * Routy - POST
 */
app.use("/", saveMaterial);


app.get("/", (request,response) => {
    response.send("Hlavní stránka");
});

app.listen(PORT, (err) => {
    console.log(`Server běží na ${PORT}!`)
});