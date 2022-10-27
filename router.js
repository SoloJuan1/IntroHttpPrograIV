let objeto={
    "user":"plopez",
    "password":"12345"
}

function index(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('Pagina de inicio actualizada')
}

function empleado(req,res){
    res.writeHead(200,{'Content-Type':'application/json'})
    res.write(JSON.stringify(objeto))
}

module.exports={
    index,
    empleado
}
