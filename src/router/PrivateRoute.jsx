import React, { useContext } from 'react';
import { AuthContext } from '../context/authProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const authInfo=useContext(AuthContext);
    if(authInfo?.loading){
        return <p>Loading...</p>
    }
    if(authInfo?.user?.uid){
        return children;
    }
    return (
        <Navigate to="login"></Navigate>
    );
};

export default PrivateRoute;