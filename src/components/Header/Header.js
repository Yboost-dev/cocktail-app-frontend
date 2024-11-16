import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
    <header className="bg-blue-800 text-white p-4">
        <h1 className="text-2xl">My App</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    </header>
);