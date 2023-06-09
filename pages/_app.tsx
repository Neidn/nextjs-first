import type {AppProps} from 'next/app'

import '@/styles/globals.css'

import Layout from "@/components/layout/Layout";

const App = ({Component, pageProps}: AppProps) => {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}

export default App
