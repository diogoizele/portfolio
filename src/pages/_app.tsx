import { AppProps } from "next/app";

import { GlobalStyle } from "styles/global";
import { Header } from "components";
import { ThemeProvider } from "context";
import { SocialMedia } from "containers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
      <SocialMedia />
      <Header />
    </ThemeProvider>
  );
}
