const express = require('express')
const routes = require('./routes')
const cors = require('cors')
require('./config/dbConfig')

const app = express()

const corsOptions = {
    origin: ['https://notes-interface-app.netlify.app', 'http://localhost:3000', 'https://notes-frontend-1eog.vercel.app/'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions))
app.use(express.json())
app.use(routes)

const port = process.env.PORT || 3333

app.listen(port)
