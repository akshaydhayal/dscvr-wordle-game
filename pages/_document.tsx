import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html style={{ overflow: "hidden" }}>
        <Head>
          <title>Wordle App</title>
          <meta name="dscvr:canvas:version" content="vNext" />
          <meta name="og:image" content="https://my-canvas.com/preview-image.png" />
        </Head>
        <body>
          <Main />
          <div id="toaster" />
          <div id="overlay" />
          <div id="animation" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
