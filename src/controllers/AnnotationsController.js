const Annotations = require('../models/AnnotationData')

module.exports = {
    async read(req, res) {
        const annotationList = await Annotations.find()
        return res.json(annotationList)
    },

    async create(req, res) {
        const { title, note, priority } = req.body

        if (!title || !note)
            return res.status(400).json({ error: "Necessário um título e anotação." })

        const annotationCreated = await Annotations.create({
            title,
            note,
            priority
        })
        
        return res.json(annotationCreated)
    },

    async delete(req, res) {
        const { id } = req.params
        const annotationDeleted = await Annotations.findOneAndDelete({ _id: id })

        if (annotationDeleted)
            return res.json(annotationDeleted)
        
        return res.status(401).json({ error: "Erro! Sua anotação não foi excluída, pois não foi encontrada." })
    }
}