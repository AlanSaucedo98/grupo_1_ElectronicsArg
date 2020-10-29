const db = require('../database/models'); //requiero La base de datos mysql


module.exports = function(req,res,next){
    if(req.cookies.userElectronicsArg){
        req.session.user = req.cookies.userElectronicsArg;
        next()
    }else{
        next()
    }
}