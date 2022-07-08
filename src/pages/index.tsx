import { useEffect, useRef } from "react";
import Head from "next/head";

import Interdicted from "components/interdicted/interdicted";

import About from "containers/about/about";
import Header from "components/header/header";
import Home from "containers/home/home";

export default function HomePage() {
  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      if (cursorRef.current) {
        cursorRef.current.setAttribute(
          "style",
          "top: " + (e.pageY - 4) + "px; left: " + (e.pageX - 4) + "px;"
        );
      }
    });

    document.addEventListener("mousedown", () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add("expand");

        setTimeout(() => {
          cursorRef.current.classList.remove("expand");
        }, 500);
      }
    });
  }, []);

  return (
    <>
      <Head>
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
        <meta property="og:title" content="Diogo Izele" />
        <meta
          property="og:description"
          content="I'm a web developer and this is my portfolio."
        />
        <meta property="og:url" content="https://diogoizele.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.imgur.com/igc7k1N.png" />
        <meta name="keywords" content="Web Developer" />
        <meta name="author" content="Diogo Izele" />
        <meta name="copyright" content="© 2021 Diogo Izele" />
        <meta name="robots" content="all" />

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
      </Head>
      <Interdicted />
      <Header />
      <main>
        <Home />
        <About />
      </main>
      <div className="cursor" ref={cursorRef} />
    </>
  );
}
