import { FC } from 'react';

import { Grid } from '@material-ui/core';
import Project from './Project';

interface IProps {
    posts: any[];
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
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default Projects;
