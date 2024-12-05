import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoice, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Array of offerings to display
const offerings = [
  {
    imgSrc: "/images/icons/term-loan.svg",
    title: "Business Loan",
    description: "Unlock your business potential with our tailored business loans - grow, thrive, succeed.",
    link: "/business-loan/unsecured-business-loan"
  },
  {
    icon: faFileInvoice,
    title: "GST Services",
    description: "Streamline your tax processes with our expert GST services - Simplify, comply, and succeed.",
    link: "/gst-services/gst-registration"
  },
  {
    icon: faUserCheck,
    title: "Registration Services",
    description: "Ensure smooth business operations with our comprehensive registration services - Fast, reliable, and efficient.",
    link: "/registration-services/udhyam-certificate"
  }
];

// Component to display individual offering card
const OfferingCard = ({ imgSrc, icon, title, description, link }) => {
  return (
    <div className="group cursor-pointer w-full max-w-[320px] rounded-lg p-6 flex flex-col items-center text-center gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white transform hover:scale-105">
      <div className="h-16 w-16 bg-blue-600 rounded-full flex justify-center items-center">
        {imgSrc ? (
          <Image className="max-w-[3rem] invert-[100%] duration-[500ms]" src={imgSrc} alt={title} width={80} height={80} />
        ) : (
          <FontAwesomeIcon icon={icon} className="text-white text-4xl h-8" />
        )}
      </div>
      <h2 className="text-lg font-semibold text-gray-800 transition duration-200 group-hover:text-blue-600">{title}</h2>
      <p className="text-sm font-light text-gray-600 transition duration-200 group-hover:text-gray-800">{description}</p>
      <Link href={link}>
        <button className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200">
          Full Detail
        </button>
      </Link>
    </div>
  );
};

// Main OfferingsSection component
const OfferingsSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-4">
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-bold text-5xl text-gray-800 mb-2">
          Our Offerings
          <span className="block h-1 w-16 bg-blue-600 mt-2 mx-auto rounded-md"></span>
        </h2>
        <p className="font-light lg:w-2/3 text-md text-center text-gray-700">
          Choose from a wide range of financial solutions tailored to suit your needs. We understand that every individual has unique requirements, which is why we have curated an impressive selection of products designed to cater to various purposes and budgets.
        </p>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-6 mt-6">
        {offerings.map((offering, index) => (
          <OfferingCard
            key={index}
            imgSrc={offering.imgSrc}
            icon={offering.icon}
            title={offering.title}
            description={offering.description}
            link={offering.link}
          />
        ))}
      </div>
    </div>
  );
};

// Add media queries for responsive design
const globalStyles = `
@media (max-width: 600px) {
  .offerings-section {
    padding: 10px;
    margin: 0 auto;
  }

  .offerings-section img {
    width: 100%;
    height: auto;
  }

  .offerings-section .text-content {
    font-size: 14px;
  }

  .partners, .testimonials, .faq-section {
    padding: 10px;
    margin: 0 auto;
  }
}
`;

// Export component
export default OfferingsSection;
