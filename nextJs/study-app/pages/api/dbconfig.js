// const mysql = require('mysql');
//
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'qkrqudahr1!',
//     database: 'example'
// });
//
// export default async function handler(req, res) {
//     let queryString = "SELECT 1 + 1 + 1";
//
//     await connection.query(queryString, (err,rows,fields) => {
//         if (err) throw err;
//         res.status(200).json(rows);
//     });
// }

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qkrqudahr1!',
    database: 'example'
});

function queryPromise(queryString) {
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
    let queryString = "SELECT 1 + 1 + 1";

    try {
        const rows = await queryPromise(queryString);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
