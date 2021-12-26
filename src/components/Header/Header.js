import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link as RouterLink } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

export default function Header() {
    const { user } = useAuthContext();

    const guestNav = (
        <>
            <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }} />
            <Link variant="button" color="text.primary" href="#" sx={{ my: 1, mx: 1.5 }} >
                Features
            </Link>
            <Link variant="button" color="text.primary" href="#" sx={{ my: 1, mx: 1.5 }} >
                Support
            </Link>
            <Button to="/login" variant="outlined" sx={{ my: 1, mx: 1.5 }} LinkComponent={RouterLink}>
                Sign in
            </Button>
        </>
    );

    const adminNav = (
        <>
            <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }} />
            <Link variant="button" color="text.primary" href="#" sx={{ my: 1, mx: 1.5 }} >
                Features
            </Link>
            <Link variant="button" color="text.primary" to="/admin" sx={{ my: 1, mx: 1.5 }} component={RouterLink} >
                Admin Panel
            </Link>
            <Button to="/logout" variant="outlined" sx={{ my: 1, mx: 1.5 }} LinkComponent={RouterLink}>
                Logout
            </Button>
        </>
    );

    const userNav = (
        <>
            <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }} />
            <Link variant="button" color="text.primary" href="#" sx={{ my: 1, mx: 1.5 }} >
                Support
            </Link>
            <Button to="/logout" variant="outlined" sx={{ my: 1, mx: 1.5 }} LinkComponent={RouterLink}>
                Logout
            </Button>
        </>
    );

    return (
        <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }} >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                {!user.email && guestNav}
                {user.email && user.isAdmin && adminNav}
                {user.email && !user.isAdmin && userNav}
            </Toolbar>
        </AppBar>
    )
}