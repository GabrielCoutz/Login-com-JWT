import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";
import "../styles/scss/style.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
