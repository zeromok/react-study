import Link from "next/link";

export default () => {
    return<>
        <h1>첫 페이지</h1>
        <ul>
            <li>
                <Link href="/">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/components/about">
                    About
                </Link>
            </li>
        </ul>
    </>
};