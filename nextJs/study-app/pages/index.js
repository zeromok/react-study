import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import db from '../dbconfig.js';




export default function Home() {
    function test() {
        fetch('http://localhost:3000/api/hello')
            .then(res => res.json)
            .then(data => console.log(data));
    }

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

          <br/>
          <br/>

          <button onClick={db}>

          </button>
      </div>
    </>
  )
}
