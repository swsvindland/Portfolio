import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Portfolio.module.css";

export default function Experience({ posts }) {
  return (
    <>
      <Head>
        <title>Svindland | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/CascadiaCode.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <Header />

      <main className={styles.main}>
        <Contact />
      </main>

      <Footer />
    </>
  );
}
