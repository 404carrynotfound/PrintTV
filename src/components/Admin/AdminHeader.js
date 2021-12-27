import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link as RouterLink } from 'react-router-dom';

export default function AdminHeader() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }} >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Channels" id={`vertical-tab-${0}`} aria-controls={`vertical-tabpanel-${0}`} to="/admin/channels" LinkComponent={RouterLink} />
                        <Tab label="Tickets" id={`vertical-tab-${1}`} aria-controls={`vertical-tabpanel-${1}`}  to="/admin/tickets" LinkComponent={RouterLink} />
                    </Tabs>
                </Box>
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }} />
                <Link variant="button" color="text.primary" sx={{ my: 1, mx: 1.5 }} to="/player" component={RouterLink}>
                    Player
                </Link>
                <Button to="/logout" variant="outlined" sx={{ my: 1, mx: 1.5 }} LinkComponent={RouterLink}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>

    );
}
