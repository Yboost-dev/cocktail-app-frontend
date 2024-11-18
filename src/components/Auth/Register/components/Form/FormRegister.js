import React, {useState} from 'react';
import {register} from '../../../../../services/auth/authService';
import {useNavigate} from 'react-router-dom';

export const FormRegister = () => {
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessages, setErrorMessages] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {email, firstname, lastname, password};

        try {
            await register(userData);
            navigate('/');
        } catch (error) {
            setErrorMessages(Array.isArray(error.message) ? error.message : [error.message]);
        }
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            {errorMessages.length > 0 && (
                <div
                    className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
                    role="alert">
                    <svg className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span className="sr-only">Danger</span>
                    <div>
                        <span className="font-medium">Assurez-vous que ces exigences sont remplies :</span>
                        <ul className="mt-1.5 list-disc list-inside">
                            {errorMessages.map((msg, index) => (
                                <li key={index}>{msg}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            <div>
                <label htmlFor="firstname" className="block text-sm/6 font-medium text-gray-900">
                    Prénom
                </label>
                <div className="mt-2">
                    <input
                        id="firstname"
                        name="firstname"
                        type="text"
                        autoComplete="firstname"
                        required
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="lastname" className="block text-sm/6 font-medium text-gray-900">
                    Nom
                </label>
                <div className="mt-2">
                    <input
                        id="lastname"
                        name="lastname"
                        type="text"
                        autoComplete="lastname"
                        required
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                    Adresse email
                </label>
                <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                        Mot de passe
                    </label>
                </div>
                <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>

            <div className="text-sm">
                <span>Vous avez un compte ? </span>
                <a
                    href="/auth/login"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                    Connectez-vous
                </a>
            </div>
            <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Sign Up
                </button>
            </div>
        </form>
    );
};
