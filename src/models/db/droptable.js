import pool from './connect';

const dropNotesTable = () => {
    const notesData = 'DROP TABLE IF EXISTS notes CASCADE';
    const userData = 'DROP TABLE IF EXISTS users';
    pool.query(notesData);
    pool.query(userData);
};

dropNotesTable();
