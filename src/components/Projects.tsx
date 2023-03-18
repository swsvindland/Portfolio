import { FC } from 'react';

import { Grid } from '@material-ui/core';
import Project from './Project';

interface Post {
    image: string;
    company: string;
    jobTitle?: string;
    title?: string;
    dateRange: [string, string];
    description: string;
    github?: string;
    googlePlay?: string;
    appleStore?: string;
    website?: string;
}

interface IProps {
    posts: Post[];
}
const Projects: FC<IProps> = ({ posts }) => {
    return (
        <Grid container spacing={3} alignItems="center" justifyContent="center">
            {posts.map((value, index) => (
                <Grid key={`project-${index}`} item zeroMinWidth>
                    <Project
                        key={`project-${index}`}
                        image={value.image}
                        title={value.title}
                        description={value.description}
                        github={value.github}
                        googlePlay={value.googlePlay}
                        appleStore={value.appleStore}
                        website={value.website}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default Projects;
