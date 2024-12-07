import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
    return (
        <section className="flex flex-col justify-center items-center bg-gray-100 pt-0 md:py-16"> {/* pt-0 for mobile, py-16 for desktop */}
            <div className="container mx-auto px-0 md:px-4"> {/* px-0 for mobile, px-4 for desktop */}
                {/* Left side with text */}
                <div className="w-full text-center p-0 md:p-4 flex flex-col items-center md:text-left md:flex-row md:items-start md:justify-between">
                    <div className="flex flex-col items-center md:items-center md:w-1/2 md:self-center">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
                            Empowering Your Business<br />
                            with Easy Capital Solutions
                        </h1>
                        <p className="text-gray-500 mb-2 md:mb-4 text-base md:text-lg">
                            Get access to the financial support<br className="block md:hidden" />
                            your business needs to grow.<br />
                            Whether you&apos;re an MSME or an aspiring entrepreneur, we&apos;re here to help.
                        </p>

                        <Link href="/apply">
                            <button className="px-5 py-2 mb-4 md:mb-4 text-sm font-medium leading-5 text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none">
                                Apply for Loan Today
                            </button>
                        </Link>
                        <p className="mt-2 text-sm text-gray-400">Quick approval, no hidden fees</p>
                    </div>

                    {/* Right side with image */}
                    <div className="hidden md:flex justify-center md:justify-end mt-8 md:mt-0 md:w-1/2">
                        <Image
                            src="/images/Hero.avif" // Replace with your image path
                            alt="Business Growth"
                            width={800}
                            height={800}
                            className="rounded-lg shadow-lg object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
