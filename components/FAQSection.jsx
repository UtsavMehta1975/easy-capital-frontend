"use client";
import { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      question: "Who can apply for a business loan?",
      answer:
        "The person who owns the business can apply for business loans. Just make sure you have a solid business plan and financial records to prove your ability to repay the loan.",
    },
    {
      question: "How many documents are required for applying for loans?",
      answer:
        "For applying for a business loan, you need several documents like financial statements, tax returns, business plan, and personal identification.",
    },
    {
      question: "Is there any risk in applying for business loans?",
      answer:
        "Risks include credit impact, collateral requirements, and interest rates. To mitigate risk, ensure you have a solid business plan for repayment of the loan.",
    },
    {
      question: "Why should I apply for loans from EasyCapital?",
      answer:
        "EasyCapital provides facilities like quick approvals, fast processing, 24/7 customer support, and is 100% trusted.",
    },
    {
      question: "How can I check my eligibility for applying for a loan?",
      answer:
        "To check eligibility, go through the lender's website and check the eligibility criteria, calculate your debt-to-income ratio, check your credit score, and connect with the lender.",
    },
    {
      question: "Is prepayment allowed for loans?",
      answer: "Yes, prepayment is allowed in most loans.",
    },
    {
      question: "What points need to be kept in mind for applying for a safe loan?",
      answer: "Ensure you have a solid repayment plan, understand the terms and conditions, and avoid borrowing more than you can repay.",
    },
    {
      question: "What would be the repayment process?",
      answer: "The repayment process involves paying the loan amount in installments, including interest, as per the loan agreement with the lender.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-black lg:text-3xl">FAQs</h1>
        <hr className="my-6 border-gray-200" />

        {faqData.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex items-center focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`flex-shrink-0 w-6 h-6 text-blue-500 transition-transform ${
                  activeIndex === index ? "rotate-90" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={activeIndex === index ? "M20 12H4" : "M12 4v16m8-8H4"}
                />
              </svg>
              <h1 className="mx-4 text-xl text-black">{item.question}</h1>
            </button>

            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                activeIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="flex mt-4 ml-10">
                <span className="border-l-2 border-blue-500"></span>
                <p className="max-w-3xl px-4 text-black">{item.answer}</p>
              </div>
            </div>

            <hr className="my-4 border-gray-200" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
