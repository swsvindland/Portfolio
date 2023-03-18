import {
    IconButton,
    Paper,
    Theme,
    Typography,
    makeStyles,
} from '@material-ui/core';
import React, { FC } from 'react';
import {
    faAppStore,
    faGithub,
    faGooglePlay,
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: 300,
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlign: 'center',
        padding: 24,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 8,
    },
    links: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
}));

interface IProps {
    image: string;
    title: string;
    description: string;
    github?: string;
    googlePlay?: string;
    appleStore?: string;
}

const Project: FC<IProps> = ({
    image,
    title,
    description,
    github,
    googlePlay,
    appleStore,
}) => {
    const classes = useStyles();

    return (
        <Paper elevation={1} component="article" className={classes.root}>
            <Image
                className={classes.image}
                src={`/images${image}`}
                alt={`${title}`}
                width={150}
                height={150}
            />
            <Typography variant="h6" component="h2">
                {title}
            </Typography>
            <Typography variant="body2" component="p">
                {description}
            </Typography>
            <div className={classes.links}>
                {github && (
                    <IconButton
                        href={github}
                        aria-label="Github"
                        rel="noopener"
                        target="_blank"
                        style={{ color: 'white' }}
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            style={{ fill: 'white' }}
                        />
                    </IconButton>
                )}
                {googlePlay && (
                    <IconButton
                        href={googlePlay}
                        aria-label="Google Play Store"
                        rel="noopener"
                        target="_blank"
                        style={{ color: 'white' }}
                    >
                        <FontAwesomeIcon
                            icon={faGooglePlay}
                            style={{ fill: 'white' }}
                        />
                    </IconButton>
                )}
                {appleStore && (
                    <IconButton
                        href={appleStore}
                        aria-label="Apple App Store"
                        rel="noopener"
                        target="_blank"
                        style={{ color: 'white' }}
                    >
                        <FontAwesomeIcon
                            icon={faAppStore}
                            style={{ color: 'white' }}
                        />
                    </IconButton>
                )}
            </div>
        </Paper>
    );
};

export default Project;
