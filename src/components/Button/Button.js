// src/components/Button/Button.js
import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonDefault = ({ to, children, className }) => (
    <Link to={to}>
        <button className="bg-blue-800">
            {children}
        </button>
    </Link>
);
