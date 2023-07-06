//Ejemplo 1
//const {response}= require('express');
/*const {response, request}= require('express');
const Usuario= require('../models/usuario');
const usuariosGet = (req = request, res = response) => {
        const {q,nombre = 'no envia',apikey} = req.query;
        res.json({
            msg: 'get API - controller',
            q,
            nombre,
            apikey
        });
    }
const usuariosPut =(req, res= response) => {
        const {id } = req.params; // params puede traer muchos datos.
        res.json({
            msg: 'put API - controller',
            id
        });
    }
    const usuariosPost = async(req, res = response) => {
        const body = req.body;
        const usuario = new Usuario(body);
        await usuario.save(); // esto es para grabar en BD
        res.json({
        msg: 'post API - controller',
        usuario
        });
        }
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });

}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
}
//se exporta un objeto pues van haber muchos
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}*/

//Ejemplo 2
//const {response}= require('express');
/*const {response, request}= require('express');
const Usuario= require('../models/usuario');
const usuariosGet = (req = request, res = response) => {
        const {q,nombre = 'no envia',apikey} = req.query;
        res.json({
            msg: 'get API - controller',
            q,
            nombre,
            apikey
        });
    }
const usuariosPut =(req, res= response) => {
        const {id } = req.params; // params puede traer muchos datos.
        res.json({
            msg: 'put API - controller',
            id
        });
    }
    const usuariosPost = async(req, res = response) => {
        const body = req.body;
        const usuario = new Usuario(body);
        await usuario.save(); // esto es para grabar en BD
        res.json({
        msg: 'post API - controller',
        usuario
        });
        }
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });

}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
}
//se exporta un objeto pues van haber muchos
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}*/

//Ejemplo 3
//const {response}= require('express');
/*const {response, request}= require('express');
const bcryptjs = require('bcryptjs');
const Usuario= require('../models/usuario');
const usuariosGet = (req = request, res = response) => {
        const {q,nombre = 'no envia',apikey} = req.query;
        res.json({
            msg: 'get API - controller',
            q,
            nombre,
            apikey
        });
    }
const usuariosPut =(req, res= response) => {
        const {id } = req.params; // params puede traer muchos datos.
        res.json({
            msg: 'put API - controller',
            id
        });
    }
    const usuariosPost = async(req, res = response) => {
        const {nombre, correo, password, rol} = req.body;
        const usuario = new Usuario({nombre,correo, password, rol});
        //veriificar si existe correo
        //encritar la contrasena
        const salt = bcryptjs.genSaltSync();//cantidad de vueltas que hara la encriptacion por def.10
        usuario.password = bcryptjs.hashSync(password); //encripta el password
        await usuario.save(); // esto es para grabar en BD
        res.json({
        msg: 'post API - controller',
        usuario
        });
        }
        
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });

}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
}
//se exporta un objeto pues van haber muchos
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}*/

//Ejemplo 4
//const {response}= require('express');
/*const {response, request}= require('express');
const bcryptjs = require('bcryptjs');
const Usuario= require('../models/usuario');
const usuariosGet = (req = request, res = response) => {
        const {q,nombre = 'no envia',apikey} = req.query;
        res.json({
            msg: 'get API - controller',
            q,
            nombre,
            apikey
        });
    }
const usuariosPut =(req, res= response) => {
        const {id } = req.params; // params puede traer muchos datos.
        res.json({
            msg: 'put API - controller',
            id
        });
    }
    const usuariosPost = async(req, res = response) => {
        const {nombre, correo, password, rol} = req.body;
        const usuario = new Usuario({nombre,correo, password, rol});
        //veriificar si existe correo
        const existeEmail = await Usuario.findOne(correo);
        if(existeEmail){
        return res.status(400).json({
        msg: 'El correo ya esta registrado'
        });
        }}
        
        
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });

}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
}
//se exporta un objeto pues van haber muchos
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}*/

