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
    <section id='partners' className="w-full py-2 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-blue-600 mb-4">Our Partners</h2>
          <p className="text-lg text-gray-600">We collaborate with RBI Approved banks and NBFCs to offer you great products at the best rates.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex justify-center items-center"
            >
              <Image
                className="object-contain"
                src={partner.src}
                alt={partner.alt}
                width={200}
                height={120}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
