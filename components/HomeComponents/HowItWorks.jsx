"use client"
import React, { useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const HowItWorks = () => {
    useEffect(() => {
        // Ensure this code runs on the client side
        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
            // Client-side specific code can go here
            // Example: const element = document.getElementById('someElement');
        }
    }, []);

    return (
        <div className="container flex flex-col lg:flex-row items-center gap-10 mx-auto my-5 mb-20">
            <div className='hidden lg:block lg:w-1/2 items-center bg-[#BFE0FF] rounded-lg'>
                <Player
                    src="/animations/how-it-works.json"
                    loop
                    autoplay
                    style={{ height: '500px' }}
                />
            </div>

            <div className="lg:w-1/2 h-full flex flex-col justify-center my-auto max-w-[85%]">
                <h4 className="font-medium text-[1.5rem]">How it works?</h4>
                <h1 className="font-semibold text-[1.6rem] md:text-[2.5rem] text-primary">Start Your Credit Approval</h1>

                <div className="mt-7 flex items-center gap-6">
                    <div className="h-[4rem] w-[4rem] shrink-0 rounded-full bg-blue-500 flex justify-center items-center">
                        <svg fill="#ffffff" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" className="max-w-[3rem]">
                            <path d="M456.69,421.39,362.6,327.3a173.81,173.81,0,0,0,34.84-104.58C397.44,126.38,319.06,48,222.72,48S48,126.38,48,222.72s78.38,174.72,174.72,174.72A173.81,173.81,0,0,0,327.3,362.6l94.09,94.09a25,25,0,0,0,35.3-35.3ZM97.92,222.72a124.8,124.8,0,1,1,124.8,124.8A124.95,124.95,0,0,1,97.92,222.72Z"></path>
                        </svg>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h6 className="text-primary font-medium text-[1.6rem]">Choose from our offers</h6>
                        <p className="font-light text-[1rem]">
                            Select from our wide range of products and offerings that best suit your purpose.
                        </p>
                    </div>
                </div>

                <div className="mt-10 flex items-center gap-6">
                    <div className="h-[4rem] w-[4rem] shrink-0 rounded-full bg-blue-500 flex justify-center items-center">
                        <svg fill="white" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="max-w-[2.5rem]">
                            <path d="M91,0H37A11,11,0,0,0,26,11V117a11,11,0,0,0,11,11H91a11,11,0,0,0,11-11V11A11,11,0,0,0,91,0ZM32,22.69H96V99.58H32ZM37,6H91a5,5,0,0,1,5,5v5.69H32V11A5,5,0,0,1,37,6ZM91,122H37a5,5,0,0,1-5-5V105.58H96V117A5,5,0,0,1,91,122Z"></path>
                            <circle cx="64" cy="113.91" r="6"></circle>
                            <path d="M56.13,14.22H71.88a3,3,0,1,0,0-6H56.13a3,3,0,1,0,0,6Z"></path>
                        </svg>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h6 className="text-primary font-medium text-[1.6rem]">Quick Application</h6>
                        <p className="font-light text-[1rem]">
                            Make your application for an offering and get verified by our team with a seamless experience.
                        </p>
                    </div>
                </div>

                <div className="mt-10 flex items-center gap-6">
                    <div className="h-[4rem] w-[4rem] shrink-0 rounded-full bg-blue-500 flex justify-center items-center">
                        <svg fill="white" viewBox="0 0 24 14.92" xmlns="http://www.w3.org/2000/svg" className="max-w-[2.5rem]">
                            <path d="M23.5,4H22V2.5a.5.5,0,0,0-.5-.5H20V.5a.5.5,0,0,0-.5-.5H.5A.5.5,0,0,0,0,.5v9.91a.5.5,0,0,0,.5.5H2v1.5a.5.5,0,0,0,.5.5H4v1.5a.5.5,0,0,0,.5.5h19a.5.5,0,0,0,.5-.5V4.5A.5.5,0,0,0,23.5,4ZM15.8,9.91H4.2A3.74,3.74,0,0,0,1,6.71V4.2A3.74,3.74,0,0,0,4.2,1H15.8A3.74,3.74,0,0,0,19,4.2V6.71A3.74,3.74,0,0,0,15.8,9.91ZM19,7.71V9.91H16.79A2.76,2.76,0,0,1,19,7.71ZM19,1V3.21A2.76,2.76,0,0,1,16.79,1ZM1,1H3.21A2.76,2.76,0,0,1,1,3.21ZM1,7.71A2.76,2.76,0,0,1,3.21,9.91H1Zm2,3.21H19.5a.5.5,0,0,0,.5-.5V3h1v8.91H3Zm20,3H5v-1H21.5a.5.5,0,0,0,.5-.5V5h1Z"></path>
                            <path d="M10,2.06a3.39,3.39,0,1,0,3.39,3.39A3.4,3.4,0,0,0,10,2.06Zm0,5.78a2.39,2.39,0,1,1,2.39-2.39A2.39,2.39,0,0,1,10,7.85Z"></path>
                        </svg>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h6 className="text-primary font-medium text-[1.6rem]">Get Funded</h6>
                        <p className="font-light text-[1rem]">
                            As soon as your application gets approved, you will receive the funds in no time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
