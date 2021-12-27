import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HelpIcon from '@mui/icons-material/Help';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';

import { useState } from 'react';

import { Link as RouterLink } from 'react-router-dom';

import { useNotificationContext, types } from '../../contexts/NotificationContext';

import { create } from '../../services/ticketService.js';

const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateonTypes = {
    firstName: (value) => {
        return value.length < 3 || value.length > 15
    },
    lastName: (value) => {
        return value.length < 3 || value.length > 15
    },
    email: (value) => {
        return !emailReg.test(value);
    },
    message: (value) => {
        return value.length < 15;
    }
}

export default function Register() {
    const { addNotification } = useNotificationContext();

    const [error, setError] = useState({
        firstName: true,
        lastName: true,
        email: true,
        message: true
    });

    const validate = (e) => {
        setError(state => {
            let newState = { ...state };
            newState[e.target.name] = validateonTypes[e.target.name](e.target.value);
            return newState;
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        if (Object.values(error).find(x => x === true)) {
            addNotification("Please fill all fields", types.error);
        } else {
            const firstName = data.get('firstName');
            const lastName = data.get('lastName');
            const name = `${firstName} ${lastName}`;
            const email = data.get('email');
            const message = data.get('message');
            create({name, email, message})
                .then(() => {
                    addNotification('You send ticket successfully', types.success);
                })
                .catch(err => {
                    addNotification(err);
                });
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <HelpIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Support Ticket
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={validate}
                                error={error.firstName}
                                helperText={error.firstName && "Between 3 and 15 chars"} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                                error={error.lastName}
                                onChange={validate}
                                helperText={error.lastName && "Between 3 and 15 chars"} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                error={error.email}
                                onChange={validate}
                                helperText={error.email && "Please enter valid email address"} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                minRows={2}
                                multiline={true}
                                name="message"
                                label="Message"
                                type="textarea"
                                id="message"
                                error={error.message}
                                onChange={validate}
                                helperText={error.message && "Minimum 15 characters"} />
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} disabled={Object.values(error).find(x => x === true)}>
                        Send Ticket
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <RouterLink to="/">
                                <IconButton>
                                    <ArrowBackIcon />
                                </IconButton>
                            </RouterLink>
                        </Grid>
                        <Grid item />
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}