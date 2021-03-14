import { Theme, makeStyles } from "@material-ui/core";

import Footer from "../components/Footer";
import { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Projects from "../components/Projects";
import classes from "*.module.css";
import data from "../public/data/projects.json";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "70vh",
    height: "100%",
    width: "100%",
    backgroundColor: "#666666",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
}));

export default function Portfolio({ posts }) {
  const classes = useStyles();

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

      <main className={classes.root}>
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
