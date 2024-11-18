import React from 'react';
import {Link} from 'react-router-dom';

export const LogoHeader = () => {
    return (
            <div>
                <Link to="/">
                    <img className="h-20" src="/logo_yboost.png" alt="logo App"/>
                </Link>
            </div>
    );
};