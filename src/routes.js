const express = require('express')
const routes = express.Router()

const AnnotationController = require('./controllers/AnnotationsController')
const PriorityController = require('./controllers/PriorityController')
const ContentController = require('./controllers/ContentController')

routes.post('/annotations', AnnotationController.create)
routes.get('/annotations', AnnotationController.read)
routes.delete('/annotations/:id', AnnotationController.delete)

routes.post('/priorities/:id', PriorityController.update)
routes.get('/priorities', PriorityController.read)

routes.post('/contents/:id', ContentController.update)

module.exports = routes