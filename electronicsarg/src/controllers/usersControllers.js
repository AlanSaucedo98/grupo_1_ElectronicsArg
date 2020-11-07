
//Requiero Base de Datos SQL
const db = require('../database/models');

const {validationResult, body} = require('express-validator');
const bcrypt =require('bcrypt');
const fs = require('fs');
const path = require('path');


module.exports = {
    register:function(req,res){
        console.log(req.session.user)
        res.render('register',{
            title:"Registro de Usuario",
            user:req.session.user

        })
    },
    processRegister:function(req,res){
        let errors = validationResult(req);
        
        

        if(errors.isEmpty()){
            db.Users.create(
            
                {
                
                    nombre:req.body.name,
                    apellido:req.body.lastname,
                    email:req.body.email,
                    avatar: (req.files[0])?req.files[0].filename:"default.png",
                    user :req.body.user,
                    nacimiento:req.body.datebirth,
                    password:bcrypt.hashSync(req.body.password,10),
                    rol:req.body.rol
                }
        )
        .then(result => {
            console.log(result)
            if(req.session.user){
                req.session.user = result;
                return res.redirect('/login')
            }
            return res.redirect('/users/login');
        })
        .catch(errores => {
            console.log(errores)
        })
        }else{
            res.render('register',{
                title:"Registro de Usuarios",
                errors:errors.mapped(),
                user:req.session.user
            })
        }
    },
    login:function(req,res){
        res.render('userLogin',{
            title:"Login",
            user:req.session.user
        })
    },
    processLogin:function(req,res){
        let errors = validationResult(req);
        if(errors.isEmpty()){

            db.Users.findOne({
                where:{
                    email:req.body.email
                }
            })

            .then(user => {
                req.session.user = {
                    id: user.id,
                    nick: user.user,
                    email: user.email,
                    avatar: user.avatar,
                    rol: user.rol
                }
                if(req.body.recordar ){
                    res.cookie('userMercadoLiebre',req.session.user,{maxAge:1000*60*2})
                }

                res.locals.user = req.session.user;

                return res.redirect('/')
            })
        }else{
            return res.render('userLogin',{
                title:"Ingreso de Usuarios",
                errors: errors.mapped(),
                user:req.session.user

            })
        }
    },
    logout:function(req,res){
        req.session.destroy();
        if(req.cookies.userElectronicsArg){
            res.cookie('userElectronicsArg','',{maxAge:-1})
        }
        res.redirect('/')
    },
    profile:function(req,res){
        res.render('userProfile',{
            title:"Perfil de Usuario",
           
            user:req.session.user,
            user:req.session.user,
            productos: dbProducts.filter(producto=>{
                return producto.category != "visited" && producto.category != "in-sale"
            })

        })
    }
}