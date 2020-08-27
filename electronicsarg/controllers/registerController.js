const dbProducts = require('../data/userdatabase') //requiero la base de datos de productos


const fs =require("fs");
const path =require ("path")


module.exports = {
    index: function(req, res){
        res.render('register', { title: 'Registro' });
    },

    crear: function(req,res){
        
        let user = {
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            user: req.body.user,
            datebirth: req.body.datebirth,
            password: req.body.password,

        }

        res.send(user)
    }
}