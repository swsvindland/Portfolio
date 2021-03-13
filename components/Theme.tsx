import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core";
import React, { FC } from "react";

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: "CascadiaCode",
        fontSize: "5em",
      },
      h2: {
        fontFamily: "CascadiaCode",
        fontSize: "4em",
      },
      h3: {
        fontFamily: "CascadiaCode",
        fontSize: "3.5em",
      },
      h4: {
        fontFamily: "CascadiaCode",
        fontSize: "3em",
      },
      h5: {
        fontFamily: "CascadiaCode",
        fontSize: "2.5em",
      },
      h6: {
        fontFamily: "CascadiaCode",
        fontSize: "2em",
      },
      subtitle1: {
        fontFamily: "CascadiaCode",
        fontSize: "2em",
      },
      subtitle2: {
        fontFamily: "CascadiaCode",
        fontSize: "1.5em",
      },
      body1: {
        fontFamily: "CascadiaCode",
        fontSize: "1.25em",
      },
      body2: {
        fontFamily: "CascadiaCode",
        fontSize: "1em",
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

const Theme: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
