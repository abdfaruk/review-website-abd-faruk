import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1 className="not-found-title">Oops!</h1>
            <h3>404 - PAGE NOT FOUND</h3>
            <p>The page you are looking for it's not available.</p>
        </div>
    );
};

export default NotFound;