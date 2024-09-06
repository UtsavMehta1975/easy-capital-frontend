import React from 'react';
import Partners from '../Partners';

const SuccessMessage = ({verificationMessage}) => {
    return (
        <>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto flex flex-col text-center items-center">
                <div className="flex items-center justify-center p-5 rounded-full shadow-lg w-fit mb-4">
                    <svg
                        className="w-12 h-12 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Submitted Successfully</h2>
                <p className="text-gray-600 text-base">
                    {verificationMessage}
                </p>
            </div>
            <Partners />
        </>
    );
};

export default SuccessMessage;
