const express = require("express");
const home = express.Router()


//Get API
home.get("/",(req,res)=>{
    res.send("Sathsara API Bindings")
})

module.exports = home