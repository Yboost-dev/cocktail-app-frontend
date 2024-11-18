import React from 'react';
import {ButtonDefault} from 'components/Button/Button';

const NotFound = () => (
    <section>
        <div className="px-5 py-16 md:px-10 md:py-20">
            <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                <img
                    src="./logo_yboost.png"
                    alt=""
                    className="mx-auto mb-8 inline-block h-36 flex-none object-cover"
                />
                <h1 className="mb-4 text-4xl font-bold md:text-6xl">404 Error</h1>
                <p className="mx-auto mb-5 max-w-lg text-sm text-gray-500 sm:text-base md:mb-6 lg:mb-8">
                    Commodo, consequat turpis placerat ultrices sapien, tortor
                    tincidunt. Sit quisque est metus auctor sed turpis lectus quis.
                </p>
                <ButtonDefault to="/"
                               className="inline-block items-center rounded-md bg-black px-8 py-4 text-center font-semibold text-white">
                    Go Home
                </ButtonDefault>
            </div>
        </div>
    </section>
);

export default NotFound;
