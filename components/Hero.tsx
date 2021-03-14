import { Button, Theme, Typography, makeStyles } from "@material-ui/core";
import React, { FC } from "react";

import { contact } from "../src/routes";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background:
      'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/hero.jpg")',
    width: "100%",
    height: "80vh",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "top",
    },
  },
  text: {
    width: "100%",
    maxWidth: 1040,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  body: {
    width: "50%",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: 20,
    },
  },
  typo: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const Hero: FC = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.text}>
        <div className={classes.body}>
          <Typography
            variant="subtitle1"
            component="h2"
            className={classes.typo}
          >
            Frontend Software Developer
          </Typography>
          <Typography variant="body1" component="p" className={classes.typo}>
            I am a software developer with eight plus years of experience. I
            specialize in frontend developement with frameworks such as React,
            Vue and Flutter.
          </Typography>
          <Typography variant="body1" component="p" className={classes.typo}>
            I have developed many professional level applications, check out my
            work experience page. Also i've created many personal projects as a
            showcase of my skills and passion for developing fast, reliable, and
            beautiful applications, check out my projects page.
          </Typography>
          <Typography variant="body1" component="p" className={classes.typo}>
            If you would like to work with me, or hire me for a project, reach
            out using the link below.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component="a"
            href={contact}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
