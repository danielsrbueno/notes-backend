const express = require('express')
const routes = require('./routes')
const cors = require('cors')
require('./config/dbConfig')

const app = express()

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions))
app.use(express.json())
app.use(routes)

const port = process.env.PORT || 3333

app.listen(port)
