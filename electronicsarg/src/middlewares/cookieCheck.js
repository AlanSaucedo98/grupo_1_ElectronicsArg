const dbUsers = require('../data/userdatabase');

module.exports = function(req,res,next){
    if(req.cookies.userMercadoLiebre){
        req.session.user = req.cookies.userMercadoLiebre;
        next()
    }else{
        next()
    }
}