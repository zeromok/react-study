const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qkrqudahr1!',
    database: 'example'
});

export default async function handler(req, res) {
    let queryString = "SELECT 1 + 1 + 1";

    await connection.query(queryString, (err,rows,fields) => {
        if (err) throw err;
        res.status(200).json(rows);
    });
}

