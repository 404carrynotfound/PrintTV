import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';

import { useState } from 'react';

import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { Copyright } from '../Common/Copyrigth';

import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

import * as authService from '../../services/authService';

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
	password: (value) => {
		return value.length < 8;
	}
}

export default function Register() {
	const navigate = useNavigate();
	const [error, setError] = useState({
		firstName: true,
		lastName: true,
		email: true,
		password: true
	});
	const { addNotification } = useNotificationContext();
	const { login } = useAuthContext();


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
			const email = data.get('email');
			const password = data.get('password');
			authService.register(email, password)
				.then(authData => {
					addNotification('You register successfully', types.success);
					login(authData);
					navigate('/player');
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
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
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
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="new-password"
								error={error.password}
								onChange={validate}
								helperText={error.password && "Minimum eight characters"} />
						</Grid>
					</Grid>
					<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} disabled={Object.values(error).find(x => x === true)}>
						Sign Up
					</Button>
					<Grid container>
						<Grid item xs>
							<RouterLink to="/">
								<IconButton>
									<ArrowBackIcon />
								</IconButton>
							</RouterLink>
						</Grid>
						<Grid item>
							<Link to="/login" variant="body2" component={RouterLink}>
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Copyright sx={{ mt: 5 }} />
		</Container>
	);
}