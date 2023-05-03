import Link from 'next/link';

export const Headers = () => {
    return (
        <>
            <h1>첫 페이지</h1>
            <ul style={{ listStyle: 'none' }}>
                <li style={{ float: 'left' }}>
                    <Link href="/">Home</Link>
                </li>
                <li style={{ float: 'left', margin: '0px 5px 0px 5px' }}> | </li>
                <li style={{ float: 'left' }}>
                    <Link href="../about">About</Link>
                </li>
            </ul>
        </>
    );
};
