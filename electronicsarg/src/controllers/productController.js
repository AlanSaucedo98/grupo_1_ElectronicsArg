
const db = require('../database/models');


const fs =require("fs");
const path =require ("path")

const { resourceUsage } = require('process');
module.exports = {

    index: function(req, res, next) {
        console.log(db.Products)
        res.render('productAdd', { title: 'Carga de Producto' ,user:req.session.user });
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
            productos:resultados,
            user:req.session.user
        })
    },
    
   
    detalle: function(req, res, next) {
        
        let id = req.params.id;

        
         db.Products.findOne({
            where:{
                id:id
            }
            
        })
        .then(resultado =>{
            //res.send(resultado)// Descomentar linea para ver como llega producto
            res.render("productDetail", {
                title: "Detalle del Producto",
                id: id,
                producto: resultado,
                user:req.session.user
            })
        })
        
        
        
    },
    agregar: function(req,res, next){
 //Hacer un Find by pk Y traer la informacion de las img y guardarlas.
        db.Products.create({
            id:db.Products.id,
            nombre: req.body.name,
            discount:req.body.discount,
            precio: Number(req.body.price),
            category: req.body.category,
            plataform: req.body.Plataform,
            idioma: req.body.idioma,
            data: req.body.data,
            description: req.body.description,
            imagen_portada: (req.files[0])?req.files[0].filename:"default-image.png",
            trailer: req.body.trailer,
            imagen1: (req.files[0])?req.files[0].filename:"default-image.png",
            imagen2: (req.files[1])?req.files[1].filename:"default-image.png",
            imagen3: (req.files[2])?req.files[2].filename:"default-image.png",
            imagen4: (req.files[3])?req.files[3].filename:"default-image.png",
            labels:req.body.category,
            desarrollador:req.body.desarrollador,
            editor: req.body.editor,
            procesador: req.body.procesador,
            so: req.body.plataform,
            memoria: req.body.memoria,
            graficos: req.body.graficos,
            pesogb: req.body.pesogb, 
            user:req.session.user
        })
        .then(result => {
            //console.log(req.files) //------------> descomentar para ver el producto a pushear
            res.redirect("/")
        })
        .catch(error => {
            res.send(error)
        })
    },
    editar: function(req, res, next){
            let aProducto = req.params.id;
            db.Products.findOne({
                where : {
                    id : aProducto
                }
            })
            .then( result =>{
                //res.send(result)
                res.render('productEdit',{
                    title: "Editar Producto",
                    producto: result,
                    user:req.session.user
                })
            })
            
            
            
    },
    actualizar: function(req,res, next){

        let aProducto = req.params.id;
        db.Products.update({
            id:db.Products.id,
            nombre: req.body.name,
            discount:req.body.discount,
            precio: Number(req.body.price),
            category: req.body.category,
            plataform: req.body.Plataform,
            idioma: req.body.idioma,
            data: req.body.data,
            description: req.body.description,
            imagen_portada: (req.files[0])?req.files[0].filename:"default-image.png",
            trailer: req.body.trailer,
            imagen1: (req.files[0])?req.files[0].filename:"default-image.png",
            imagen2: (req.files[1])?req.files[1].filename:"default-image.png",
            imagen3: (req.files[2])?req.files[2].filename:"default-image.png",
            imagen4: (req.files[3])?req.files[3].filename:"default-image.png",
            labels:req.body.category,
            desarrollador:req.body.desarrollador,
            editor: req.body.editor,
            procesador: req.body.procesador,
            so: req.body.plataform,
            memoria: req.body.memoria,
            graficos: req.body.graficos,
            pesogb: req.body.pesogb, 
            user:req.session.user
            
        },{
            
            where :{
                id: aProducto
            }
            
        })
        ;
        
        res.redirect("/")

        
    },
    eliminar:function(req,res){
        let idProducto = req.params.id;
        db.Products.destroy({
            where : {
                id : idProducto
            }
        })
        res.redirect("/")
    },
    
    
   
}