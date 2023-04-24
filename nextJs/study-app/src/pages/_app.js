import '../styles/globals.css';
import Layout from '../components/layout';
import { createContext } from 'react';
import { colors } from '../utill/color-data.json';

export const ColorContext = createContext();

export default function App({ Component, pageProps }) {
    return (
        <ColorContext.Provider value={{ colors }}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ColorContext.Provider>
    );
}
