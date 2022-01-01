import Footer from "../src/components/Footer";
import { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline";
import data from "../public/data/coding.json";

export default function Work({ posts }) {
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
