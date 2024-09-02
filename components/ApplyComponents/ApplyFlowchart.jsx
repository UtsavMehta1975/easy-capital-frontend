"use client";
import React from "react";
import { FaPhone, FaUserCheck, FaHandshake, FaMoneyCheck } from "react-icons/fa";

const ApplyFlowchart = () => {
  return (
    <section className="min-w-[300px] w-[40%] max-h-[600px] flex flex-col items-center justify-center p-6 bg-gray-50 border rounded-md shadow-lg">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Process</h2>
      <p className="text-center text-sm mb-6">
        In order to receive the loan amount, you will need to successfully complete these steps.
      </p>

      <div className="space-y-4">
        <div className="flowchart-card flex items-center space-x-4 p-4 bg-white rounded-lg border">
          <FaUserCheck className="text-blue-500" />
          <span className="text-md font-semibold">Basic Details</span>
        </div>
        <div className="flowchart-card flex items-center space-x-4 p-4 bg-white rounded-lg border">
          <FaPhone className="text-green-500" />
          <span className="text-md font-semibold">OTP Verification</span>
        </div>
        <div className="flowchart-card flex items-center space-x-4 p-4 bg-white rounded-lg border">
          <FaUserCheck className="text-blue-500" />
          <span className="text-md font-semibold">Account Info</span>
        </div>
        <div className="flowchart-card flex items-center space-x-4 p-4 bg-white rounded-lg border">
          <FaHandshake className="text-purple-500" />
          <span className="text-md font-semibold">We Match the Right Lender</span>
        </div>
        <div className="flowchart-card flex items-center space-x-4 p-4 bg-white rounded-lg border">
          <FaMoneyCheck className="text-red-500" />
          <span className="text-md font-semibold">Money Credit in 2-3 Days</span>
        </div>
      </div>
    </section>
  );
};

export default ApplyFlowchart;
