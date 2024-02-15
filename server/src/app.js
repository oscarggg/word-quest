// goes into node_modules folder, searches for package 'express', searches for "main" file and retrieves it into variable
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

// builds application server
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// status endpoint
/*app.get('/status', (req, res) => {
    res.send({
        message: 'hello peasants'
    })
})

app.post('/register', (req, res) => {
    res.send({
        message:`${req.body.email} user was registered`
    })
})*/
require('./routes')(app)

sequelize.sync()
    .then(() => {
        console.log(`Server started on port ${config.port}`)
        app.listen(config.port)
})
