import { Theme, makeStyles } from "@material-ui/core";

import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import Head from "next/head";
import Header from "../src/components/Header";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
  },
}));

export default function Experience() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Svindland | Contact Me</title>
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
        <Contact />
      </main>

      <Footer />
    </>
  );
}
