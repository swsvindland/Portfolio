import Footer from "../components/Footer";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Svindland | Home</title>
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
        <Hero />
      </main>

      <Footer />
    </>
  );
}
