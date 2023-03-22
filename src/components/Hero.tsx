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
                        Software Engineer
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        className={classes.typo}
                    >
                        Welcome to my portfolio! I am an experienced software
                        developer with expertise in Frontend, Backend, and
                        Quality Assurance.
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        className={classes.typo}
                    >
                        Throughout my career, I have consistently met deadlines
                        and managed heavy workloads and mentored junior
                        developers. I focus on writing clean, efficient, and
                        scalable code has helped me develop professional-level
                        applications that solve real-world problems.
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        className={classes.typo}
                    >
                        I invite you to check out my work experience page to see
                        my history in the field. Additionally, I have many
                        personal projects to showcase my skills and passion for
                        developing fast, reliable, and beautiful applications.
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        className={classes.typo}
                    >
                        If you are looking for a talented and dedicated software
                        developer, I am eager to speak with you. Please use the
                        link below to get in touch, and I look forward to the
                        opportunity to contribute to your team.
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
