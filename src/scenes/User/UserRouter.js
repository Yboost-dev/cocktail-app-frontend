import React from "react";
import {useParams, Route, Routes} from "react-router-dom";
import DashBoard from "./DashBoard/DashBoard";
import Orders from "./Orders/Orders";
import Detail from "./Detail/Detail";
import NotFound from "../NotFound/NotFound";
import PrivateRoute from "../../guards/PrivateRoute";

export const UserRouter = () => {
    const {userId} = useParams();

    return (
        <Routes>
            <Route
                path="/dashboard"
                element={
                    <PrivateRoute userId={userId}>
                        <DashBoard/>
                    </PrivateRoute>
                }
            />
            <Route
                path="/orders"
                element={
                    <PrivateRoute userId={userId}>
                        <Orders/>
                    </PrivateRoute>
                }
            />
            <Route
                path="/details"
                element={
                    <PrivateRoute userId={userId}>
                        <Detail/>
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};
