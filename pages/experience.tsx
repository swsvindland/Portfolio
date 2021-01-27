import Footer from "../components/Footer";
import { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Timeline from "../components/Timeline";
import data from "../public/data/experience.json";
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
        <Timeline posts={posts} />
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: data.data,
    },
  };
};
