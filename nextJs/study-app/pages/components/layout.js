import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}


let test = [
    {params: {id: '0'}},
    {params: {id: '1'}}
];
