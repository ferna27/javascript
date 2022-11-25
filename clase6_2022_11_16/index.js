const express = require("express");

 let app = express();
app.use(express.static(__dirname + "/public"))
 app.get("/",(req,res)=> {

    res.sendFile(__dirname + "/public/index.html")
 });

 app.listen(2200);
 console.log("puerto corriendo http://localhost:2200 ");