const dbProducts = require('../data/database') //requiero la base de datos de productos


const fs =require("fs");
const path =require ("path")


module.exports = {

    index: function(req, res, next) {
        res.render('productAdd', { title: 'Carga de Producto' });
      },
   
    detalle: function(req, res) {
        
        let id = req.params.id;

        let producto = dbProducts.filter(producto => {
            return producto.id == id
        })
        
        res.render("productDetail", {
            title: "Detalle del Producto",
            id: id,
            producto: producto[0]
            
        })
        
    },
    agregar: function(req,res){
        
        let Product = {
            name: req.body.name,
            price: Number(req.body.price),
            category: req.body.category,
            plataform: req.body.Plataform,
            data: req.body.data,
            trailer: req.body.trailer,
            description: req.body.description,

        }

        res.send(Product)

        
    },
   
}