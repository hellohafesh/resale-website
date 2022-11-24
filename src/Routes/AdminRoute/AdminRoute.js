
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../Hooks/AdminHook/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);

    const location = useLocation();
    console.log(isAdmin);
    if (loading || isAdminLoading) {
        return <p>Loading</p>
    }
    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;