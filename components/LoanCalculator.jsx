"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const formatNumber = (number) => number.toLocaleString('en-IN');

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1621212);
  const [tenure, setTenure] = useState(24);
  const [interestRate, setInterestRate] = useState(15.5);
  
  const [formattedLoanAmount, setFormattedLoanAmount] = useState(formatNumber(1621212));
  const [formattedTenure, setFormattedTenure] = useState(24);
  const [formattedInterestRate, setFormattedInterestRate] = useState(15.5);

  useEffect(() => {
    setFormattedLoanAmount(formatNumber(loanAmount));
  }, [loanAmount]);

  useEffect(() => {
    setFormattedTenure(tenure);
  }, [tenure]);

  useEffect(() => {
    setFormattedInterestRate(interestRate);
  }, [interestRate]);

  useEffect(() => {
    // Calculate EMI and Total Payable whenever loanAmount, tenure or interestRate changes
    const emi = calculateEMI(loanAmount, tenure, interestRate);
    const totalPayable = emi * tenure;

    setFormattedLoanAmount(formatNumber(loanAmount));
    setFormattedTenure(tenure);
    setFormattedInterestRate(interestRate);
    setEmi(emi);
    setTotalPayable(totalPayable);
  }, [loanAmount, tenure, interestRate]);

  const calculateEMI = (principal, tenure, annualRate) => {
    const monthlyRate = annualRate / 12 / 100;
    const numberOfMonths = tenure;
    return (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) / (Math.pow(1 + monthlyRate, numberOfMonths) - 1);
  };

  const [emi, setEmi] = useState(calculateEMI(loanAmount, tenure, interestRate));
  const [totalPayable, setTotalPayable] = useState(emi * tenure);

  const handleLoanAmountChange = (e) => setLoanAmount(Number(e.target.value));
  const handleTenureChange = (e) => setTenure(Number(e.target.value));
  const handleInterestRateChange = (e) => setInterestRate(Number(e.target.value));

  return (
    <div className="container mx-auto py-20 md:py-10 px-4">
      <div className="bg-white shadow-xl rounded-3xl p-8 md:p-6">
        <div className="grid gap-12 md:gap-8 md:grid-cols-1 md:space-y-8 lg:grid-cols-2">
          <div>
            <span className="block text-2xl font-semibold mb-4 md:text-lg">How much are you looking for?</span>
            <p className="text-gray-600 mb-8 md:text-sm">
              Select your loan amount above and elevate your business.
            </p>
            <div className="space-y-8">
              {[
                { label: 'Loan Amount', value: formattedLoanAmount, min: 1000000, max: 10000000, step: 10000 },
                { label: 'Tenure', value: formattedTenure, min: 12, max: 60, step: 1 },
                { label: 'Interest Rate', value: formattedInterestRate, min: 10, max: 33, step: 0.5 }
              ].map(({ label, value, min, max, step }) => (
                <div key={label}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-lg font-semibold">{label}</p>
                    <div className="bg-gray-200 flex items-center justify-center w-32 h-10 rounded-full">
                      <p className="text-lg font-bold">{label === 'Interest Rate' ? `${value}%` : `₹${value}`}</p>
                    </div>
                  </div>
                  <input
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={label === 'Loan Amount' ? loanAmount : label === 'Tenure' ? tenure : interestRate}
                    onChange={label === 'Loan Amount' ? handleLoanAmountChange : label === 'Tenure' ? handleTenureChange : handleInterestRateChange}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-between text-center space-y-8 md:space-y-6">
            <p className="text-lg font-semibold">Equated Monthly Installment</p>
            <p className="text-3xl font-bold text-indigo-600">₹{formatNumber(Math.round(emi))}</p>
            <div className="p-6 border border-gray-300 rounded-xl shadow-md">
              <p className="text-lg font-semibold">Total Payable</p>
              <p className="text-2xl font-bold mt-2">₹{formatNumber(Math.round(totalPayable))}</p>
            </div>
            <p className="text-sm text-gray-600">
              *Starting at 1% monthly reducing interest rate. Apply now to know your exact EMI & interest rate.
            </p>
            <Link href={'/apply'}>
                <button className="bg-indigo-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-indigo-700 transition duration-200">
                  Apply Now
                </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
