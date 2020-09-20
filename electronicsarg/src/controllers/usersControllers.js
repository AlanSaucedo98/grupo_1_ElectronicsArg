const dbProducts = require('../data/database');
const dbUsers = require('../data/userdatabase');

const {validationResult, body} = require('express-validator');
const bcrypt =require('bcrypt');
const fs = require('fs');
const path = require('path');


module.exports = {
    register:function(req,res){
        res.render('register',{
            title:"Registro de Usuario",
            
            user:req.session.user

        })
    },
    processRegister:function(req,res){
        let errors = validationResult(req);
        let lastID = 0;
        if(dbUsers.length > 0){
            dbUsers.forEach(user=>{
                if(user.id > lastID){
                    lastID = user.id
                }
            })
        }

        if(errors.isEmpty()){
            let nuevoUsuario = {
                id:lastID+1,
                nombre:req.body.name,
                apellido:req.body.lastname,
                email:req.body.email,
                avatar:(req.files)?req.files[0].filename:"default.png",
                pass:bcrypt.hashSync(req.body.password,10),
                rol:"user"
            }

            dbUsers.push(nuevoUsuario);

            fs.writeFileSync(path.join(__dirname,'..','data','usersDataBase.json'),JSON.stringify(dbUsers),'utf-8')
            return res.redirect('/')
        }else{
            res.render('register',{
                title:"Registro de Usuarios",
                css:'index.css',
                errors:errors.mapped(),
                old:req.body,
                user:req.session.user
            })
        }
    },
    login:function(req,res){
        res.render('userLogin',{
            title:"Ingreso de Usuarios",
            css:'index.css',
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
                res.cookie('userMercadoLiebre',req.session.user,{maxAge:1000*60*2})
            }
            return res.redirect('/')
        }else{
            return res.render('userLogin',{
                title:"Ingreso de Usuarios",
                css:'index.css',
                errors: errors.mapped(),
                old:req.body,
                user:req.session.user

            })
        }
    },
    logout:function(req,res){
        req.session.destroy();
        if(req.cookies.userMercadoLiebre){
            res.cookie('userMercadoLiebre','',{maxAge:-1})
        }
        res.redirect('/')
    },
    profile:function(req,res){
        res.render('userProfile',{
            title:"Perfil de Usuario",
            css:'index.css',
            user:req.session.user,
            user:req.session.user,
            productos: dbProducts.filter(producto=>{
                return producto.category != "visited" && producto.category != "in-sale"
            })

        })
    }
}