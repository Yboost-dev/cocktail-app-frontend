import React from "react";
import {useParams, Route, Routes} from "react-router-dom";
import Account from "./Account/Account";
import NotFound from "../NotFound/NotFound";
import PrivateRoute from "../../guards/PrivateRoute";

export const UserRouter = () => {
    const {userId} = useParams();

    return (
        <Routes>
            <Route
                path="/profil"
                element={
                    <PrivateRoute userId={userId}>
                        <Account/>
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};
