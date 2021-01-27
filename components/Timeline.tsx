import React, { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  posts: any[];
}

const Timeline: FC<IProps> = ({ posts }) => {
  return (
    <div className="timeline">
      {posts.map((value, index) => (
        <div
          key={`timeline-${index}`}
          className={
            index % 2 === 0
              ? "timeline-container timeline-left"
              : "timeline-container timeline-right"
          }
        >
          <div className="timeline-content">
            <span className="timeline-date">{`${value.dateRange[0]} - ${value.dateRange[1]}`}</span>
            <h2 className="timeline-title">{value.company}</h2>
            <h3 className="timeline-body">{value.jobTitle}</h3>
            <ul>
              {value.description.map((item, index) => (
                <li
                  key={`description-${value.jobTitle}-${index}`}
                  className="timeline-desc mb-2"
                >
                  {item}
                </li>
              ))}
            </ul>
            <a className="" href={value.website}>
              <FontAwesomeIcon
                className="header-icon"
                icon={faCode}
                style={{ color: "#000" }}
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
