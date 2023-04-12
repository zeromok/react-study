
import {useRouter} from 'next/router';
import Link from "next/link";

export default function About() {
    const router = useRouter();
    const query = Number(router.query.id);
    return <>
        <div>
            <h1>pages/sub/[id].js</h1>
            <p>query : {query}</p>
            <Link href="/">/pages/index.js</Link>
        </div>
    </>
}