import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/Button.css";
import "../styles/Header.css";

import "../styles/Footer.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
