import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/Button.css";
import "../styles/Header.css";
import "../styles/Carousal.css";
import "../styles/Footer.css";
import "../styles/AboutSection.css";
import "../styles/OurCollection.css";
import "../styles/CollectionCarousel.css";
import "../styles/CommonBanner.css";
import "../styles/AboutContent.css";
import "../styles/ContactSection.css";
import "../styles/Banner.css";
import "../styles/Homebanner.css";
import "../styles/Collection.css";
import "swiper/css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css/pagination";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Decoras</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
