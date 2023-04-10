
import {useRouter} from 'next/router';

export default function About() {
    const router = useRouter();
    const query = Number(router.query.id);
    return <>
        <div>
            <h1>pages/sub/[id].js</h1>
            <p>query : {query}</p>
            <a href="/">/pages/index.js</a>
        </div>
    </>
}