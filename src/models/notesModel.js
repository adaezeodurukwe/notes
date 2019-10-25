import pool from './db/connect';

export default class NotesModel {
    static async create(title, note) {
        const sql = 'INSERT INTO notes(title, note) VALUES($1, $2) RETURNING *';
        const values = [
            title,
            note,
        ];
        const { rows } = await pool.query(sql, values);
        return rows[0];
    }

    static async getOne(id) {
        const sql = 'SELECT * FROM notes WHERE id = $1';
        const value = [id];

        const { rows } = await pool.query(sql, value);
        return rows;
    }

    static async getAll() {
        const sql = 'SELECT * FROM notes';
        const { rows } = await pool.query(sql);
        return rows;
    }

    static async update(title, note, id) {
        const sql = 'UPDATE notes SET title = $1, note = $2 WHERE id = $3 RETURNING *';
        const values = [title, note, id];

        const { rows } = await pool.query(sql, values);
        return rows[0];
    }

    static async delete(id) {
        const sql = 'DELETE FROM notes WHERE id = $1 RETURNING id';
        const values = [id];

        const { rows } = await pool.query(sql, values);
        return rows[0];
    }

}