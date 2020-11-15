

const db = require('../database/models'); //requiero La base de datos mysql


module.exports = { //exporto un objeto literal con todos los metodos
    index: function(req, res) {



        
        db.Products.findAll()
        .then(result => {

            
            
            /*res.send(result)*/ //Descomentar esa linea para ver result y los datos que llegan.
            res.render('index', { //renderizo en el navegador la vista index que contiene el HOME del sitio
                title: 'ElectronicsArg', //envío el objeto literal con la o las variables necesarias para renderizar de forma correcta el home
                
                todos:result,
                user:req.session.user
            })
        })
        .catch(error => {
            console.log(error)
        })

         
    },
    search: function(req, res) {
        if(req.query.search == ""){
            res.redirect('/')
        }

        let buscar = req.query.search;

        db.Products.findAll({
            where : {
                nombre :   buscar 
            }
        })
        .then(result => {
            res.render('prodSearch', {
                title: "Resultado de la búsqueda",
                productosResult: result,
                user:req.session.user
            })
        })
        .catch(err => {
            res.send(err)
        })
       
       
   
    }
    
}