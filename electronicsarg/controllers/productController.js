const dbProducts = require('../data/database') //requiero la base de datos de productos

const fs =require("fs");
const path =require ("path")


module.exports = {
   
    detalle: function(req, res) {
        
        let id = req.params.id;

        let producto = dbProducts.filter(producto => {
            return producto.id == id
        })
        
        res.render("productDetail", {
            title: "Detalle del Producto",
            id: id,
            producto: producto
        })
    }
}