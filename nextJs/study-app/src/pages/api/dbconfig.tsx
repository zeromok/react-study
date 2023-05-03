import * as mysql from 'mysql';
// const mysql = require('mysql2'); // for MAC

const connection = mysql.createConnection({
    host: 'localhost',
    // host: '127.0.0.1', // for MAC
    user: 'root',
    password: 'qkrqudahr1!',
    database: 'example',
});

function queryPromise(queryString: string) {
    return new Promise((resolve, reject) => {
        connection.query(queryString, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

export default async function handler(req, res) {
    let queryString = 'SELECT 1 + 1';

    try {
        const rows = await queryPromise(queryString);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
