module.exports = (sequelize,dataTypes) => {
    let alias = "Products";
    let cols = {
        id:{
            type:dataTypes.INTEGER(11),
            allowNull:false,
            autoIncrement: true,
            primaryKey:true
        },
        nombre:{
            type:dataTypes.STRING(95),
            allowNull:false
        },
        precio:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        idioma:{
            type:dataTypes.STRING(45),
        },
        desarrollador:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        imagen_portada:{
            type:dataTypes.STRING(75),
            allowNull:false
        },
        imagen1:{
            type:dataTypes.STRING(75),
            allowNull:false
        },
        imagen2:{
            type:dataTypes.STRING(75),
            allowNull:false
        },
        imagen3:{
            type:dataTypes.STRING(75),
            allowNull:false
        },
        imagen4:{
            type:dataTypes.STRING(75),
            allowNull:false
        },
        id_categoria:{
            type:dataTypes.INTEGER(11)
        }
    }

    let config = {
        tableName : "productos",
        timestamps: true,
        underscored: true
    }

    const Product = sequelize.define(alias,cols,config);

    return Product;

}