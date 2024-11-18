import React from 'react';
import './Loading.css';

export const Loading = () => (
    <section className="h-screen flex justify-center items-center">
        <svg viewBox="25 25 50 50" className="container">
            <circle cx="50" cy="50" r="20" className="loader"></circle>
        </svg>
    </section>
);
