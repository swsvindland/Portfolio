import { Theme, makeStyles } from "@material-ui/core";

import Footer from "../src/components/Footer";
import Head from "next/head";
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#eaeaea",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
}));

export default function Home() {
  const classes = useStyles();

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

      <main className={classes.root}>
        <Hero />
      </main>

      <Footer />
    </>
  );
}
