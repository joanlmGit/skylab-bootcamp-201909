require('dotenv').config()
debugger

const express = require('express')
const { name, version } = require('./package.json')
const { argv: [, , port], env: { PORT = port || 8080, DB_URL } } = process
const cors = require('cors')
const { database } = require('eco-points-data')

const { users, garbage, image } = require('./routes')

const api = express()

api.use(cors())

api.use('/users', users)
api.use('/garbage', garbage)
api.use('/images', image)

 
database
    .connect(DB_URL)
    .then(() => {
        debugger

        api.listen(PORT, () => console.log(`${name} ${version} up and running on port ${PORT}`))
    })


