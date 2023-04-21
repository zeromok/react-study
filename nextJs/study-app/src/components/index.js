import Link from "next/link";

export default function Index() {
    console.log('Index.js Init');
    return <>
        <div>
            <h1>pages/sub/index.js</h1>
            <Link href="/">/pages/index.js</Link>
        </div>
    </>
}