const express = require('express')

const app = express()

const baseDir = `${__dirname}/src/`
console.log(__dirname)
app.get('*', (req,res) => res.sendFile(`${__dirname}/index.html` , { root : baseDir }))

const port = 4000

app.listen(port, () => console.log(`Servidor subiu com sucesso em http://localhost:${port}`))