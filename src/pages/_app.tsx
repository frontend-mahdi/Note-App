import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import { FC } from "react";
const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
