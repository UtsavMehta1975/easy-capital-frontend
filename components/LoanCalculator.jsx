"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const formatNumber = (number) => number.toLocaleString('en-IN');

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1621212);
  const [tenure, setTenure] = useState(24); // Tenure in months
  const [interestRate, setInterestRate] = useState(15.5);

  const [emi, setEmi] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);

  useEffect(() => {
    const emiValue = calculateEMI(loanAmount, tenure, interestRate);
    setEmi(emiValue);
    setTotalPayable(emiValue * tenure);
  }, [loanAmount, tenure, interestRate]);

  const calculateEMI = (principal, tenure, annualRate) => {
    const monthlyRate = annualRate / 12 / 100;
    const numberOfMonths = tenure;
    return (
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
      (Math.pow(1 + monthlyRate, numberOfMonths) - 1)
    );
  };

  const handleLoanAmountChange = (e) => setLoanAmount(Number(e.target.value));
  const handleTenureChange = (e) => setTenure(Number(e.target.value)); // Tenure in months
  const handleInterestRateChange = (e) => setInterestRate(Number(e.target.value));

  const updateSliderStyle = (e, min, max) => {
    const val = ((e.target.value - min) / (max - min)) * 100;
    e.target.style.background = `linear-gradient(to right, #ffffff ${val}%, #90cdf4 ${val}%)`; // White for filled, darker blue for unfilled
  };

  return (
    <div className="container mx-auto py-20 px-4">
      <div className="bg-gradient-to-r from-blue-500 to-blue-300 shadow-xl rounded-3xl p-10">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold text-white text-center mb-6 md:text-left">
              Calculate Your Loan
            </h2>
            <p className="text-gray-100 text-center mb-8 md:text-left">
              Adjust the amount, tenure, and interest rate to calculate your monthly payments and
              total amount payable.
            </p>
            <div className="space-y-10">
              {[
                {
                  label: 'Loan Amount',
                  value: loanAmount,
                  min: 1000000,
                  max: 10000000,
                  step: 10000,
                  unit: '₹',
                  onChange: handleLoanAmountChange,
                },
                {
                  label: 'Tenure (Months)',
                  value: tenure,
                  min: 12,
                  max: 60,
                  step: 1,
                  unit: 'months',
                  onChange: handleTenureChange,
                },
                {
                  label: 'Interest Rate',
                  value: interestRate,
                  min: 10,
                  max: 33,
                  step: 0.5,
                  unit: '%',
                  onChange: handleInterestRateChange,
                },
              ].map(({ label, value, min, max, step, unit, onChange }) => (
                <div key={label}>
                  <div className="flex justify-between mb-2 text-white">
                    <p className="text-lg font-semibold">{label}</p>
                    <div className="bg-white bg-opacity-20 rounded-full px-4 py-2">
                      <p className="text-lg font-bold">
                        {unit === '₹'
                          ? `₹${formatNumber(value)}`
                          : `${value} ${unit}`}
                      </p>
                    </div>
                  </div>
                  <input
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #ffffff ${((value - min) / (max - min)) * 100}%, #90cdf4 ${((value - min) / (max - min)) * 100}%)`,
                    }}
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={(e) => {
                      onChange(e);
                      updateSliderStyle(e, min, max);
                    }}
                  />
                  <style jsx>{`
                    input[type='range']::-webkit-slider-thumb {
                      -webkit-appearance: none;
                      appearance: none;
                      width: 24px;
                      height: 24px;
                      border-radius: 50%; /* Circle shape */
                      background: #3b82f6; /* Blue color */
                      cursor: pointer;
                      transition: background 0.3s;
                    }
                    input[type='range']::-moz-range-thumb {
                      width: 24px;
                      height: 24px;
                      border-radius: 50%; /* Circle shape */
                      background: #3b82f6; /* Blue color */
                      cursor: pointer;
                      transition: background 0.3s;
                    }
                  `}</style>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-around bg-white rounded-3xl p-10 text-center shadow-xl">
            <div>
              <p className="text-lg font-semibold text-gray-700">Estimated EMI</p>
              <p className="text-4xl font-bold text-blue-600 my-4">
                ₹{formatNumber(Math.round(emi))}
              </p>
            </div>
            <div className="p-6 border border-gray-300 rounded-xl shadow-md w-full">
              <p className="text-lg font-semibold text-gray-700">Total Payable</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                ₹{formatNumber(Math.round(totalPayable))}
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              *Starting at 1% monthly reducing interest rate. Apply now to know your exact EMI &
              interest rate.
            </p>
            <Link href="/apply">
              <button className="mt-6 bg-blue-600 text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition transform hover:scale-105">
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
