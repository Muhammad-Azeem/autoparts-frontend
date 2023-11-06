import { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
    // eslint-disable-next-line react/display-name
    return (props) => {
        const router = useRouter();

        useEffect(() => {
            // Check for a valid token when the component mounts
            const token = localStorage.getItem('token');

            if (!token) {
                router.push('/login'); // Redirect to the login page if there's no token
            }
        }, []);

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
