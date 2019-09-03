const express = require('express')
const ip = require("ip")

const app = express()

app.get('/', function (req, res) {
  res.send(`<h1>Local Machine-IP: </h1><h1 style="color:green">${ip.address()}</h1>`)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
