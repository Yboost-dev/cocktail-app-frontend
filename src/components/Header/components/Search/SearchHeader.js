import React from 'react';

export const SearchHeader = () => {
    return (
        <div className="flex justify-center items-center relative">
            <input
                className="border-2 border-gray-300 rounded-lg p-2 pr-10 m-4 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="text"
                placeholder="Rechercher un cocktail"
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                 className="lucide lucide-search absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-950 w-5 h-5 pointer-events-none">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
            </svg>
        </div>
    );
};