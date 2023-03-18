import { Button, TextField, Theme, makeStyles } from '@material-ui/core';
import { FC, MouseEvent, useState } from 'react';
import axios from 'axios';

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
    const [email, setEmail] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const [phone, setPhone] = useState<string | undefined>(undefined);
    const [sent, setSent] = useState<boolean>(false);

    const handleClick = async (event: MouseEvent) => {
        event.preventDefault();
        setSent(true);
        await axios.post('api/sendEmail', {
            email,
            body,
            phone,
        });
    };

    if (sent) {
        return (
            <div className={classes.root}>
                <h1>Thank you for your message!</h1>
                <p>I will get back to you shortly</p>
            </div>
        );
    }

    return (
        <form className={classes.root}>
            <TextField
                type="email"
                label="Email Adress"
                id="email"
                variant="outlined"
                className={classes.input}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
                type="phone"
                label="Phone Number (Optional)"
                id="phone"
                variant="outlined"
                className={classes.input}
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
            />
            <TextField
                multiline
                minRows={4}
                id="message"
                placeholder="Hi, I would like to hire you!"
                variant="outlined"
                className={classes.input}
                value={body}
                onChange={(event) => setBody(event.target.value)}
            />
            <Button
                type="submit"
                variant="contained"
                color="secondary"
                className={classes.input}
                onClick={handleClick}
            >
                Submit
            </Button>
        </form>
    );
};

export default Contact;
