import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
    const router = useRouter();

    useEffect(() => { }, []);

    return (
        <div>
            A City and A Product parameters must be provided!
        </div>
    );
};

export default Home;