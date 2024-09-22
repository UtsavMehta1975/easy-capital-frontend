import React, { useEffect } from 'react';
import Partners from './Partners';
import axiosInstance from '@/utils/axios';

const SuccessMessage = ({ verificationMessage, gstId, registerationId }) => {



    useEffect(() => {
        if (gstId) {
            const verifyGstRequest = async (gstRequestId) => {
                try {
                    const response = await axiosInstance.put(`/gst-requests/verify/${gstRequestId}`);

                    if (response.data.error) {
                        console.error(`Error: ${response.data.message}`);
                        return { success: false, message: response.data.message };
                    }

                    return { success: true, data: response.data };

                } catch (error) {
                    console.error('Failed to verify GST Request:', error.message);
                    return { success: false, message: error.message };
                }
            };
            verifyGstRequest(gstId)
        } else if (registerationId) {
            const verifyRegisterationRequest = async (registerationRequestId) => {
                try {
                    const response = await axiosInstance.put(`/registeration-requests/verify/${registerationRequestId}`);

                    if (response.data.error) {
                        console.error(`Error: ${response.data.message}`);
                        return { success: false, message: response.data.message };
                    }

                    return { success: true, data: response.data };

                } catch (error) {
                    console.error('Failed to verify GST Request:', error.message);
                    return { success: false, message: error.message };
                }
            };
            verifyRegisterationRequest(registerationId)
        }
    }, [])


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
                {verificationMessage}
            </div>
            {(!gstId && !registerationId) && (
                <Partners />
            )}
        </>
    );
};

export default SuccessMessage;
