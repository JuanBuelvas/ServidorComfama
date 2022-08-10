//Instanciamos EXPRESS
import express from 'express'

//Variable para personalizar rutas(ENDPOINTS) del servicio
export let routers = express.Router()

//Escribo mis rutas (cada ruta es un servicio)
routers.get('/viajesComfama/v1/habitaciones',function (req, res) {
    res.send('Hello World')
});
routers.get('/viajesComfama/v1/habitacion/id',function (req, res) {
    res.send('Hello World')
});
routers.post('/viajesComfama/v1/reserva',function (req, res) {
    res.send('Hello World')
});
routers.put('/viajesComfama/v1/reserva/id',function (req, res) {
    res.send('Hello World')
});
routers.delete('/viajesComfama/v1/cancelar/id',function (req, res) {
    res.send('Hello World')
});



