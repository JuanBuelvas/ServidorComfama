//Instanciar EXPRESS
import express from 'express'
//Instanciar Routers
import {routers} from '../routers/routers.js'

export class Servidor{

    constructor(){
        this.app = express()
        this.atenderPeticiones() //Atender peticiones
    }

    atenderPeticiones(){
        this.app.use('/',routers)
    }

    encenderServidor(){
        this.app.listen(3000, function(){
            console.log("Corriendo servidor")
        })
    }
}