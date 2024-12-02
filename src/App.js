import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NotFound from './scenes/NotFound/NotFound';
import Home from './scenes/Index/Index';
import {AuthRouter} from "./scenes/Auth/AuthRouter";
import {UserRouter} from "./scenes/User/UserRouter";

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/auth/*" element={<AuthRouter/>}/>
                    <Route path="/user/:userId/*" element={<UserRouter/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
