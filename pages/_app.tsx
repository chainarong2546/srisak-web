import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import '../styles/globals.css';
import Head from 'next/head'
import { SSRProvider } from '@react-aria/ssr';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <SSRProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="shortcut icon" href="/Icon/favicon.ico" type="image/x-icon"/>
        <link rel="icon" href="/Icon/Logo-Srisak-32x32.png" sizes="32x32"/>
        <link rel="icon" href="/Icon/Logo-Srisak-48x48.png" sizes="48x48"/>
        <link rel="icon" href="/Icon/Logo-Srisak-96x96.png" sizes="96x96"/>
        <link rel="icon" href="/Icon/Logo-Srisak-144x144.png" sizes="144x144"/>
      </Head>
      <Component {...pageProps} />
    </SSRProvider>
  )
}

export default MyApp
