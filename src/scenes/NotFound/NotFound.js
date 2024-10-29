import React from 'react';
import { ButtonDefault } from 'components/Button/Button';

const NotFound = () => (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
        <p className="mb-6">The page you are looking for does not exist.</p>
        {/* Passer le lien, le contenu du bouton et les classes supplémentaires */}
        <ButtonDefault to="/" className="bg-green-500 hover:bg-green-600">
            Go Home
        </ButtonDefault>
    </div>
);

export default NotFound;
