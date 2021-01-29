const mongoose = require('mongoose');
const avangersSchema = new mongoose.Schema({
    name : String,
    birthName : String,
    movies : String, 
    likecount : Number,
    deceased : Boolean
})
