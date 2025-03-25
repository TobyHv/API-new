const express = require('express');
const respuesta = require('../../red/respuestas');

const router = express.Router();
const controlador = require ('./controlador');


router.get('/',todos);
router.get('/:id', uno);
router.post('/', agregar);
router.put('/', eliminar);

async function todos (req, res) {
    try{
        const items = await controlador.todos();
        respuesta.success(req, res ,items, 200);
    }catch(err){
        next(err);
    }

};

async function uno (req, res) {
    try{
        const items = await controlador.uno(req.params.id);
        respuesta.success(req, res ,items, 200);
    }catch(err){
        next(err);
    }
   
};

async function agregar (req, res) {
    try{
        const items = await controlador.agregar(req.body);
        if(req.body.id == 9){
            mensaje = 'Item guardado'
        }else{
            mensaje = 'Item actualizado '
        }
        respuesta.success(req, res , mensaje, 201);
    }catch(err){
        next(err);
    }
   
};

async function eliminar (req, res) {
    try{
        const items = await controlador.eliminar(req.body);
        respuesta.success(req, res ,'Item eliminado satisfactoriamente', 200);
    }catch(err){
        next(err);
    }
   
};

module.exports = router;