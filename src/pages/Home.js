import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>

            <Link to="/sobre">Ir para página SOBRE</Link>
        </div>
    );
};

export default Home;