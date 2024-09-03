import Image from 'next/image';
import React from 'react';

const Partners = () => {
  const partners = [
    { src: '/images/logos/piramal-finance.png', alt: 'Piramal Finance' },
    { src: '/images/logos/iifl-finance.png', alt: 'IIFL Finance' },
    { src: '/images/logos/chola-finance.png', alt: 'Chola Finance' },
    { src: '/images/logos/lending-kart.png', alt: 'Lending Kart' },
    { src: '/images/logos/bajaj-finserv.png', alt: 'Bajaj Finserv' },
  ];

  return (
    <section id='patners' className="w-full pt-10 pb-20 bg-gray-100">
      <div className="max-w-85% mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-5xl font-bold text-center text-gray-800 border-b-2 border-black pb-4">Our Partners</h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-5">
          {partners.map((partner, index) => (
            <div key={index} className="w-3/4 sm:w-1/3 md:w-1/3 lg:w-1/6 flex items-center justify-center">
              <Image className="w-full h-auto object-contain" src={partner.src} alt={partner.alt} width={150} height={100} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
