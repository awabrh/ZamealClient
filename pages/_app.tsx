import type { AppProps } from "next/app";
import "../styles/globals.css";
import { IBM_Plex_Sans_Arabic } from "@next/font/google";

const IBM = IBM_Plex_Sans_Arabic({
  weight: ["100", "400", "700"],
  subsets: ["arabic"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={IBM.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