//Ejemplo 5
//const {response}= require('express');
/*const {response, request}= require('express');
const bcryptjs = require('bcryptjs');
const Usuario= require('../models/usuario');
const { validationResult } = require('express-validator');
const usuariosGet = (req = request, res = response) => {
        const {q,nombre = 'no envia',apikey} = req.query;
        res.json({
            msg: 'get API - controller',
            q,
            nombre,
            apikey
        });
    }
const usuariosPut =(req, res= response) => {
        const {id } = req.params; // params puede traer muchos datos.
        res.json({
            msg: 'put API - controller',
            id
        });
    }
    const usuariosPost = async(req, res = response) => {
            const errores = validationResult(req);
            if(!errores.isEmpty()){
                return res.status(400).json(errores);
            }
            const {nombre, correo, password, rol} = req.body;
            const usuario = new Usuario({nombre,correo, password, rol});
            //veriificar si existe correo
            const existeEmail = await Usuario.findOne({correo});
            if(existeEmail){
                return res.status(400).json({
                    msg: 'El correo ya esta registrado'
                });
            }
            //encritar la contrasena
            const salt = bcryptjs.genSaltSync();//cantidad de vueltas que hara la encriptacion por def.10
            usuario.password = bcryptjs.hashSync(password); //encripta el password
            await usuario.save(); // esto es para grabar en BD
            res.json({
                msg: 'post API - controller',
                usuario
            });
        }
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });

}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
}
    
//se exporta un objeto pues van haber muchos
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}*/

//Ejemplo 6
//const {response}= require('express');
/*const mongoose = require('mongoose');
const {response, request}= require('express');
const bcryptjs = require('bcryptjs');
const Usuario= require('../models/usuario');
const { validationResult } = require('express-validator');
const usuariosGet = (req = request, res = response) => {
        const {q,nombre = 'no envia',apikey} = req.query;
        res.json({
            msg: 'get API - controller',
            q,
            nombre,
            apikey
        });
    }
    const usuariosPut = async (req, res = response) => {
        const { id } = req.params;

        const {_id, password,google,correo, ...resto} = req.body;

        if (password) {
            const salt = bcryptjs.genSaltSync();
            resto.password = bcryptjs.hashSync(password);
        }
    
        try {
            const usuario = await Usuario.findOneAndUpdate(
                { _id: id },
                resto,
                { new: true }
            );
    
            if (!usuario) {
                return res.status(404).json({ msg: 'Usuario no encontrado' });
            }
    
            res.json({
                msg: 'put API - controller',
                usuario
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'Error en el servidor', error: error.message });
        }
    };
    
const usuariosPost = async(req, res = response) => {
        const errores = validationResult(req);
            if(!errores.isEmpty()){
                return res.status(400).json(errores);
            }
        const {nombre, correo, password, rol} = req.body;
        const usuario = new Usuario({nombre,correo, password, rol});
        //veriificar si existe correo
        const existeEmail = await Usuario.findOne({correo});
        if(existeEmail){
            return res.status(400).json({
                msg: 'El correo ya esta registrado'
            });
        }
        //encritar la contrasena
        const salt = bcryptjs.genSaltSync();//cantidad de vueltas que hara la encriptacion por def.10
        usuario.password = bcryptjs.hashSync(password); //encripta el password
        await usuario.save(); // esto es para grabar en BD
        res.json({
            msg: 'post API - controller',
            usuario
        });
    }
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });
    }
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
}
    
//se exporta un objeto pues van haber muchos
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}*/

//Ejemplo 7
//const {response}= require('express');
/*const mongoose = require('mongoose');
const {response, request}= require('express');
const bcryptjs = require('bcryptjs');
const Usuario= require('../models/usuario');
const { validationResult } = require('express-validator');
const usuariosGet = async(req = request, res = response) => {
    // const {q,nombre = 'no envia',apikey} = req.query;
    const usuarios = await Usuario.find(); //encuentra todos los registros de la DB
    res.json({
    usuarios
    });
    }
    
    const usuariosPut = async (req, res = response) => {
        const { id } = req.params;

        const {_id, password,google,correo, ...resto} = req.body;

        if (password) {
            const salt = bcryptjs.genSaltSync();
            resto.password = bcryptjs.hashSync(password);
        }
    
        try {
            const usuario = await Usuario.findOneAndUpdate(
                { _id: id },
                resto,
                { new: true }
            );
    
            if (!usuario) {
                return res.status(404).json({ msg: 'Usuario no encontrado' });
            }
    
            res.json({
                msg: 'put API - controller',
                usuario
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'Error en el servidor', error: error.message });
        }
    };
    
const usuariosPost = async(req, res = response) => {
        const errores = validationResult(req);
            if(!errores.isEmpty()){
                return res.status(400).json(errores);
            }
        const {nombre, correo, password, rol} = req.body;
        const usuario = new Usuario({nombre,correo, password, rol});
        //veriificar si existe correo
        const existeEmail = await Usuario.findOne({correo});
        if(existeEmail){
            return res.status(400).json({
                msg: 'El correo ya esta registrado'
            });
        }
        //encritar la contrasena
        const salt = bcryptjs.genSaltSync();//cantidad de vueltas que hara la encriptacion por def.10
        usuario.password = bcryptjs.hashSync(password); //encripta el password
        await usuario.save(); // esto es para grabar en BD
        res.json({
            msg: 'post API - controller',
            usuario
        });
    }
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });
    }
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
}
    
//se exporta un objeto pues van haber muchos
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}*/

