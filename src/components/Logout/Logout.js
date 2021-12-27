import { Navigate } from 'react-router-dom';

import { useEffect } from 'react';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext.js'; 

const Logout = () => {
    const { user, logout } = useAuthContext();
    const { addNotification } = useNotificationContext();
    
    useEffect(() => {
        return authService.logout(user.accessToken)
            .then(() => {
                addNotification('You logged out successfully', types.success);
                logout();
            })
    }, [addNotification, logout, user.accessToken])

    return <Navigate to="/"/>;
};

export default Logout;