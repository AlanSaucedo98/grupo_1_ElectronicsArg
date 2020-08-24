let dbProduct = require('../data/database') //requiero la base de datos de productos

module.exports = { //exporto un objeto literal con todos los metodos
    index: function(req, res) {

        let ofertas = dbProduct.filter(producto => {
            return producto.category == "in-sale"
        })
        let visitas = dbProduct.filter(producto => {
            return producto.category == "visited"
        })
        res.render('index', { //renderizo en el navegador la vista index que contiene el HOME del sitio
            title: 'ElectronicsArg', //envío el objeto literal con la o las variables necesarias para renderizar de forma correcta el home
            ofertas: ofertas,
            visitas: visitas
        })
    },
    search: function(req, res) {
        let buscar = req.query.search;
        let productos = [];
        dbProduct.forEach( producto => {
            if (producto.name.toLowerCase().includes(buscar)) {
                productos.push(producto)
            }
        })
        res.render('products', {
            title: "Resultado de la búsqueda",
            productos: productos
        })
    }
}