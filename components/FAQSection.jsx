"use client";
import { faqData } from "@/data/FAQdata";
import { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="container px-6 py-10 mx-auto max-w-3xl">
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
                className={`flex-shrink-0 w-6 h-6 text-blue-500 transition-transform ${activeIndex === index ? "rotate-90" : ""}`}
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
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === index ? "max-h-40 overflow-auto" : "max-h-0"}`}
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
    </div>
  );
};

export default FAQSection;
