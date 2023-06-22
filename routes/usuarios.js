//Ejemplo 1
/*const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({
        msg: 'get API'
    });
});

router.put('/', (req, res) => {
    res.json({
        msg: 'put API'
    });
});

router.post('/', (req, res) => {
    res.json({
        msg: 'post API'
    });
});

router.delete('/', (req, res) => {
    res.json({
        msg: 'delete API'
    });
});

router.patch('/', (req, res) => {
    res.json({
        msg: 'patch API'
    });
});

module.exports = router;*/

//Ejemplo 2
const {Router} = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } =
require('../controller/usuarios');
const router = Router();
router.get('/', usuariosGet );
router.put('/:id', usuariosPut );
router.post('/',usuariosPost );
router.delete('/',usuariosDelete  );
router.patch('/', usuariosPatch );
module.exports = router;