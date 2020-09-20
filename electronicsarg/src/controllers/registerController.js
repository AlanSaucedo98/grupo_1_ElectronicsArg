const dbProducts = require('../data/userdatabase') //requiero la base de datos de productos


const fs =require("fs");
const path =require ("path")


module.exports = {
    index: function(req, res, next){
        res.render('register', { title: 'Registro' });
    },

    crear: function(req,res, next){
        
        let user = {
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            user: req.body.user,
            datebirth: req.body.datebirth,
            password: Number(req.body.password),
            avatar :req.body.avatar
        }

        dbProducts.push(user),

        fs.writeFileSync(path.join(__dirname,"..",'data',"usersDataBase.json"),JSON.stringify(dbProducts),'utf-8')

        res.render('userRegister',{
            title:"Registro de Usuario",
        
            user:req.session.user

        })
    }
}