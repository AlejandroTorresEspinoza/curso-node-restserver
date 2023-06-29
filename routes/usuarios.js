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
/*const {Router} = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } =
require('../controller/usuarios');
const router = Router();
router.get('/', usuariosGet )
//router.put('/', usuariosPut );
router.put('/:id', usuariosPut );
router.post('/',usuariosPost );
router.delete('/',usuariosDelete  );
router.patch('/', usuariosPatch );
module.exports = router;*/

//Ejemplo 3
/*const {Router} = require('express');
const router = Router();
router.get('/',  (req, res) => {
    res.json({
        msg: 'get API'
    });
})
router.put('/',  (req, res) => {
    res.json({
        msg: 'put API'
    });
});
router.post('/',  (req, res) => {
    res.json({
        msg: 'post API'

    });
});
router.delete('/',  (req, res) => {
    res.json({
        msg: 'delete API'
    });
});
router.patch('/',  (req, res) => {
    res.json({
        msg: 'patch API'
    });
});
module.exports = router;
*/



//14fin
/*const {Router} = require('express');
const { check } = require('express-validator');

const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controller/usuarios');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();
router.get('/', usuariosGet )
//router.put('/', usuariosPut );
router.put('/:id', usuariosPut );
//router.post('/',usuariosPost );
router.post('/',[
    check('nombre','El Nombre es obligatorio').not().isEmpty(),
    check('correo','El correo no es valido').isEmail(),
    check('password','El Password obligatorio y mas de 6 letras').isLength({min: 6}),
    check('rol','No es un Rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),
    validarCampos
    ],usuariosPost );     
router.delete('/',usuariosDelete  );
router.patch('/', usuariosPatch );
module.exports = router;*/

//15fin
/*const {Router} = require('express');
const { check } = require('express-validator');
const Role = require('../models/role');

const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controller/usuarios');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();
router.get('/', usuariosGet )
//router.put('/', usuariosPut );
router.put('/:id', usuariosPut );
//router.post('/',usuariosPost );
router.post('/',[
    check('nombre','El Nombre es obligatorio').not().isEmpty(),
    check('correo','El correo no es valido').isEmail(),
    check('password','El Password obligatorio y mas de 6 letras').isLength({min: 6}),
    // check('rol','No es un Rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom(async(rol = '') => {
        const existeRol = await Role.findOne({rol});
        if(!existeRol) {
            throw new Error(`El rol ${rol} no esta registrado en la DB`)
        }
    }),
    validarCampos
    ],usuariosPost );   
router.delete('/',usuariosDelete  );
router.patch('/', usuariosPatch );
module.exports = router;*/

//16fin
const {Router} = require('express');
const { check } = require('express-validator');
const Role = require('../models/role');
const { esRoleValido, existeUsuarioPorId } = require('../helpers/db-validators');

const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controller/usuarios');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();
router.get('/', usuariosGet )
//router.put('/', usuariosPut );
router.put('/:id',[
    check('id','No es un ID valido ').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRoleValido),
    validarCampos
    ], usuariosPut );

//router.post('/',usuariosPost );
router.post('/',[
    check('nombre','El Nombre es obligatorio').not().isEmpty(),
    check('correo','El correo no es valido').isEmail(),
    check('password','El Password obligatorio y mas de 6 letras').isLength({min: 6}),
    // check('rol','No es un Rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom(esRoleValido),
    validarCampos
    ],usuariosPost );
       
    router.delete('/:id',[
        check('id','No es un ID valido ').isMongoId(),
        check('id').custom(existeUsuarioPorId),
        validarCampos
        ],usuariosDelete );
        
router.patch('/', usuariosPatch );
module.exports = router;