//Ejemplo 8
//const {response}= require('express');
/*const mongoose = require('mongoose');
const {response, request}= require('express');
const bcryptjs = require('bcryptjs');
const Usuario= require('../models/usuario');
const { validationResult } = require('express-validator');
const usuariosGet = async(req = request, res = response) => {
    // const {q,nombre = 'no envia',apikey} = req.query;
    const {limite=5} = req.query; // indicamos que vamos ha recibir un parametro: limite,con volor por defecto 5
    const usuarios = await Usuario.find().limit(Number(limite)); //encuentra limite registros de la DB
    res.json({
    usuarios
    });
    }
    
    
    const usuariosPut = async (req, res = response) => {
        const { id } = req.params;

        const {_id, password,google,correo, ...resto} = req.body;

        if (password) {
            const salt = bcryptjs.genSaltSync();
            resto.password = bcryptjs.hashSync(password);
        }
    
        try {
            const usuario = await Usuario.findOneAndUpdate(
                { _id: id },
                resto,
                { new: true }
            );
    
            if (!usuario) {
                return res.status(404).json({ msg: 'Usuario no encontrado' });
            }
    
            res.json({
                msg: 'put API - controller',
                usuario
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'Error en el servidor', error: error.message });
        }
    };
    
const usuariosPost = async(req, res = response) => {
        const errores = validationResult(req);
            if(!errores.isEmpty()){
                return res.status(400).json(errores);
            }
        const {nombre, correo, password, rol} = req.body;
        const usuario = new Usuario({nombre,correo, password, rol});
        //veriificar si existe correo
        const existeEmail = await Usuario.findOne({correo});
        if(existeEmail){
            return res.status(400).json({
                msg: 'El correo ya esta registrado'
            });
        }
        //encritar la contrasena
        const salt = bcryptjs.genSaltSync();//cantidad de vueltas que hara la encriptacion por def.10
        usuario.password = bcryptjs.hashSync(password); //encripta el password
        await usuario.save(); // esto es para grabar en BD
        res.json({
            msg: 'post API - controller',
            usuario
        });
    }
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });
    }
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
}
    
//se exporta un objeto pues van haber muchos
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}*/

//Ejemplo 9
//const {response}= require('express');
/*const mongoose = require('mongoose');
const {response, request}= require('express');
const bcryptjs = require('bcryptjs');
const Usuario= require('../models/usuario');
const { validationResult } = require('express-validator');
const usuariosGet = async(req = request, res = response) => {
    // const {q,nombre = 'no envia',apikey} = req.query;
    const {limite=5, desde = 0} = req.query; // indicamos que vamos ha recibir un parametro: limite,con volor por defecto 5
    //encuentra desde al limite registros de la DB
    const usuarios = await Usuario.find()
    .skip(Number(desde))
    .limit(Number(limite));
    res.json({
    usuarios
    });
    }

    const usuariosPut = async (req, res = response) => {
        const { id } = req.params;

        const {_id, password,google,correo, ...resto} = req.body;

        if (password) {
            const salt = bcryptjs.genSaltSync();
            resto.password = bcryptjs.hashSync(password);
        }
    
        try {
            const usuario = await Usuario.findOneAndUpdate(
                { _id: id },
                resto,
                { new: true }
            );
    
            if (!usuario) {
                return res.status(404).json({ msg: 'Usuario no encontrado' });
            }
    
            res.json({
                msg: 'put API - controller',
                usuario
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'Error en el servidor', error: error.message });
        }
    };
    
const usuariosPost = async(req, res = response) => {
        const errores = validationResult(req);
            if(!errores.isEmpty()){
                return res.status(400).json(errores);
            }
        const {nombre, correo, password, rol} = req.body;
        const usuario = new Usuario({nombre,correo, password, rol});
        //veriificar si existe correo
        const existeEmail = await Usuario.findOne({correo});
        if(existeEmail){
            return res.status(400).json({
                msg: 'El correo ya esta registrado'
            });
        }
        //encritar la contrasena
        const salt = bcryptjs.genSaltSync();//cantidad de vueltas que hara la encriptacion por def.10
        usuario.password = bcryptjs.hashSync(password); //encripta el password
        await usuario.save(); // esto es para grabar en BD
        res.json({
            msg: 'post API - controller',
            usuario
        });
    }
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });
    }
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
}
    
//se exporta un objeto pues van haber muchos
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}*/

