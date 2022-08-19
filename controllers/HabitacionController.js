//import {datos} from '../datos.json'
export class HabitacionController{
    
    constructor(){};

    

    //Buscar Habitaciones
    buscarHabitaciones(request, response){
        //Intento Resolver la Peticion
        
        //let datos = new datos;
        try{
            response.status(200).json({
                mensaje:"Exito en la consulta",
                datos:["Habi1","200USD","Tv por cable"]
            })
            response.json(datos);
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({
                mensaje:"Upp, algo fallo " + error,
                datos:null
            })
        }
    }

    //Buscar Habitacion por ID
    buscarHabitacionPorId(request, response){
        let id = request.params.id
        console.log(id)
        try{
            response.status(200).json({
                mensaje:"Exito en la consulta " + id,
                datos:["Habi1","200USD","Tv por cable"]
            })
            response.json(datos);
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({
                mensaje:"Upp, algo fallo " + error,
                datos:null
            })
        }
    }

    //Agregar Habitacion
    agregarHabitacion(request, response){
        let body = request.body;
        console.log(body);
        try{
            response.status(200).json({
                mensaje:"Exito Agregando la Habitacion " + body.nombre,
                datos:"No hay datos"
                //datos:body
            })
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({
                mensaje:"Upp, algo fallo " + error,
                datos:null
            })
        }
    }

    //Editar Habitacion
    editarHabitacion(request, response){

        let id = request.params.id;

        let datos = request.body;


        try{
            response.status(200).json({
                mensaje:"Exito editando la habitacion " + id,
                datos:datos
            })
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({
                mensaje:"Upp, algo fallo " + error,
                datos:null
            })
        }
    }

    //Eliminar Habitacion
    eliminarHabitacion(request, response){
        try{
            response.status(200).json({
                mensaje:"Exito en la consulta " + id,
                datos:["Habi1","200USD","Tv por cable"]
            })
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({
                mensaje:"Upp, algo fallo " + error,
                datos:null
            })
        }
    }
}