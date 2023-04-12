import '@/styles/globals.css'
import Layout from "@/pages/conponents/layout";

export default function App({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
