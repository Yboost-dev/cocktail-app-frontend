import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from "../../../services/user/userService";
import {Header} from 'components/Header/Header.js';
import {Loading} from "components/Loaders/Loading/Loading";
import {DashBoardComponent} from "components/Account/DashBoard/DashBoard";
import {NavComponent} from "components/Account/Nav/Nav";

const DashBoard = () => {
    const { userId } = useParams();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await getUser(userId);
            setUserData(response);
        };
        fetchUserData();
    }, [userId]);

    if (!userData) return (
        <Loading />
    );;

    return (
        <>
            <Header />
            <div className="flex flex-row">
                <NavComponent userId={userId}/>
                <DashBoardComponent userData={userData}/>
            </div>

        </>
    );
};

export default DashBoard;
