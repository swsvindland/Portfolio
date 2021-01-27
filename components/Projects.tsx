import React, { FC } from "react";

import Project from "./Project";
import styles from "../styles/Projects.module.css";

interface IProps {
  posts: any[];
}
const Projects: FC<IProps> = ({ posts }) => {
  return (
    <ul className={styles.grid}>
      {posts.map((value, index) => (
        <Project
          key={`project-${index}`}
          image={value.image}
          title={value.title}
          description={value.description}
          github={value.github}
          googlePlay={value.googlePlay}
          appleStore={value.appleStore}
        />
      ))}
    </ul>
  );
};

export default Projects;
