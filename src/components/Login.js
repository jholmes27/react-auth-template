import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

const Login = () => {
    const { authState, oktaAuth } = useOktaAuth();
    const login = async () => await oktaAuth.signInWithRedirect();
    const logout = async () => await oktaAuth.signOut();

    if (!authState) {
        return <div>Loading authentication...</div>;
    } else if (!authState.isAuthenticated) {
        return (
            <div>
                <button onClick={login}>Login</button>
            </div>
        );
    } else {
        return (
            <div>
                <p>Authenticated!</p>
                <button onClick={logout}>Logout</button>
            </div>
        );
    };
};

export default Login;