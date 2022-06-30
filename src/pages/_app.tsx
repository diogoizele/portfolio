import "../styles/global.scss";
import "aos/dist/aos.css";
import AOS from "aos";
import { AppProps } from "../../node_modules/next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
