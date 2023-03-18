import { Button, Theme, Typography, makeStyles } from '@material-ui/core';
import { FC } from 'react';

import { contact } from '../routes';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        background:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/hero.jpg")',
        width: '100%',
        height: '80vh',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            backgroundPosition: 'top',
        },
    },
    text: {
        width: '100%',
        maxWidth: 1040,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    body: {
        width: '50%',
        color: '#fff',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: 20,
        },
    },
    typo: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
        },
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
                    <Typography
                        variant="body1"
                        component="p"
                        className={classes.typo}
                    >
                        I am a seasoned software developer with experience in
                        Quality Assurance, Backend, and Frontend environments. I
                        have a proven track record of meeting strict and
                        often-changing deadlines, managing workloads, and
                        mentoring junior developers. I am passionate about
                        writing clean, efficient, and scalable code that solves
                        real-world problems.
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        className={classes.typo}
                    >
                        I have developed many professional level applications,
                        check out my work experience page. Also I have created
                        many personal projects as a showcase of my skills and
                        passion for developing fast, reliable, and beautiful
                        applications, check out my projects page.
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        className={classes.typo}
                    >
                        If you would like to work with me, or hire me for a
                        project, reach out using the link below.
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
