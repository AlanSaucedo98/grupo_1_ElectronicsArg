const dbUsers = require('../data/userdatabase');

module.exports = function(req,res,next){
    if(req.cookies.userElectronicsArg){
        req.session.user = req.cookies.userElectronicsArg;
        next()
    }else{
        next()
    }
}