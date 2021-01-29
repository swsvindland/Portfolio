import {
  contact,
  experience,
  home,
  portfolio,
  privacy,
  terms,
} from "../src/routes";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: FC = () => {
  return (
    <footer className="w-100 d-flex justify-content-center">
      <div className="w-100 mw-1040 d-flex flex-row justify-content-between align-items-center">
        <div className="mx-5">
          <h3 className="text-muted bold-text">Svindland Tech</h3>
          <a className="mx-2" href="https://github.com/swsvindland">
            <FontAwesomeIcon className="icon" icon={faGithub} />
          </a>{" "}
          <a
            className="mx-2"
            href="https://www.linkedin.com/in/sam-svindland-649611b5/"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
          </a>{" "}
          <a
            className="mx-2"
            href="https://www.youtube.com/channel/UCKb9yezq5xIJeXgZmdba41A"
          >
            <FontAwesomeIcon className="icon" icon={faYoutube} />
          </a>{" "}
        </div>
        <div className="mx-5 my-3">
          <ul className="list-unstyled">
            <li>
              <a href={home}>Home</a>
            </li>
            <li>
              <a href={experience}>Experience</a>
            </li>
            <li>
              <a href={portfolio}>Portfolio</a>
            </li>
            <li>
              <a href={contact}>Contact</a>
            </li>
            <li>
              <a href={terms}>Terms</a>
            </li>
            <li>
              <a href={privacy}>Privacy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
