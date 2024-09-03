import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BusinessHero = ({ title, description, imageUrl }) => {
  return (
    <div className="container px-6 pt-5 mx-auto">
      <div className="items-center flex flex-col-reverse md:flex-row gap-4">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg text-center md:text-left">
            <h1 className="text-3xl font-semibold text-black lg:text-4xl">
              {title}
            </h1>

            <p className="mt-3 text-black">
              {description}
            </p>

            <Link href={'/apply'}>
              <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Apply Now
              </button>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <Image
            className="h-full lg:max-w-3xl"
            src={imageUrl}
            alt="Catalogue"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessHero;
