const dbProducts = require('../data/database') //requiero la base de datos de productos


const fs =require("fs");
const path =require ("path")

const { resourceUsage } = require('process');
module.exports = {

    index: function(req, res, next) {
        res.render('productAdd', { title: 'Carga de Producto' });
    },

    
   
    detalle: function(req, res, next) {
        
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
    agregar: function(req,res, next){

        let lastID= 1;

        dbProducts.forEach(producto => {
            if(producto.id > lastID){
                lastID = producto.id
            }
        })
        
        let Product = {
            id: lastID + 1,
            name: req.body.name,
            price: Number(req.body.price),
            category: req.body.category,
            plataform: req.body.Plataform,
            idiomas: req.body.idiomas,
            data: req.body.data,
            description: req.body.description,
            trailer: req.body.trailer,
            image: (req.files[0])?req.files[0].filename:"default-image.png",
            desarrollador:req.body.desarrollador,
            editor: req.body.editor,
            procesador: req.body.procesador,
            so: req.body.so,
            memoria: req.body.memoria,
            graficos: req.body.graficos,
            pesogb: req.body.pesogb, 

        }

        dbProducts.push(Product),

        fs.writeFileSync(path.join(__dirname,"..",'data',"productsDataBase.json"),JSON.stringify(dbProducts),'utf-8')

        res.redirect('/productAdd')

        
    },
   
}