const http = require('http')    //es de node
const router = require('./router.js')
require('dotenv').config()

const server = http.createServer((peticion,respuesta) => {
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

server.listen(process.env.PORT,process.env.HOST,()=>
    console.log(`Servidor disponible http://${process.env.HOST}:${process.env.PORT}`)
)
//127.0.0.1 es lo mismo que localhost