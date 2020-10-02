
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
                    rol:req.session.user
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
            dbUsers.forEach(usuario=>{
                if(usuario.email == req.body.email){
                    req.session.user = {
                        id:usuario.id,
                        nick:usuario.nombre + ' ' + usuario.apellido,
                        rol:usuario.rol,
                        email:usuario.email,
                        avatar:usuario.avatar
                        
                    }
                    
                }
                
            })
            
            if(req.body.recordar){
                res.cookie('userElectronicsArg',req.session.user,{maxAge:1000*60*2})
            }
            return res.redirect('/')
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