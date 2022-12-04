import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';
import { BarLoader } from 'react-spinners';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <BarLoader
            color="rgba(169, 59, 40, 1)"
            speedMultiplier={2}
        />
    }
    if (user.uid) {
        return { children }
    }


};

export default PrivateRoute;