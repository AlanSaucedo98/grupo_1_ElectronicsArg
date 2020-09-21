const dbUsers = require('../data/usersDataBase');

const {check,validationResult,body} = require('express-validator');

module.exports = [

    check('name')
    .isLength({
        min:1
    })
    .withMessage('Debes ingresar tu nombre'),

    check('lastname')
    .isLength({
        min:1
    })
    .withMessage('Debes ingresar tu apellido'),

    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    body('email')
    .custom(function(value){
        for(let i = 0; i<dbUsers.length;i++){
            if(dbUsers[i].email == value){
                return false
            }
        }
        return true
    })
    .withMessage('Este mail ya está registrado'),
    check("datebirth")
    .isLength({
        min:8,
    })
    .withMessage("Debe Ingresar Su Fecha de Nacimiento"),

    check('password')
    .isLength({
        min:6,
        max:12
    })
    .withMessage('La contraseña debe tener entre 6 y 12 caracteres'),

    body("password2")
    .custom(function(value,{req}){
        if(value != req.body.password){
            return false
        }
        return true
    })
    .withMessage('Las contraseñas no coinciden'),

    check('Acepto el Acuerdo')
    .isString('on')
    .withMessage('Debe aceptar las bases y condiciones')
]