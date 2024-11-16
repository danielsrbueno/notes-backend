const mongoose = require('mongoose')
const config = "mongodb+srv://user:senha@notes.b5fp0.mongodb.net/annotations?retryWrites=true&w=majority&appName=Notes"

const con = mongoose.connect(config, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = con