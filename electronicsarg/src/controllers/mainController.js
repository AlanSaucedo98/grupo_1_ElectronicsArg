

const db = require('../database/models'); //requiero La base de datos mysql

const { Op } = require("sequelize");


module.exports = { //exporto un objeto literal con todos los metodos
    index: function(req, res) {

        

        
        db.Products.findAll()
        .then(resultAll => {
            db.Products.findAll({
                where : {
                    discount :{
                        [Op.gt] : 1
                    }
                }
                
            })
            .then(resultOff =>{
                res.render('index', { //renderizo en el navegador la vista index que contiene el HOME del sitio
                    title: 'ElectronicsArg', //envío el objeto literal con la o las variables necesarias para renderizar de forma correcta el home
                    ofertas:resultOff,
                    todos:resultAll,
                    user:req.session.user
                
            })
            
            })
            //res.send(ofertas) //Descomentar esa linea para ver result y los datos que llegan.
            
        })
        .catch(error => {
            console.log(error)
        })

         
    }
    
    
}