import { AppProps } from "next/app";
import { useRouter } from "next/router";
import "react-loading-skeleton/dist/skeleton.css";

import { GlobalStyle } from "styles/global";
import { Header } from "components";
import { ThemeProvider } from "context";
import { SocialMedia } from "containers";
import { Routes } from "config/constants";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
      {pathname !== Routes.contact && <SocialMedia />}
      <Header />
    </ThemeProvider>
  );
}
