const path = require('path')
const express = require('express')
const route = require('./routes/route')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/route', route)

module.exports = server
