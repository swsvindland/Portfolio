import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Head from "next/head";
import Header from "../components/Header";

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

      <main>
        <Contact />
      </main>

      <Footer />
    </>
  );
}
