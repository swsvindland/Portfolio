import Footer from "../src/components/Footer";
import { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../src/components/Header";
import data from "../public/data/games.json";
import {makeStyles, Theme} from "@material-ui/core";
import Projects from "../src/components/Projects";

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

export default function Games({posts}) {
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
