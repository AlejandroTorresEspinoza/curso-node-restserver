//Ejemplo 1
/*const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const validarJWT = (req= request, res=response,next) => {
        const token = req.header('x-token');
        if(!token){
            return res.status(401).json({
                msg: 'No existe Token en la peticion'
            });
        }
        try {
            //funcion que verifica la valides del token
            jwt.verify(token,process.env.SECRETORPRIVATEKEY);
            next();
           
        } catch (error) {
            console.log(error);
            res.status(401).json({
                msg: 'Token no Valido'
            })
           
        }
       // console.log(token);
     
    }
module.exports = {
    validarJWT
}*/

//Ejemplo 2
/*
const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const validarJWT = (req= request, res=response,next) => {
        const token = req.header('x-token');
        if(!token){
            return res.status(401).json({
                msg: 'No existe Token en la peticion'
            });
        }
        try {
            //funcion que verifica la valides del token
           const {uid} = jwt.verify(token,process.env.SECRETORPRIVATEKEY);
           req.uid = uid;
            next();
           
        } catch (error) {
            console.log(error);
            res.status(401).json({
                msg: 'Token no Valido'
            })
           
        }
       // console.log(token);
     
    }
module.exports = {
    validarJWT
}
*/

//Ejemplo 3
/*const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');
const validarJWT = async(req = request, res= response, next) => {
const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg:'No hay token en la peticion'
        })
    }

    try {
        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        //Leer el usuario de la base de datos
        const usuario = await Usuario.findById(uid);
        //Verificar que el usuario exista
        if (!usuario) {
            return res.status(401).json({
                msg:'Usuario no existente en la DB'
            })
        }
        //Verificar si el usuario tiene estado en true
        if(!usuario.estado) {
            return res.status(401).json({
                msg:'Token no valido'
            })
        }
        req.Usuario = usuario;
        next();
    } catch (e) {
        console.log(e);
        res.status(401).json({ 
            msg:'Token no válido'
        })
    }    
}

module.exports = {
    validarJWT
}*/

//Ejemplo 4
const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');
const validarJWT = async(req= request, res=response,next) => {
        const token = req.header('x-token');
        if(!token){
            return res.status(401).json({
                msg: 'No existe Token en la peticion'
            });
        }
        try {
            //funcion que verifica la valides del token
           const {uid} = jwt.verify(token,process.env.SECRETORPRIVATEKEY);
           //leer el usuario que corresponde al uid
           const usuario = await Usuario.findById(uid);
           //verifico si el usuario no existe esta borrado.
            if(!usuario){
    
                return res.status(401).json({
                    msg: 'El token no es valido - usuario borrado de la DB'
                })
            }
           //verificar que el usuario tiene estado en true.
           if(!usuario.estado){
            return res.status(401).json({
                msg: 'El token no es valido - usuario con estado false'
            })
           }
           req.usuario = usuario;
            next();
           
        } catch (error) {
            console.log(error);
            res.status(401).json({
                msg: 'Token no Valido'
            })
         
        }
         
    }

module.exports = {
    validarJWT
}




