let db = require('../database/models')
const fs =require("fs");
const path =require ("path")

module.exports = {
    all :(req,res) => {
        db.Users.findAll()
        .then(resultado => res.send(resultado))
        
    }
    
}