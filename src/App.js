import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; // Make sure you are importing correctly
import NotFound from 'scenes/NotFound/NotFound'; // Adjust the path if necessary
import Home from 'scenes/Index/Index'; // Ensure this path is correct

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<NotFound/>}/> {/* Catch-all for 404 */}
            </Routes>
        </Router>
    );
}
