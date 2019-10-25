import pool from './db/connect';
import moment from 'moment';

export default class NotesModel {
    static async create(title, note, userId) {
        const sql = 'INSERT INTO notes(title, note, userid, createdAt, updatedAt) VALUES($1, $2, $4, $3, $3) RETURNING *';
        const values = [
            title,
            note,
            moment().format(),
            userId
        ];
        const { rows } = await pool.query(sql, values);
        return rows[0];
    }

    static async getOne(id, userId) {
        const sql = 'SELECT * FROM notes WHERE id = $1 AND userid = $2';
        const values = [id, userId];

        const { rows } = await pool.query(sql, values);
        return rows;
    }

    static async getAll(userId) {
        const sql = 'SELECT * FROM notes WHERE userid = $1';
        const value = [userId];
        const { rows } = await pool.query(sql, value);
        return rows;
    }

    static async update(title, note, id) {
        const sql = 'UPDATE notes SET title = $1, note = $2, updatedAt = $4 WHERE id = $3 RETURNING *';
        const values = [title, note, id, moment().format()];

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