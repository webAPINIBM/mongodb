 const express = require("express");
 const router = express.Router();




 let avengersArray = [

    {id:1,name:"Bat Man"},
    {id:2,name:"Super Man"},
    {id:3,name:"Iron Man"},
    {id:4,name:"Shark"}
]

//Post Request
router.post("/api/avangers/",(req,res) => {

    let newAvanger = {
        id : avengersArray.length + 1,
        name : req.body.name
    };
    avengersArray.push(newAvanger)
    return res.status(200),send(newAvanger);
})


//Get All Avangers
router.get("/",(req,res)=>{

    res.send(avengersArray)
})

//Get By Id
router.get("/:id",(req,res)=>{

    let reqId = req.params.id
    let avanger = avengersArray.find(avanger => avanger.id == reqId)
    if (!avanger){
        return res.status(400).send("No Data Existing for Requested Avanger id : "+reqId)
    }else{
        res.status(200).send(avanger)
    }
})



//update by ID
router.put("/api/avangers/:id",(req,res) => {

    let requestedId = req.params.id
    let avanger = avengersArray.find(avanger => avanger.id = requestedId)
    if (!avanger){
        return res.send("No Existing Data For Currsnt Id " + requestedId)
    }
    avanger.name = req.body.name;
    return res.send(avanger);
});

//Delete Item
router.delete("/api/avangers/",(req,res) => {
    let requestedId = req.body.id
    let avanger = avengersArray.find(avanger => avanger.id = requestedId)
    if (!avanger){
        return res.send("No Existing Data For Current Id " + requestedId)
    }
    avengersArray.splice(avanger.id,1)
    return res.send(avengersArray);
});

module.exports = router