import pool from './connect';
const createNotesTable = () => {
    const data = `CREATE TABLE IF NOT EXISTS notes(
        id SERIAL PRIMARY KEY,
        title VARCHAR(50) NOT NULL,
        note VARCHAR(200) NOT NULL
    )`;
    pool.query(data)
        .then(response => console.log(response))
        .catch(err => console.error(err));
};

createNotesTable();