import NotesModel from "../models/notesModel";

export default class NotesController {
    static async createNote(req, res) {
        const { title, note } = req.body;
        const newNote = await NotesModel.create(title, note);
        
        if(!newNote) {
            return res.status(500).send({
                status: 'error',
                message: 'could not create note'
            });
        };

        return res.status(200).send({
            status: 'success',
            message: "note created successfully",
            note: newNote
        });
    }

    static async getAllNotes(req, res) {
        const allNotes = await NotesModel.getAll();
        return res.status(200).send({
            status: 'success',
            message: "notes retrieved successfully",
            notes: allNotes
        })
    }

    static async getOneNote(req, res) {
        const { id } = req.params;
        const note = await NotesModel.getOne(id)
        return res.status(200).send({
            status: 'success',
            message: "note retrieved successfully",
            note
        })
    }

    static async updateNote(req, res) {
        const { title, note } =  req.body;
        const { id } = req.params;

        const findNote = await NotesModel.getOne(id);

        if(!findNote[0]) {
            return res.status(404).send({
                status: 'error',
                message: 'could not find note'
            })
        }

        const newValues = {
            updateTitleValue: title || findNote.title,
            updateNoteValue: note || findNote.note
        }

        const updatedNote = await NotesModel.update(
            newValues.updateTitleValue, newValues.updateNoteValue, id
            );
        console.log(updatedNote);
        return res.status(200).send({
            status: 'success',
            message: 'note updated successfully',
            note: updatedNote
        })
    }

    static async deleteNote(req, res) {
        const { id } = req.params;
        const deletedNote = await NotesModel.delete(id)
        return res.status(200).send({
            status: 'success',
            message: 'note deleted successfully',
            note: deletedNote
        })
    }
}