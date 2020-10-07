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
        description:{
            type:dataTypes.STRING(500),
            allowNull:false
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
        },
        desarrollador:{
            type:dataTypes.STRING(75),
            allowNull:false
        },
        discount:{
            type:dataTypes.STRING(75),
            allowNull:false
        },
        trailer:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        labels:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        procesador:{
            type:dataTypes.STRING(95),
            allowNull:false
        },
        so:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        memoria:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        graficos:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        pesogb:{
            type:dataTypes.STRING(75),
            allowNull:false
        },

    }

    let config = {
        tableName : "productos",
        timestamps: true,
        underscored: true
    }

    const Product = sequelize.define(alias,cols,config);

    return Product;

}