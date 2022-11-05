import { CssBaseline, ThemeProvider, createTheme } from '@material-ui/core';
import React, {FC, ReactNode} from 'react';

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            light: '#42a5f5',
            main: '#1976d2',
            dark: '#0d47a1',
        },
        secondary: {
            light: '#d05ce3',
            main: '#9c27b0',
            dark: '#6a0080',
        },
    },
    overrides: {
        MuiTypography: {
            h1: {
                fontFamily: 'CascadiaCode',
                fontSize: '5em',
            },
            h2: {
                fontFamily: 'CascadiaCode',
                fontSize: '4em',
            },
            h3: {
                fontFamily: 'CascadiaCode',
                fontSize: '3.5em',
            },
            h4: {
                fontFamily: 'CascadiaCode',
                fontSize: '3em',
            },
            h5: {
                fontFamily: 'CascadiaCode',
                fontSize: '2.5em',
            },
            h6: {
                fontFamily: 'CascadiaCode',
                fontSize: '2em',
            },
            subtitle1: {
                fontFamily: 'CascadiaCode',
                fontSize: '2em',
            },
            subtitle2: {
                fontFamily: 'CascadiaCode',
                fontSize: '1.5em',
            },
            body1: {
                fontFamily: 'CascadiaCode',
                fontSize: '1.25em',
            },
            body2: {
                fontFamily: 'CascadiaCode',
                fontSize: '1em',
            },
            overline: {
                fontFamily: 'CascadiaCode',
                fontSize: '1em',
                textTransform: 'uppercase',
            },
            button: {
                fontFamily: 'CascadiaCode',
                fontSize: '1em',
                textTransform: 'uppercase',
            },
        },
        MuiButton: {
            label: {
                fontFamily: 'CascadiaCode',
            },
        },
        MuiLink: {
            root: {
                fontFamily: 'CascadiaCode',
            },
        },
    },
    props: {
        MuiButtonBase: {
            disableRipple: true,
        },
    },
});

interface IProps {
    children: ReactNode;
}

const Theme: FC<IProps> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default Theme;
