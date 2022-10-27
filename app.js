//const fs = require('fs')

const yargs = require('yargs')

    .option('saludo',{type:'string'})
    .option('valor',{alias:'v',type:'number'})
    .check((argv,options)=>{

        if(argv.v>0){
            return true
        
        }else if(isNaN(argv.v)){
            throw 'El valor debe ser numerico'
        }
        else{
            throw 'El valor debe ser mayor a cero'
        }
    })

    console.log(process.argv)
    //diferencia
    console.log(yargs.argv)