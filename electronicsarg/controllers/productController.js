const dbProducts = require('../data/database') //requiero la base de datos de productos


const fs =require("fs");
const path =require ("path")

const { resourceUsage } = require('process');
module.exports = {

    index: function(req, res, next) {
        res.render('productAdd', { title: 'Carga de Producto' });
    },
    search:function(req,res){
        let buscar = req.query.search;
        let resultados=[];
        dbProducts.forEach(producto=>{
            if(producto.name.toLowerCase().includes(buscar.toLowerCase())){
                resultados.push(producto)
            }
        })
        res.render('prodSearch',{
            title:"Resultado de la busqueda",
            productos:resultados
        })
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
    editar: function(req, res, next){
            let aProducto = req.params.id;
            let resultado = dbProducts.filter(producto =>{
                return producto.id == aProducto
            })
            res.render('productEdit',{
                title: "Editar Producto",
                producto: resultado[0],
            })
    },
    actualizar: function(req,res, next){

        let aProducto = req.params.id;
        dbProducts.forEach(producto => {
            if(producto.id == aProducto){
                producto.id = Number(req.body.id);
                producto.name= req.body.name;
                producto.price= Number(req.body.price);
                producto.category= req.body.category;
                producto.plataform= req.body.Plataform;
                producto.idiomas= req.body.idiomas;
                producto.data= req.body.data;
                producto.description= req.body.description.trim();
                producto.trailer= req.body.trailer;
                producto.image= (req.files[0])?req.files[0].filename:"default-image.png";
                producto.desarrollador= req.body.desarrollador;
                producto.editor= req.body.editor;
                producto.procesador= req.body.procesador;
                producto.so= req.body.so;
                producto.memoria= req.body.memoria;
                producto.graficos= req.body.graficos;
                producto.pesogb= req.body.pesogb;  
            }
        })

        fs.writeFileSync(path.join(__dirname,"..",'data',"productsDataBase.json"),JSON.stringify(dbProducts),'utf-8')

        res.redirect('/')

        
    },
    eliminar:function(req,res){
        let idProducto = req.params.id;
        let aEliminar;
        dbProducts.forEach(producto=>{
            if(producto.id == idProducto){
                aEliminar = dbProducts.indexOf(producto)
            }
        })
        dbProducts.splice(aEliminar,1)
        fs.writeFileSync(path.join(__dirname,'..','data','productsDataBase.json'),JSON.stringify(dbProducts));
        res.redirect('/')
    },
    
    
   
}