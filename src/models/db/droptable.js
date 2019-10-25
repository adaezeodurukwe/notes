import pool from './connect';

const dropNotesTable = () => {
    const data = 'DROP TABLE IF EXISTS notes';
    pool.query(data);
};

dropNotesTable();
