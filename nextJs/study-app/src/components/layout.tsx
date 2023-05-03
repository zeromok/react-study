import { Headers } from './header';
import { Footer } from './footer';

export default function Layout({ children }) {
    return (
        <>
            <Headers />
            <main>{children}</main>
            <Footer />
        </>
    );
}
