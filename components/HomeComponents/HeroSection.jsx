import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
    return (
        <section className="flex items-center justify-center h-screen bg-gray-100">
            <div className="container mx-auto flex flex-wrap items-center h-full">
                {/* Left side with text */}
                <div className="w-full md:w-1/2 text-center md:text-left p-4 flex flex-col justify-center h-full md:pr-2">
                    <h1 className="text-3xl font-bold text-gray-800 lg:text-4xl mb-4">
                        Empowering Your Business with Easy Capital Solutions
                    </h1>
                    <p className="text-gray-500 mb-6">
                        Get access to the financial support your business needs to grow. Whether you&apos;re an MSME or an aspiring entrepreneur, we&apos;re here to help.
                    </p>

                    <Link href="/apply">
                        <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none">
                            Apply for Loan Today
                        </button>
                    </Link>
                    <p className="mt-3 text-sm text-gray-400">Quick approval, no hidden fees</p>
                </div>

                {/* Right side with image */}
                <div className="w-full md:w-1/2 p-4 flex justify-center md:justify-end h-full md:pl-2">
                    <Image
                        src="/images/Hero.avif" // Replace with your image path
                        alt="Business Growth"
                        width={800}
                        height={800}
                        className="rounded-lg shadow-lg object-cover w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
