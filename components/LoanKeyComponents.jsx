import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const LoanKeyComponents = ({ components, loanType }) => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Key Components of Our {loanType}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {components.map((component, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105"
          >
            <FontAwesomeIcon
              icon={component.icon}
              className="text-black text-5xl mb-4 h-16"
            />
            <h3 className="text-xl font-semibold text-gray-700">
              {component.title}
            </h3>
            <p className="mt-2 text-gray-600">
              {component.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

LoanKeyComponents.propTypes = {
  components: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired, // Use `PropTypes.object` for FontAwesomeIcon
    })
  ).isRequired,
};

export default LoanKeyComponents;
