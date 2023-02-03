import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";
import UserStorage, { UserContext } from "../src/components/UserContext";
import "../styles/scss/style.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserStorage>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserStorage>
  );
}
