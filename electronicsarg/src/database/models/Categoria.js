module.exports = (sequelize,dataTypes) => {
    let alias = "Categorias";
    
    let cols = {
        id:{
            type:dataTypes.INTEGER(11),
            allowNull:false,
            autoIncrement: true,
            primaryKey:true
        },
        nombre:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
       
    }

    let config = {
        tableName : "categorias",
        timestamps: false,
        underscored: false
    }

    const Categorias = sequelize.define(alias,cols,config);

    return Categorias;

}