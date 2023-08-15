import { Head, Html, Main, NextScript } from "next/document";

const MyDocument = () => {
  const title = "test";
  // document.location.pathname === "/newNote" ? "new note" : "notes";

  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <title>{"Note App" + " | " + title}</title>
        <meta name="theme-color" content="#000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
