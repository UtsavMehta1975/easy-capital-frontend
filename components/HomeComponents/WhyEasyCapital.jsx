import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCalendarAlt, faCheckCircle, faClock, faStore, faCalendarDay } from '@fortawesome/free-solid-svg-icons';

export default function WhyEasyCapital() {
  const features = [
    {
      icon: faClock,
      text: 'Apply in few minutes',
    },
    {
      icon: faBolt,
      text: 'Fast Approval',
    },
    {
      icon: faCalendarAlt,
      text: 'Tenure up to 60 months',
    },
    {
      icon: faCalendarDay,
      text: 'Get money in 2-4 working days',
    },
    {
      icon: faStore,
      text: 'No Branch Visit',
    },
    {
      icon: faCheckCircle,
      text: 'An ISO certified company',
    },
  ];

  return (
    <div className="bg-blue-800 my-3">
      <div className="container py-20 md:py-10 mx-auto max-w-[85%]">
        <div className="flex items-center justify-around gap-10 flex-col md:flex-row md:space-y-8">
          <h3 className="leading-20 text-white text-3xl font-semibold md:text-4xl md:leading-6">
            Why EasyCapital?
          </h3>
          <div className="grid gap-x-8 gap-y-14 grid-cols-2 md:gap-x-6 md:gap-y-8 lg:grid-cols-3">
            {features.map((item, index) => (
              <div key={index} className="flex items-center space-x-5 md:space-x-3">
                <div className="min-w-16 md:min-w-12 flex items-center justify-center h-16 bg-white rounded-lg md:h-12">
                  <FontAwesomeIcon icon={item.icon} className="text-black h-6" />
                </div>
                <p className="text-sm text-white font-normal leading-8 md:text-lg md:leading-5">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
