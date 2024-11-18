import React from "react";
import {Navigate} from "react-router-dom";
import Cookies from "js-cookie";
import {getUser} from "../services/auth/authService";
import {Loading} from "components/Loaders/Loading/Loading";

const PrivateRoute = ({children, userId}) => {
    const token = Cookies.get("__session");
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        const fetchUser = async () => {
            if (token) {
                const userData = await getUser();
                setUser(userData);
            }
        };
        fetchUser();
    }, [token]);


    if (!token) {
        return <Navigate to="/auth/login"/>;
    }

    if (user === null) {
        return (
            <Loading />
        );
    }

    if (user.id !== userId) {
        return <Navigate to="/unauthorized"/>;
    }

    return children;
};

export default PrivateRoute;
