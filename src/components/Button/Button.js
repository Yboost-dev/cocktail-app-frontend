import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonDefault = ({ to, children, className }) => (
    <Link to={to}>
        <button className="inline-block items-center rounded-md bg-black px-8 py-4 text-center font-semibold text-white">
            {children}
        </button>
    </Link>
);
