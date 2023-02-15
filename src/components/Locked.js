import { useOktaAuth } from '@okta/okta-react';

const Locked = () => {
    const { authState, oktaAuth } = useOktaAuth();
    const logout = async () => await oktaAuth.signOut();

    if (!authState) {
        return <div>Loading authentication...</div>;
    } else if (authState.isAuthenticated) {
        return (
            <div>
                <p>If you're seeing this, you're authenticated!</p>
                <button onClick={logout}>Logout</button>
            </div>
        );
    };
};

export default Locked;