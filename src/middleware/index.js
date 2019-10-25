import NotesModel from "../models/notesModel";

export default class MiddleWare {
    static async getNote(req, res, next) {
        const { title, note } =  req.body;
        const { userId } = req;
        const { id } = req.params;
        const findNote = await NotesModel.getOne(id, userId);

        if (!findNote[0]) {
            return res.status(404).send({
                status: 'error',
                message: 'could not find note'
            })
        }

        if (note || title) {
            const updateValues = {
                newTitle: title || findNote[0].title,
                newNote: note || findNote[0].note
            }

            req.values = updateValues;
        }
        return next();
    }

    static async validateCreateInput(req, res, next) {
        const { title, note } =  req.body;

        if (!(title || note)) {
            return res.status(400).send({
                status: 'bad request',
                message: 'please include a title and a body'
            })
        }

        return next();
    }

    static async validateUpdateInput(req, res, next) {
        const { title, note } =  req.body;

        if (!(title && note)) {
            return res.status(400).send({
                status: 'bad request',
                message: 'please include a title or a body'
            })
        }

        return next();
    }
}