import Footer from "../components/Footer";
import { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Projects from "../components/Projects";
import data from "../public/data/projects.json";
import styles from "../styles/Portfolio.module.css";

export default function Portfolio({ posts }) {
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
        <Projects posts={posts} />
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
