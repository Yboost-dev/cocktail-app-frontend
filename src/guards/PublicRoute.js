// PublicRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const PublicRoute = ({ children }) => {
    const token = Cookies.get("__session");

    return token ? <Navigate to="/" /> : children;
};

export default PublicRoute;
