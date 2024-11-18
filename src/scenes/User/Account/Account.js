import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from "../../../services/user/userService";
import {Header} from 'components/Header/Header.js';

const Account = () => {
    const { userId } = useParams();  // Récupérer l'ID de l'utilisateur depuis l'URL
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await getUser(userId); // Un seul 'await' ici
            setUserData(response);
        };
        fetchUserData();
    }, [userId]);

    if (!userData) return <div>Loading...</div>;

    return (
        <>
            <Header />
            <div>
                <h1>Mon compte</h1>
                <p>Nom: {userData.name}</p>
                <p>Email: {userData.email}</p>
            </div>
        </>
    );
};

export default Account;
