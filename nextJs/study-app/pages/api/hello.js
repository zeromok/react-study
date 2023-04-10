import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../dbconfig.js'

export default function test(req, res) {

    db.query("SELECT 1 + 1",
        function (err, result) {
            if(err) {
                console.log(err)
            } else {
                console.log(result);
                res.json(result);
            }
        });

    db.end();
}