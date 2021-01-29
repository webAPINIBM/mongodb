const express = require('express');
const mongoose = require('mongoose')
const app = express()
const port = 3000

mongoose
.connect('mongodb://localhost/avengersdb',{ useUnifiedTopology: true , useNewUrlParser: true })


.then( () => {
console.log("Connected Success !!!!")
})
.catch((err) => console.log("Error" +err))

const authenticateMiidleware = require("./middleware/authentication")
const emailMiddleware = require("./middleware/email")
const home = require("./home")
const avangers = require("./Routes/routes");
const e = require('express');


app.use(express.json())

//Middle Ware Functions 
app.use(authenticateMiidleware)
app.use(emailMiddleware) 

app.use('/api/avangers',avangers) // routes
app.use("/",home)


//Set local host
app.listen(port,()=>{
    console.log("Connection Established ")
})
