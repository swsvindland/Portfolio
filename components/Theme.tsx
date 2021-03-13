import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core";
import React, { FC } from "react";

const theme = createMuiTheme({
  overrides: {},
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
