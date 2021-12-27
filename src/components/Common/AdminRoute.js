import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

export default function AdminRoute() {
    const { user } = useAuthContext();

    return user.isAdmin ? <Outlet /> : <Navigate to="/" />
};