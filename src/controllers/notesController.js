import NotesModel from "../models/notesModel";

export default class NotesController {
    /**
     * @method createNote
     * @description creates a new note
     * @param {*} req
     * @param {*} res
     * @returns {object} newNote
     */
    static async createNote(req, res) {
        try {
            const { userId } = req;
            const { title, note } = req.body;
            const newNote = await NotesModel.create(title, note, userId);

            return res.status(200).send({
                status: 'success',
                message: "note created successfully",
                note: newNote
            });
        } catch (error) {
            return res.status(500).send({
                status: 'error',
                message: 'could not create note',
                error
            });
        }
    }

    /**
     * @method getAllNotes
     * @description gets all available notes
     * @param {*} req
     * @param {*} res
     * @returns {object} all notes
     */
    static async getAllNotes(req, res) {
        try {
            const { userId } = req;
            const allNotes = await NotesModel.getAll(userId);
            return res.status(200).send({
                status: 'success',
                message: "notes retrieved successfully",
                notes: allNotes
            });
        } catch (error) {
            return res.status(500).send({
                status: 'error',
                message: 'could not get notes',
                error
            });
        }
    }

    /**
     * @method getOneNote
     * @description gets a note with given id
     * @param {*} req
     * @param {*} res
     * @returns {object} note
     */
    static async getOneNote(req, res) {
        try {
            const { userId } = req;
            const { id } = req.params;
            const note = await NotesModel.getOne(id, userId);
            return res.status(200).send({
                status: 'success',
                message: "note retrieved successfully",
                note
            });
        } catch (error) {
            return res.status(500).send({
                status: 'error',
                message: 'could not get note',
                error
            });
        }
    }

    /**
     * @method updateNote
     * @description updates a note with given id
     * @param {*} req
     * @param {*} res
     * @returns {object} updated note
     */
    static async updateNote(req, res) {
        try {
            const { id } = req.params;
            const { newTitle, newNote } = req.values;

            const updatedNote = await NotesModel.update(newTitle, newNote, id);
            return res.status(200).send({
                status: 'success',
                message: 'note updated successfully',
                note: updatedNote
            });
        } catch (error) {
            return res.status(500).send({
                status: 'error',
                message: 'could not update note',
                error
            });
        }
    }

    /**
     * @method deleteNote
     * @description deletes a note with given id
     * @param {*} req
     * @param {*} res
     * @returns {object} deleted note
     */
    static async deleteNote(req, res) {
        try {
            const { id } = req.params;
            const deletedNote = await NotesModel.delete(id)
            return res.status(200).send({
                status: 'success',
                message: 'note deleted successfully',
                note: deletedNote
            });
        } catch (error) {
            return res.status(500).send({
                status: 'error',
                message: 'could not delete note',
                error
            });
        }
    }
}