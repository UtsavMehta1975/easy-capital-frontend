"use client";
import React, { useState } from "react";
import { FaEnvelope, FaIdCard, FaBusinessTime, FaUserCheck, FaFileSignature, FaMoneyBillWave } from "react-icons/fa";

const LoanForm = () => {
  // State for all form fields
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    gender: "",
    email: "",
    loanAmount: 50000,
  });

  // State for errors
  const [errors, setErrors] = useState({});

  // Validate a single field
  const validateField = (id, value) => {
    let error;
    switch (id) {
      case "name":
        error = value ? "" : "Name is required.";
        break;
      case "mobile":
        // Check for exactly 10 digits
        error = value.length === 10 && /^\d+$/.test(value)
          ? ""
          : "Mobile number must be exactly 10 digits.";
        break;
      case "gender":
        error = value ? "" : "Gender is required.";
        break;
      case "email":
        error = value ? "" : "Email is required.";
        break;
      default:
        break;
    }
    setErrors(prevErrors => ({ ...prevErrors, [id]: error }));
  };

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [id]: value }));
    validateField(id, value); // Validate field on change
  };

  // Validate all fields before submission
  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      validateField(field, formData[field]);
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      // Send formData to backend
    }
  };

  return (
    <div className="max-w-[90vw] mx-auto flex flex-wrap justify-center gap-6 my-10">
      {/* Form Section */}
      <section className="min-w-[300px] w-[45%] p-6 bg-white border rounded-md shadow-lg">
        <h2 className="text-lg font-semibold text-gray-700 capitalize">
          Let’s start by filling in some basic details:
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6 mt-4">
            {/* Name Input */}
            <div>
              <label className="block text-sm text-gray-500" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className={`block w-full px-5 py-2.5 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring ${
                  errors.name
                    ? "border-red-400 focus:border-red-400 focus:ring-red-300 bg-white"
                    : "border-gray-200 focus:border-blue-400 focus:ring-blue-300 bg-[rgb(237,242,247)]"
                }`}
              />
              {errors.name && (
                <p className="mt-2 text-xs text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Mobile Input */}
            <div>
              <label className="block text-sm text-gray-500" htmlFor="mobile">
                Mobile
              </label>
              <input
                id="mobile"
                type="tel"
                placeholder="9876543210"
                value={formData.mobile}
                onChange={handleChange}
                required
                className={`block w-full px-5 py-2.5 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring ${
                  errors.mobile
                    ? "border-red-400 focus:border-red-400 focus:ring-red-300 bg-white"
                    : "border-gray-200 focus:border-blue-400 focus:ring-blue-300 bg-[rgb(237,242,247)]"
                }`}
              />
              {errors.mobile && (
                <p className="mt-2 text-xs text-red-400">{errors.mobile}</p>
              )}
            </div>

            {/* Gender Input */}
            <div>
              <label className="block text-sm text-gray-500" htmlFor="gender">
                Gender
              </label>
              <select
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className={`block w-full px-5 py-2.5 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring ${
                  errors.gender
                    ? "border-red-400 focus:border-red-400 focus:ring-red-300 bg-white"
                    : "border-gray-200 focus:border-blue-400 focus:ring-blue-300 bg-[rgb(237,242,247)]"
                }`}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="mt-2 text-xs text-red-400">{errors.gender}</p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm text-gray-500" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className={`block w-full px-5 py-2.5 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring ${
                  errors.email
                    ? "border-red-400 focus:border-red-400 focus:ring-red-300 bg-white"
                    : "border-gray-200 focus:border-blue-400 focus:ring-blue-300 bg-[rgb(237,242,247)]"
                }`}
              />
              {errors.email && (
                <p className="mt-2 text-xs text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Loan Amount Input */}
            <div>
              <label
                className="block text-sm text-gray-500"
                htmlFor="loanAmount"
              >
                Loan Amount
              </label>
              <input
                id="loanAmount"
                type="range"
                min="50000"
                max="1000000"
                value={formData.loanAmount}
                onChange={handleChange}
                className="w-full h-2 mt-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
              <span className="block mt-2 text-gray-700">
                ₹{Number(formData.loanAmount).toLocaleString()}
              </span>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Apply
            </button>
          </div>
        </form>
      </section>

      {/* Flowchart Section */}
      <section className="min-w-[300px] w-[40%] flex flex-col items-center justify-center p-6 bg-gray-50 border rounded-md shadow-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Steps Ahead</h2>
        <p className="text-center text-sm mb-6">
          In order to receive the loan amount, you will need to successfully complete these steps.
        </p>

        <div className="space-y-4">
          <div className="flowchart-card flex items-center space-x-4 p-4 bg-white rounded-lg border">
            <FaUserCheck className="text-blue-500" />
            <span className="text-md font-semibold">Basic Details</span>
          </div>
          <div className="flowchart-card flex items-center space-x-4 p-4 bg-white rounded-lg border">
            <FaEnvelope className="text-green-500" />
            <span className="text-md font-semibold">Email Verification</span>
          </div>
          <div className="flowchart-card flex items-center space-x-4 p-4 bg-white rounded-lg border">
            <FaIdCard className="text-purple-500" />
            <span className="text-md font-semibold">PAN Verification</span>
          </div>
          <div className="flowchart-card flex items-center space-x-4 p-4 bg-white rounded-lg border">
            <FaFileSignature className="text-yellow-500" />
            <span className="text-md font-semibold">Business Details</span>
          </div>
          <div className="flowchart-card flex items-center space-x-4 p-4 bg-white rounded-lg border">
            <FaMoneyBillWave className="text-red-500" />
            <span className="text-md font-semibold">Disbursal</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoanForm;
