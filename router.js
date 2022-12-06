let objeto={
    "user":"plopez",
    "password":"12345"
}

    const index= (req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('Pagina de inicio actualizada')
    }

const empleado= (req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'})
    res.write(JSON.stringify(objeto))
}

const about= (req,res)=>{
    respuesta.writeHead(200,{'Content-Type':'text/plain'})
    respuesta.write('Sitio desarrollado por Juan')
}

module.exports={
    index,
    empleado,
    about
}