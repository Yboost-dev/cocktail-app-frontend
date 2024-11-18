import React from 'react';
import {Link} from 'react-router-dom';

export const NavHeader = () => {
    return (
        <nav>
            <ul className="flex space-x-10 gap-4">
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">Les cocktails</Link>
                </li>
                <li>
                    <Link to="/about">Un peu de soft</Link>
                </li>
                <li>
                    <Link to="/about">Les shooters</Link>
                </li>
            </ul>
        </nav>
    );
};