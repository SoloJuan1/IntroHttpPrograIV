const http = require('http')
const router = require('./router.js')
require('dotenv').config()

const server = http.createServer(function(peticion,respuesta){
    console.log(peticion.url)
    switch(peticion.url){
        case '/':
            router.index(peticion,respuesta)
            break
        case '/empleado':
            router.empleado(peticion,respuesta)
            break
        case '/about':
            router.about(peticion,respuesta)
            break
        default:
            respuesta.writeHead(404,{'Content-Type':'text/plain'})
            respuesta.write('Pagina no disponible')
            break
    }
    
    respuesta.end()
})

server.listen(process.env.PORT,process.env.HOST,function(){
    console.log(`Servidor disponible http://${process.env.HOST}:${process.env.PORT}`)
})