import React from 'react';
import {Link} from "react-router-dom";

export const NavComponent = ({userId}) => {
    return (
        <div>
            <div className="flex flex-col gap-4">
                <Link to={`/user/${userId}/dashboard`}>Tableau de bord</Link>
                <Link to={`/user/${userId}/orders`}>commande</Link>
                <Link to={`/user/${userId}/detail`}>detail du compte</Link>
            </div>
        </div>
    );
}

