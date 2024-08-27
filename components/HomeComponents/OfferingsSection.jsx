import Image from 'next/image';
import React from 'react';

const offerings = [
  {
    href: "/products/business-loan",
    imgSrc: "/images/icons/term-loan.svg",
    title: "Business Loan",
    description: "Unlock your business potential with our tailored business loans - grow, thrive, succeed.",
  },
  {
    href: "/products/line-of-credit",
    imgSrc: "/images/icons/credit-line.svg",
    title: "Line Of Credit",
    description: "Secure your financial freedom with our flexible Credit Line - Empowering your dreams, today!",
  },
  {
    href: "/products/msme-loan",
    imgSrc: "/images/icons/invoice-loan.svg",
    title: "MSME Loan",
    description: "Supercharge and accelerate your MSME's growth with our streamlined financing solution!",
  },
  {
    href: "/products/secured-business-loan",
    imgSrc: "/images/icons/business-loan.svg",
    title: "Secured Business Loan",
    description: "Secure your business's future with our loan - Stability, growth, and peace of mind, guaranteed!",
  },
  {
    href: "/products/machinery-loan",
    imgSrc: "/images/icons/machinery-loan.svg",
    title: "Machinery Loan",
    description: "Fuel your business engine with our machinery loan - Transforming dreams into reality!",
  },
  {
    href: "/products/business-loan-for-women",
    imgSrc: "/images/icons/women-loan.svg",
    title: "Business Loan for Women",
    description: "Empowering women, one loan at a time - Achieve your dreams with our supportive financial solutions!",
  },
  {
    href: "/products/business-ecommerce-loan",
    imgSrc: "/images/icons/ecommerce-loan.svg",
    title: "Business Ecommerce Loan",
    description: "Grow your online empire with our ECommerce loan - Unleash your potential, one sale at a time!",
  },
  {
    href: "/products/loan-against-property",
    imgSrc: "/images/icons/unsecure-loan.svg",
    title: "Loan Against Property",
    description: "Unlock growth potential with our Property Loan for business - Your gateway to financial freedom!",
  }
];

const OfferingCard = ({ href, imgSrc, title, description }) => {
  return (
    <div>
      <a href={href} className="group cursor-pointer w-full rounded-md py-6 flex flex-col items-center text-center items-between h-full gap-6">
        <div className="h-[5rem] w-[5rem] bg-blue-600 rounded-full flex justify-center items-center">
          <Image className="max-w-[3rem] invert-[100%] duration-[500ms]" src={imgSrc} alt={title} width={80} height={80} />
        </div>
        <h2 className="text-[1.2rem] font-semibold">{title}</h2>
        <p className="text-[1rem] font-light">{description}</p>
      </a>
    </div>
  );
};

const OfferingsSection = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-6">
        <h2 className="w-full font-bold text-center text-[2.5rem]">Our Offerings</h2>
        <p className="font-light lg:w-2/3 text-[1rem] text-center">
          Choose from a wide range of financial solutions tailored to suit your needs. We understand that every individual has unique requirements, which is why we have curated an impressive selection of products designed to cater to various purposes and budgets.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {offerings.map((offering, index) => (
            <OfferingCard
              key={index}
              href={offering.href}
              imgSrc={offering.imgSrc}
              title={offering.title}
              description={offering.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferingsSection;
