import React from 'react';
import { Loading } from "components/Loaders/Loading/Loading";
import { logout } from "services/auth/authService";
import { useNavigate } from "react-router-dom";

export const DashBoardComponent = ({ userData }) => {
    const navigate = useNavigate(); // Hook pour la navigation

    const Logout = () => {
        logout();
        navigate('/');
    };

    if (!userData) return (
        <Loading />
    );

    return (
        <div className="pl-40">
            <div>
                <p>
                    Bonjour <strong>{userData.firstname}</strong> (Vous n'êtes pas {userData.firstname} ? <span className="underline cursor-pointer" onClick={Logout}>Déconnexion</span>)
                </p>
            </div>
            <div>

            </div>
        </div>
    );
};
