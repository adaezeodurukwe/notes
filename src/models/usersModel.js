import pool from './db/connect';

export default class userModel {
    static async create(name, email, password) {
        
        const sql = 'INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *';
        const values = [name, email, password];
        const { rows } = await pool.query(sql, values);
        return rows[0];
    }

    static async getOne(id, email) {
        const getById = 'SELECT * FROM users WHERE id = $1';
        const getByEmail = 'SELECT * FROM users WHERE email = $1';

        const idOrEmail = id ? id : email;
        const sql = id ? getById : getByEmail;

        const value = [idOrEmail];

        const { rows } = await pool.query(sql, value);
        return rows[0];
    }
}