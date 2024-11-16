const Annotations = require('../models/AnnotationData')

module.exports = {
    async update(req, res) {
        const { id } = req.params
        const { note } = req.body
        const annotation = await Annotations.findOne({ _id: id })

        annotation.note = note ? note : annotation.note

        await annotation.save()

        return res.json(annotation)
    }
}