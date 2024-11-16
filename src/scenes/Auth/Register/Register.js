import React from 'react';
import {FormRegister} from 'components/Auth/Register/FormRegister'

const Register = () => (
    <section>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">register your
                    account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <FormRegister/>
            </div>
        </div>
    </section>
);

export default Register;
