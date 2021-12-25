import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import { useNotificationContext } from '../../contexts/NotificationContext';

export default function Notification() {

    const { notification, hideNotification } = useNotificationContext();

    if (!notification.show) {
        return null;
    }

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={notification.show} autoHideDuration={6000} onClose={hideNotification} anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
                <Alert onClose={hideNotification} variant="filled" severity={notification.type} sx={{ width: '100%' }}>
                    {notification.message}
                </Alert>
            </Snackbar>
        </Stack>
    );
}
