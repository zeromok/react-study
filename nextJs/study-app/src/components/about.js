import Link from "next/link";


export default function About() {
    console.log('About.js Init');
    return <>
        <div>
            <h1>pages/sub/about.js</h1>
            <Link href="/">/pages/index.js</Link>
        </div>
    </>
}