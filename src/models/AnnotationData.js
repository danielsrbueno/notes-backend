const mongoose = require('mongoose')

const AnnotationsDataSchema = new mongoose.Schema({
    title: String,
    note: String,
    priority: Boolean
})

module.exports = mongoose.model('Annotations', AnnotationsDataSchema)