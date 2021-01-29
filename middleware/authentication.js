function Authenticate (req,res,next) {
    console.log("Authentification Middle Ware : Excuting .....");
    next();
}



module.exports = Authenticate
