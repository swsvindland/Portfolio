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
import {faCode} from "@fortawesome/free-solid-svg-icons";

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
    icon: {
        width: '0.75em',
        height: '0.75em',
    },
}));

interface IProps {
    image: string;
    title: string;
    description: string;
    github?: string;
    googlePlay?: string;
    appleStore?: string;
    website?: string;
}

const Project: FC<IProps> = ({
    image,
    title,
    description,
    github,
    googlePlay,
    appleStore,
    website
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
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            className={classes.icon}
                        />
                    </IconButton>
                )}
                {website && (
                    <IconButton
                        href={website}
                        aria-label="Website"
                        rel="noopener"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={faCode}
                            className={classes.icon}
                        />
                    </IconButton>
                )}
                {googlePlay && (
                    <IconButton
                        href={googlePlay}
                        aria-label="Google Play Store"
                        rel="noopener"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={faGooglePlay}
                            className={classes.icon}
                        />
                    </IconButton>
                )}
                {appleStore && (
                    <IconButton
                        href={appleStore}
                        aria-label="Apple App Store"
                        rel="noopener"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={faAppStore}
                            className={classes.icon}
                        />
                    </IconButton>
                )}
            </div>
        </Paper>
    );
};

export default Project;
