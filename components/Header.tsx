import React, { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <a className="header-item" href="/">
          <FontAwesomeIcon className="header-icon" icon={faFileCode} />
          <h1 className="header-title">Sam Svindland</h1>
        </a>
        <div className="header-item">
          <a className="header-link" href="/experience">
            Experience
          </a>
          <a className="header-link" href="/portfolio">
            Portfolio
          </a>
          <a className="btn btn-primary" href="/contact">
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
