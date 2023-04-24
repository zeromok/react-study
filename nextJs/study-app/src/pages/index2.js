import Link from 'next/link';

export default function Index() {
    console.log('Index2.js Init');
    return (
        <>
            <div>
                <h1>pages/sub/index2.js</h1>
                <Link href="/">/pages/index2.js</Link>
            </div>
        </>
    );
}
