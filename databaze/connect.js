const Mongoose = require("mongoose");
const dotenv = require("dotenv");
class dbConnect {
    connect(){
        dotenv.config();
        Mongoose.connect(process.env.DB_CONNECT,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true
        },(err) => {
            if(err) throw new Error("K databázi se nejde připojit");
            console.log("Připojeno úspěšně k databázi");
        } )
    }
}

module.exports =  new dbConnect();