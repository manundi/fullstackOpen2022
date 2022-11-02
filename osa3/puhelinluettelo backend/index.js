const express = require('express')
const app = express()

app.get('/', (req,res) =>{
res.send( '<h1 style=color:red>ASTA JEE HEE GEE GEE KUKKA Lei!</h1> taitaa tulla 10 kokeesta nyt hei, no saunaan lähden anyway')
})


const PORT = 3001

app.listen(PORT, () =>{
    console.log(' server running in port ', PORT)
})