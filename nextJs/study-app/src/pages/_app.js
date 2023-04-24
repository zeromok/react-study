import '../styles/globals.css';
import Layout from '../components/layout';
import { createContext } from 'react';

export const ColorContext = createContext('default');

export default function App({ Component, pageProps }) {
    return (
        <ColorContext.Provider value={'test'}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ColorContext.Provider>
    );
}
