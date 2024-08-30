import Head from 'next/head';
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Worldle App</title>
        <meta name="dscvr:canvas:version" content="vNext" />
        <meta name="og:image" content="https://my-canvas.com/preview-image.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
