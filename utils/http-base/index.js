const express = require('express')
const ip = require("ip")

const PORT = 80
const app = express()

app.get('/', function (req, res) {
  res.send(`<h1>Local Machine-IP: </h1><h1 style="color:green">${ip.address()}</h1>`)
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})
