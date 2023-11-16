import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({
    currentUser,
    redirectPath = '/',
    children,
    role
}) => {
    if (!currentUser) {
        return <Navigate to={redirectPath} replace />;
    }

    if (role && currentUser?.user?.roles_id?.name !== role) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoute