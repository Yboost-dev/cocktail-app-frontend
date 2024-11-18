import React, {useEffect, useState} from 'react';
import './Header.css';
import {getUser} from '../../services/auth/authService';
import {NavHeader} from "./components/Nav/NavHeader";
import {LogoHeader} from "./components/Logo/LogoHeader";
import {SearchHeader} from "./components/Search/SearchHeader";
import {IconHeader} from "./components/Icon/IconHeader";

export const Header = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const userData = await getUser();
            setUser(userData);
        };
        fetchUser();
    }, []);

    return (
        <header className="p-4 flex flex-row shadow-lg items-center justify-around">
            <LogoHeader/>
            <NavHeader/>
            <SearchHeader/>
            <IconHeader user={user}/>
        </header>
    );
};