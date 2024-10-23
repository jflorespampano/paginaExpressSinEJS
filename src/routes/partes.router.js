const express           = require('express');
const { faker } = require('@faker-js/faker');
// const controladorIndex  = require('../controllers/index.controller');
const routerTipoPartes       = express.Router();

//opcion datos estaticos
const data=[
    {id:1, descripcion:"tornillo 1/2"},
    {id:2, descripcion:"tornillo 3/8"},
    {id:3, descripcion:"tuerca 1/2"},
    {id:5, descripcion:"turca 5/16"}
]

//opcion usando el generador de datos faker
let data2=[]
function createRandomPart() {
    for (let i = 0; i < 30; i++) {
        data2.push({
            id:faker.number.int(1000),
            descripcion:faker.string.alpha(30)
        });
    }
    
}

routerTipoPartes.get('/all', (req,res)=>{
    createRandomPart()
    // res.send(JSON.stringify(data))
    res.send(JSON.stringify(data2))
})
// routerTipoPartes.get('/getOne/:id', (req,res)=>{
routerTipoPartes.get('/one', (req,res)=>{
    const param=req.query
    const id=param.id
    console.log("id=",id)
    const result=JSON.stringify(data[id])
    console.log("Resukt:",result)
    res.send(result)
})

routerTipoPartes.post('/', (req,res)=>{
    const datos=req.body
    console.log("crear:",datos)
    res.send(JSON.stringify({success:true, message:'insertado'}))
})

routerTipoPartes.delete('/', (req,res)=>{
    const datos=req.query
    console.log("eliminar:",datos)
    res.send(JSON.stringify({success:true, message:'eliminado'}))
})

routerTipoPartes.put('/', (req,res)=>{
    const datos=req.body
    console.log("actualizar:",datos)
    res.send(JSON.stringify({success:true, message:'actualizado'}))
})

module.exports = routerTipoPartes;