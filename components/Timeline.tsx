import {
  IconButton,
  Paper,
  Theme,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {
  Timeline as MuiTimeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@material-ui/lab";
import React, { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(2),
    "& > *": {
      marginBottom: theme.spacing(1),
    },
  },
  icon: {
    width: "0.75em",
    height: "0.75em",
  },
  listItem: {
    marginBottom: theme.spacing(1),
  },
}));

interface IProps {
  posts: any[];
}

const Timeline: FC<IProps> = ({ posts }) => {
  const classes = useStyles();

  return (
    <MuiTimeline align="alternate">
      {posts.map((value, index) => (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={1} component="article" className={classes.paper}>
              <Typography
                variant="overline"
                component="span"
              >{`${value.dateRange[0]} - ${value.dateRange[1]}`}</Typography>
              <Typography variant="h6" component="h2">
                {value.company}
              </Typography>
              <Typography variant="subtitle2" component="h3">
                {value.jobTitle}
              </Typography>
              <ul>
                {value.description.map((item, index) => (
                  <li
                    key={`description-${value.jobTitle}-${index}`}
                    className={classes.listItem}
                  >
                    <Typography variant="body2">{item}</Typography>
                  </li>
                ))}
              </ul>
              <IconButton
                href={value.website}
                aria-label={`${value.company} Website`}
                rel="noopener"
                target="_blank"
              >
                <FontAwesomeIcon className={classes.icon} icon={faCode} />
              </IconButton>
              {value.github && (
                <IconButton
                  href={value.github}
                  aria-label={`${value.company} Code Repo`}
                  rel="noopener"
                  target="_blank"
                >
                  <FontAwesomeIcon className={classes.icon} icon={faGithub} />
                </IconButton>
              )}
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </MuiTimeline>
  );
};

export default Timeline;
