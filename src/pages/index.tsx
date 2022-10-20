import Head from "next/head";

import { SocialMedia, Terminal } from "containers";

export default function HomePage() {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="A1TKe7Phyl32i1AUX65XFETd0u8blEM119nHMIx6yY0"
        />
        <title>Diogo Izele</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4ce3c2" />
        <meta name="msapplication-TileColor" content="#4ce3c2" />
        <meta name="theme-color" content="#121214" />
        <meta
          name="description"
          content="Hello, my name is Diogo Izele, I'm a web developer and this is my portfolio."
        />
        <meta name="keywords" content="Web Developer" />
        <meta name="author" content="Diogo Izele" />
        <meta name="copyright" content="© 2021 Diogo Izele" />
        <meta name="robots" content="all" />

        <meta property="og:title" content="Diogo Izele" />
        <meta
          property="og:description"
          content="I'm a web developer and this is my portfolio."
        />
        <meta property="og:url" content="https://diogoizele.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.imgur.com/igc7k1N.png" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="http://www.diogoizele.com" />
        <meta name="twitter:title" content="Diogo Izele" />
        <meta
          name="twitter:description"
          content="I'm a web developer and this is my portfolio."
        />
        <meta
          property="twitter:image"
          content="https://i.imgur.com/igc7k1N.png"
        />
        <link rel="canonical" href="https://diogoizele.com" />
      </Head>
      <Terminal />
      <SocialMedia />
    </>
  );
}
