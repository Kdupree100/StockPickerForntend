import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <div className="welcome-screen">
            <h1>Welcome to Stock Picker!</h1>
            <p>
                Ready to dive into the world of stocks? To unlock the door to endless financial opportunities,
                you need your key. Enter your API key to get started!
            </p>
            <Link to="/apikey">Enter Your Key</Link>
        </div>
    );
}

export default Welcome;
