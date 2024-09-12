import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoice, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

const OfferingCard = ({ imgSrc, icon, title, description, link }) => {
  return (
    <Link href={link}>
      <div className="group cursor-pointer w-full max-w-[320px] rounded-md py-6 flex flex-col items-center text-center items-between h-full gap-6">
        <div className="h-[5rem] w-[5rem] bg-blue-600 rounded-full flex justify-center items-center">
          {imgSrc ? (
            <Image className="max-w-[3rem] invert-[100%] duration-[500ms]" src={imgSrc} alt={title} width={80} height={80} />
          ) : (
            <FontAwesomeIcon icon={icon} className="text-white text-4xl h-10 w-10" />
          )}
        </div>
        <h2 className="text-[1.2rem] font-semibold">{title}</h2>
        <p className="text-[1rem] font-light">{description}</p>
      </div>
    </Link>
  );
};

const OfferingsSection = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-2">
        <h2 className="w-full font-bold text-center text-[2.5rem]">Our Offerings</h2>
        <p className="font-light lg:w-2/3 text-[1rem] text-center">
          Choose from a wide range of financial solutions tailored to suit your needs. We understand that every individual has unique requirements, which is why we have curated an impressive selection of products designed to cater to various purposes and budgets.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-around flex-col md:flex-row gap-6 mt-14">
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
    </div>
  );
};

export default OfferingsSection;
