function Email(req,res,next){
    console.log("Email Sending Middle Ware : Excuting .....");
    next();
}

module.exports = Email