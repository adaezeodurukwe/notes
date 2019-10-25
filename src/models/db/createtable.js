import pool from './connect';
const createNotesTable = () => {
    const notesData = `CREATE TABLE IF NOT EXISTS notes(
        id SERIAL PRIMARY KEY,
        userid INT NOT NULL,
        title VARCHAR(50) NOT NULL,
        note VARCHAR(200) NOT NULL,
        createdAt TIMESTAMP NOT NULL,
        updatedAt TIMESTAMP NOT NULL
    )`;

    const userData = `CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email VARCHAR(200) UNIQUE NOT NULL,
        password VARCHAR(200) NOT NULL
    )`;

    pool.query(notesData)
        .then(response => console.log(response))
        .catch(err => console.error(err));

    pool.query(userData)
        .then(response => console.log(response))
        .catch(err => console.error(err));
};

createNotesTable();