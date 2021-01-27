import React, { FC } from "react";
import {
  faAppStore,
  faGithub,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Project.module.css";

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
  return (
    <li>
      <article className={styles.card}>
        <img
          className={styles.image}
          src={`/images${image}`}
          alt={`${title}`}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.links}>
          {github && (
            <a href={github}>
              <FontAwesomeIcon className={styles.icon} icon={faGithub} />
            </a>
          )}
          {googlePlay && (
            <a href={googlePlay}>
              <FontAwesomeIcon className={styles.icon} icon={faGooglePlay} />
            </a>
          )}
          {appleStore && (
            <a href={appleStore}>
              <FontAwesomeIcon className={styles.icon} icon={faAppStore} />
            </a>
          )}
        </div>
      </article>
    </li>
  );
};

export default Project;
