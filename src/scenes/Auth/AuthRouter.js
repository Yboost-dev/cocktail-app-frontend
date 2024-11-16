import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import NotFound from "../NotFound/NotFound";
import PublicRoute from "../../guards/PublicRoute"; // Importer la garde

export const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={
                <PublicRoute>
                    <Login/>
                </PublicRoute>
            }
            />
            <Route path="/register" element={
                <PublicRoute>
                    <Register/>
                </PublicRoute>
            }
            />
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};
