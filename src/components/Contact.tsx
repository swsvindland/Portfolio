import {
    Button,
    TextField,
    Theme,
    Typography,
    makeStyles,
    useTheme,
} from '@material-ui/core';
import { FC, MouseEvent } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        maxWidth: 600,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        marginBottom: theme.spacing(3),
    },
}));

const Contact: FC = () => {
    const classes = useStyles();
    const theme = useTheme();

    const handleClick = (event: MouseEvent) => {
        event.preventDefault();
    };

    return (
        <form className={classes.root}>
            <Typography variant="h6" component="h2">
                Email me at
            </Typography>
            <Typography
                variant="subtitle2"
                component="h3"
                style={{ marginBottom: theme.spacing(3) }}
            >
                swsvindland@gmail.com
            </Typography>
            <TextField
                type="email"
                label="Email Adress"
                id="email"
                variant="outlined"
                className={classes.input}
            />
            <TextField
                type="phone"
                label="Phone Number (Optional)"
                id="phone"
                variant="outlined"
                className={classes.input}
            />
            <TextField
                multiline
                rows={4}
                id="message"
                placeholder="Hi, I would like to hire you!"
                variant="outlined"
                className={classes.input}
            />
            <Button
                type="submit"
                variant="contained"
                color="secondary"
                className={classes.input}
                onClick={handleClick}
                disabled={true}
            >
                Comming Soon
            </Button>
        </form>
    );
};

export default Contact;
