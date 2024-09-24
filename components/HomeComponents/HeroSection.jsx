import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
    return (
        <section className="container px-6 py-7 mx-auto text-center">
            <div className="max-w-lg mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 lg:text-4xl">
                    Empowering Your Business with Easy Capital Solutions
                </h1>
                <p className="mt-6 text-gray-500">
                    Get access to the financial support your business needs to grow. Whether you&apos;re an MSME or an aspiring entrepreneur, we&apos;re here to help.
                </p>

                <Link href={"/apply"}>
                    <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none">
                        Apply for Loan Today
                    </button>
                </Link>
                <p className="mt-3 text-sm text-gray-400">Quick approval, no hidden fees</p>
            </div>

            <div className="flex justify-center mt-10">
                <Image
                    className="object-cover w-full h-96 rounded-xl lg:w-4/5"
                    src="/images/Hero.avif"
                    alt="Business Growth"
                    width={1600}
                    height={400}
                />
            </div>
        </section>
    );
};

export default HeroSection;
