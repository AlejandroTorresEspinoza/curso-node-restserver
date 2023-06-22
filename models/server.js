//Ejemplo 1
/*const express = require('express')
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.routes();
    }
    routes() {
        this.app.get('/',  (req, res) => {
            res.send('Hello World');
          })
    }
    listen() {
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en puerto ',this.port)
        })
    }
}
module.exports = Server;*/

//Ejemplo 2
/*const express = require('express')
class Server {
constructor() {
            this.app = express();
            this.port = process.env.PORT;
            //Middelware
            this.middlewares();
            //Rutas de la aplicacion
            this.routes();
        }
       
        //aque se define el metodo middleware que publicara la carpeta public
        middlewares(){
            this.app.use(express.static('public'));
        }

    routes() {
                this.app.get('/',  (req, res) => {
                    res.send('Hello World');
                  })
            }
            listen() {
                this.app.listen(this.port, () =>{
                    console.log('Servidor corriendo en puerto ',this.port)
                })
            }
}
module.exports = Server;*/

//Ejemplo 3
/*const express = require('express')
class Server {
constructor() {
            this.app = express();
            this.port = process.env.PORT;
            //Middelware
            this.middlewares();
            //Rutas de la aplicacion
            this.routes();
        }
       
        //aque se define el metodo middleware que publicara la carpeta public
        middlewares(){
            this.app.use(express.static('public'));
        }

    routes() {
                this.app.get('/api',  (req, res) => {
                    res.send('Hello World');
                  })
            }
            listen() {
                this.app.listen(this.port, () =>{
                    console.log('Servidor corriendo en puerto ',this.port)
                })
            }
}
module.exports = Server;*/

//Ejemplo 4
/*const express = require('express')
class Server {
constructor() {
            this.app = express();
            this.port = process.env.PORT;
            //Middelware
            this.middlewares();
            //Rutas de la aplicacion
            this.routes();
        }
       
        //aque se define el metodo middleware que publicara la carpeta public
        middlewares(){
            this.app.use(express.static('public'));
        }

    routes() {
                this.app.get('/api',  (req, res) => {
                    res.json('Hello World');
                  })
            }
            listen() {
                this.app.listen(this.port, () =>{
                    console.log('Servidor corriendo en puerto ',this.port)
                })
            }
}
module.exports = Server;*/

//Ejemplo 5
/*const express = require('express')
class Server {
constructor() {
            this.app = express();
            this.port = process.env.PORT;
            //Middelware
            this.middlewares();
            //Rutas de la aplicacion
            this.routes();
        }
       
        //aque se define el metodo middleware que publicara la carpeta public
        middlewares(){
            this.app.use(express.static('public'));
        }

    routes() {
                this.app.get('/api',  (req, res) => {
                    res.json({
                        ok: true,
                        msg: 'get API'
                    });
                  })
            }
            listen() {
                this.app.listen(this.port, () =>{
                    console.log('Servidor corriendo en puerto ',this.port)
                })
            }
}
module.exports = Server;*/

//Ejemplo 6
/*const express = require('express')
class Server {
constructor() {
            this.app = express();
            this.port = process.env.PORT;
            //Middelware
            this.middlewares();
            //Rutas de la aplicacion
            this.routes();
        }
       
        //aque se define el metodo middleware que publicara la carpeta public
        middlewares(){
            this.app.use(express.static('public'));
        }

    routes() {
                this.app.get('/api',  (req, res) => {
                    res.json({
                        msg: 'get API'
                    });
                })
                this.app.put('/api',  (req, res) => {
                    res.json({
                        msg: 'put API'
                    });
                });
        
                this.app.post('/api',  (req, res) => {
                    res.json({
                        msg: 'post API'
                    });
                });
                this.app.delete('/api',  (req, res) => {
                    res.json({
                        msg: 'delete API'
                    });
                });
            }
            listen() {
                this.app.listen(this.port, () =>{
                    console.log('Servidor corriendo en puerto ',this.port)
                })
            }
}
module.exports = Server;*/

//Ejemplo 7
/*const express = require('express');
const cors = require('cors');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        //Middelware
        this.middlewares();
        //Rutas de la aplicacion
        this.routes();
    }
   
    //aque se define el metodo middleware que publicara la carpeta public
    middlewares(){
        //CORS
        this.app.use(cors());
        //directorio publico
        this.app.use(express.static('public'));
    }
routes() {
            this.app.use('/api/usuarios', require('../router/user'))
        }

    listen() {
                this.app.listen(this.port, () =>{
                    console.log('Servidor corriendo en puerto ',this.port)
                })
            }

}
module.exports = Server;*/

//Ejemplo 8
/*const express = require('express');
const cors = require('cors');
class Server {
        constructor() {
                this.app = express();
                this.port = process.env.PORT;
                this.usuariosPath = '/api/usuarios';
                //Middelware
                this.middlewares();
                //Rutas de la aplicacion
                this.routes();
               
            }
   
    //aque se define el metodo middleware que publicara la carpeta public
    middlewares(){
        //CORS
        this.app.use(cors());
        //directorio publico
        this.app.use(express.static('public'));
    }
routes() {
            this.app.use(this.usuariosPath, require('../routes/usuarios'))
        }

    listen() {
                this.app.listen(this.port, () =>{
                    console.log('Servidor corriendo en puerto ',this.port)
                })
            }

}
module.exports = Server;*/

//Ejemplo 9
const express = require('express');
const cors = require('cors');
class Server {
        constructor() {
 this.app = express();
 this.port = process.env.PORT || 3000;
 this.usuariosPath = '/api/usuarios';
 //Middelware
 this.middlewares();
 //Rutas de la aplicacion
 this.routes();

 }
   
        middlewares(){
            //CORS
            this.app.use(cors());
            //lectura y parseo del body recibe lo que se envia
            this.app.use(express.json());
            //directorio publico
            this.app.use(express.static('public'));
            }
    
routes() {
            this.app.use(this.usuariosPath, require('../routes/usuarios'))
        }

    listen() {
                this.app.listen(this.port, () =>{
                    console.log('Servidor corriendo en puerto ',this.port)
                })
            }

}
module.exports = Server;
