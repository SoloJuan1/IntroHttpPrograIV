const http = require('http')

const host="localhost"  //local host
const port=8081

let objeto={
    "user":"plopez",
    "password":"12345"
}

const server = http.createServer(function(peticion,respuesta){
    console.log(peticion.url)
    switch(peticion.url){

     case '/':
    respuesta.writeHead(200,{'Content-Type':'text/plain'})
    respuesta.write('Pagina de inicio');
    break

    case'/empleado':
    respuesta.writeHead(200,{'Content-Type':'application/json'})
    respuesta.write(JSON.stringify(objeto));
    break

    case'/about':
    respuesta.writeHead(200,{'Content-Type':'text/plain'})
    respuesta.write('Sitio desarrollado por Juan');
    break

    default:
        respuesta.writeHead(404,{'Content-Type':'text/plain'})
        respuesta.write('Pagina no disponible');
        break
    }

    respuesta.end()
})

server.listen(port,host,function(){
    console.log(`Servidor disponible http://${host}:${port}`)
})