//Ejemplo 10
//const {response}= require('express');
/*const mongoose = require('mongoose');
const {response, request}= require('express');
const bcryptjs = require('bcryptjs');
const Usuario= require('../models/usuario');
const { validationResult } = require('express-validator');
const usuariosGet = async(req = request, res = response) => {
    // const {q,nombre = 'no envia',apikey} = req.query;
    const {limite=5, desde = 0} = req.query; // indicamos que vamos ha recibir un parametro: limite,con volor por defecto 5
    //encuentra desde al limite registros de la DB
    const usuarios = await Usuario.find()
    .skip(Number(desde))
    .limit(Number(limite));
    const total = await Usuario.countDocuments();
    res.json({
    total,
    usuarios
    });
    }

    const usuariosPut = async (req, res = response) => {
        const { id } = req.params;

        const {_id, password,google,correo, ...resto} = req.body;

        if (password) {
            const salt = bcryptjs.genSaltSync();
            resto.password = bcryptjs.hashSync(password);
        }
    
        try {
            const usuario = await Usuario.findOneAndUpdate(
                { _id: id },
                resto,
                { new: true }
            );
    
            if (!usuario) {
                return res.status(404).json({ msg: 'Usuario no encontrado' });
            }
    
            res.json({
                msg: 'put API - controller',
                usuario
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'Error en el servidor', error: error.message });
        }
    };
    
const usuariosPost = async(req, res = response) => {
        const errores = validationResult(req);
            if(!errores.isEmpty()){
                return res.status(400).json(errores);
            }
        const {nombre, correo, password, rol} = req.body;
        const usuario = new Usuario({nombre,correo, password, rol});
        //veriificar si existe correo
        const existeEmail = await Usuario.findOne({correo});
        if(existeEmail){
            return res.status(400).json({
                msg: 'El correo ya esta registrado'
            });
        }
        //encritar la contrasena
        const salt = bcryptjs.genSaltSync();//cantidad de vueltas que hara la encriptacion por def.10
        usuario.password = bcryptjs.hashSync(password); //encripta el password
        await usuario.save(); // esto es para grabar en BD
        res.json({
            msg: 'post API - controller',
            usuario
        });
    }
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });
    }
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
}
    
//se exporta un objeto pues van haber muchos
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}*/

//Ejemplo 10
//const {response}= require('express');
/*const mongoose = require('mongoose');
const {response, request}= require('express');
const bcryptjs = require('bcryptjs');
const Usuario= require('../models/usuario');
const { validationResult } = require('express-validator');
const usuariosGet = async(req = request, res = response) => {
    // const {q,nombre = 'no envia',apikey} = req.query;
    const {limite=5, desde = 0} = req.query; // indicamos que vamos ha recibir un parametro: limite,con volor por defecto 5
    const query = {estado:true};
    //encuentra desde al limite registros de la DB
    const usuarios = await Usuario.find(query)
    .skip(Number(desde))
    .limit(Number(limite));
    const total = await Usuario.countDocuments(query);
    res.json({
    total,
    usuarios
    });
    }
    

    const usuariosPut = async (req, res = response) => {
        const { id } = req.params;

        const {_id, password,google,correo, ...resto} = req.body;

        if (password) {
            const salt = bcryptjs.genSaltSync();
            resto.password = bcryptjs.hashSync(password);
        }
    
        try {
            const usuario = await Usuario.findOneAndUpdate(
                { _id: id },
                resto,
                { new: true }
            );
    
            if (!usuario) {
                return res.status(404).json({ msg: 'Usuario no encontrado' });
            }
    
            res.json({
                msg: 'put API - controller',
                usuario
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'Error en el servidor', error: error.message });
        }
    };
    
const usuariosPost = async(req, res = response) => {
        const errores = validationResult(req);
            if(!errores.isEmpty()){
                return res.status(400).json(errores);
            }
        const {nombre, correo, password, rol} = req.body;
        const usuario = new Usuario({nombre,correo, password, rol});
        //veriificar si existe correo
        const existeEmail = await Usuario.findOne({correo});
        if(existeEmail){
            return res.status(400).json({
                msg: 'El correo ya esta registrado'
            });
        }
        //encritar la contrasena
        const salt = bcryptjs.genSaltSync();//cantidad de vueltas que hara la encriptacion por def.10
        usuario.password = bcryptjs.hashSync(password); //encripta el password
        await usuario.save(); // esto es para grabar en BD
        res.json({
            msg: 'post API - controller',
            usuario
        });
    }
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });
    }
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
}
    
//se exporta un objeto pues van haber muchos
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}*/

