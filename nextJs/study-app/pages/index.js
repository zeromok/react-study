import {Inter} from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })



export default function Home() {

  return (
    <>
      <div>
        <h1>/pages/index.js</h1>
          <ul>
              <li><Link href="/sub">/pages/sub/index.js</Link></li>
              <li><Link href="/sub/about">/pages/sub/about.js</Link></li>

              {/* 쿼리스트링 */}
              <li><Link href="/sub/1">/pages/sub/[id].js</Link></li>
              <li><Link href="/sub/2">/pages/sub/[id].js</Link></li>

              <li><Link href='/api/dbconfig'>DB TEST</Link></li>
          </ul>

          <br/>
          <br/>

          <button>눌러주세요.</button>
      </div>
    </>
  )
}
