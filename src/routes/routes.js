import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../scenes/Index/Index.js';
import NotFound from '../scenes/NotFound/NotFound.js';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