//Ejemplo 11
//const {response}= require('express');
/*const mongoose = require('mongoose');
const {response, request}= require('express');
const bcryptjs = require('bcryptjs');
const Usuario= require('../models/usuario');
const { validationResult } = require('express-validator');
const usuariosGet = async(req = request, res = response) => {
    // const {q,nombre = 'no envia',apikey} = req.query;
    const {limite=5, desde = 0} = req.query; // indicamos que vamos ha recibir un parametro:limite,con volor por defecto 5
    const query = {estado:true};
    const [total,usuarios] = await Promise.all([
    Usuario.countDocuments(query), //retorna total
    Usuario.find(query) //retorna los usuarios
    .skip(Number(desde))
    .limit(Number(limite))
    ]);
    res.json({
    total,
    usuarios
    });
    }
    

    const usuariosPut = async (req, res = response) => {
        const { id } = req.params;

        const {_id, password,google,correo, ...resto} = req.body;

        if (password) {
            const salt = bcryptjs.genSaltSync();
            resto.password = bcryptjs.hashSync(password);
        }
    
        try {
            const usuario = await Usuario.findOneAndUpdate(
                { _id: id },
                resto,
                { new: true }
            );
    
            if (!usuario) {
                return res.status(404).json({ msg: 'Usuario no encontrado' });
            }
    
            res.json({
                msg: 'put API - controller',
                usuario
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'Error en el servidor', error: error.message });
        }
    };
    
const usuariosPost = async(req, res = response) => {
        const errores = validationResult(req);
            if(!errores.isEmpty()){
                return res.status(400).json(errores);
            }
        const {nombre, correo, password, rol} = req.body;
        const usuario = new Usuario({nombre,correo, password, rol});
        //veriificar si existe correo
        const existeEmail = await Usuario.findOne({correo});
        if(existeEmail){
            return res.status(400).json({
                msg: 'El correo ya esta registrado'
            });
        }
        //encritar la contrasena
        const salt = bcryptjs.genSaltSync();//cantidad de vueltas que hara la encriptacion por def.10
        usuario.password = bcryptjs.hashSync(password); //encripta el password
        await usuario.save(); // esto es para grabar en BD
        res.json({
            msg: 'post API - controller',
            usuario
        });
    }
    const usuariosDelete = (req, res = response) => {
        const {id} = req.params;
        res.json({
        id
        });
        }
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
}
    
//se exporta un objeto pues van haber muchos
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}*/

//Ejemplo 12
//const {response}= require('express');
const mongoose = require("mongoose");
const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require('../models/usuario'); 
const { validationResult } = require("express-validator");
const usuariosGet = async (req = request, res = response) => {
  // const {q,nombre = 'no envia',apikey} = req.query;
  const { limite = 5, desde = 0 } = req.query; // indicamos que vamos ha recibir un parametro:limite,con volor por defecto 5
  const query = { estado: true };
  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments(query), //retorna total
    Usuario.find(query) //retorna los usuarios
      .skip(Number(desde))
      .limit(Number(limite)),
  ]);
  res.json({
    total,
    usuarios,
  });
};

const usuariosPut = async (req, res = response) => {
  const { id } = req.params;

  const { _id, password, google, correo, ...resto } = req.body;

  if (password) {
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password);
  }

  try {
    const usuario = await Usuario.findOneAndUpdate({ _id: id }, resto, {
      new: true,
    });

    if (!usuario) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }

    res.json({
      msg: "put API - controller",
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor", error: error.message });
  }
};

const usuariosPost = async (req, res = response) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json(errores);
  }
  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });
  //veriificar si existe correo
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    return res.status(400).json({
      msg: "El correo ya esta registrado",
    });
  }
  //encritar la contrasena
  const salt = bcryptjs.genSaltSync(); //cantidad de vueltas que hara la encriptacion por def.10
  usuario.password = bcryptjs.hashSync(password); //encripta el password
  await usuario.save(); // esto es para grabar en BD
  res.json({
    msg: "post API - controller",
    usuario,
  });
};

const usuariosDelete = async(req = request, res = response) => {
    const {id} = req.params;

    const usuarioAutenticado = req.Usuario;

    const usuario = await Usuario.findByIdAndUpdate(id, {estado: false});


    res.json({
        usuario,
        usuarioAutenticado
    });
}
/*
const usuariosDelete = async (req, res = response) => {
  const { id } = req.params;
  const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });
  res.json({
    usuario,
  });
};

*/

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "patch API - controller",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
};

