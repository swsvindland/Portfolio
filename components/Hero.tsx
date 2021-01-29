import React, { FC } from "react";

import { contact } from "../src/routes";

const Hero: FC = () => {
  return (
    <section className="hero">
      <div className="hero-width">
        <div className="hero-body">
          <h2>Frontend Software Developer</h2>
          <p>
            I am a software developer with eight plus years of experiance. I
            specialize in frontend developement with frameworks such as React,
            Vue and Flutter.
          </p>
          <p>
            I have developed many professional level applications and you can
            see my work history under the experiance secion of this webiste.
            Also i ahve developed many personal projects as a showcase of my
            skills and passion for developing fast, reliable, and beautiful
            applications.
          </p>
          <p>
            If you would like to work with me, or hire me for a project, reach
            out using the link below.
          </p>
          <a className="btn btn-primary" href={contact}>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
