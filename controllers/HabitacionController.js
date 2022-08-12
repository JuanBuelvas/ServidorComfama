class HabitacionController{

    constructor(){}

    //Buscar Habitaciones
    buscarHabitacion(request, response){
        //Intento Resolver la Peticion
        try{
            response.status(200).json({})
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({})
        }
    }

    //Buscar Habitacion por ID
    buscarHabitacionPorId(request, response){
        try{
            response.status(200).json({})
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({})
        }
    }

    //Agregar Habitacion
    agregarHabitacion(request, response){
        try{
            response.status(200).json({})
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({})
        }
    }

    //Editar Habitacion
    editarHabitacion(request, response){
        try{
            response.status(200).json({})
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({})
        }
    }

    //Eliminar Habitacion
    eliminarHabitacion(request, response){
        try{
            response.status(200).json({})
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({})
        }
    }
}