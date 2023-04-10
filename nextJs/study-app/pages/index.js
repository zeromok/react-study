import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const oracledb = require('oracledb');
function init() {
    oracledb.initOracleClient({libDir: 'C:\\Users\\user\\Downloads\\instantclient-basic-windows.x64-21.9.0.0.0dbru\\instantclient_21_9'});
}
init();

async function selectDatabase() {

    console.log("!!!!! db conenction !!!!!");

    let connection = await oracledb.getConnection({
            user: 'byoung.mokk@gmail.com',
            password: 'Oracle123456789',
            host: 'localhost',
            database: 'xe'
        },
        function (err, conn) {
            if (err) {
                alert('DB접속에 실패했습니다.');
                return;
            }else {
                alert('DB접속에 성공했습니다.')
            }
        });

    let binds = {};
    let options = {
        outFormat: oracledb.OUT_FORMAT_OBJECT   // query result format
    };

    console.log("!!!!! db select !!!!!");

    let result = await connection.execute("select 1 from dual", binds, options);

    console.log("!!!!! db response !!!!!");
    console.log(result.rows[0]);

    console.log("!!!!! db close !!!!!");
    await connection.close();

}



export default function Home() {
  return (
    <>
      <div>
        <h1>/pages/index.js</h1>
          <ul>
              <li><a href="/sub/index,js">/pages/sub/index.js</a></li>
              <li><a href="/sub/about.js">/pages/sub/about.js</a></li>
              {/* 쿼리스트링 */}
              <li><a href="/sub/1">/pages/sub/[id].js</a></li>
              <li><a href="/sub/2">/pages/sub/[id].js</a></li>
          </ul>

          <p></p>
      </div>
    </>
  )
}
