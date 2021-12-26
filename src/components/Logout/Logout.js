import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext.js'; 

const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuthContext();
    const { addNotification } = useNotificationContext();
    
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                addNotification('You logged out successfully', types.success);
                logout();
                navigate('/');
            })
    }, [])

    return null;
};

export default Logout;