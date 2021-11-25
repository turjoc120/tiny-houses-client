import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropagateLoader from "react-spinners/PropagateLoader";
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth();

    if (isLoading) {
        return <PropagateLoader color="#318528" size={25} />
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;