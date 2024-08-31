// pages/business-loan/[loanType].js
import BusinessHero from '@/components/BusinessHero'
import LoanCalculator from '@/components/LoanCalculator'
import LoanKeyComponents from '@/components/LoanKeyComponents'
import { faLock, faClock, faCalendarAlt, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

// Define your content mapping
const contentMap = {
  'unsecured-business-loan': {
    title: "Fast & Flexible Unsecured Business Loans",
    description: "Empower your business growth with our unsecured loans. No collateral required—just quick access to funds, flexible repayment options, and competitive rates to fuel your ambitions.",
    imageUrl: "/images/products/unsecure-loan.svg",
    loanType: "Unsecured Business Loan",
    keyComponents: [
      {
        title: "No Collateral Required",
        description: "Secure the funds you need without risking your assets. Our loans are completely unsecured.",
        icon: faLock,
      },
      {
        title: "Quick Approval Process",
        description: "Get your loan approved quickly with our streamlined process, so you can focus on your business.",
        icon: faClock,
      },
      {
        title: "Flexible Repayment Terms",
        description: "Choose from a range of repayment options that suit your business cash flow and financial needs.",
        icon: faCalendarAlt,
      },
      {
        title: "Competitive Interest Rates",
        description: "Enjoy competitive rates that help keep your business expenses low and profits high.",
        icon: faDollarSign,
      },
    ],
  },
  'line-of-credit': {
    title: "Flexible Line Of Credit",
    description: "Manage your cash flow with ease using our flexible line of credit options.",
    imageUrl: "/images/products/credit-line.svg",
    loanType: "Line Of Credit",
    keyComponents: [
      {
        title: "Flexible Access",
        description: "Access funds as needed with our flexible credit line.",
        icon: faDollarSign,
      },
      {
        title: "Manage Cash Flow",
        description: "Smooth out your cash flow with a revolving line of credit.",
        icon: faCalendarAlt,
      },
      {
        title: "Quick Drawdown",
        description: "Draw funds quickly whenever necessary to meet short-term needs.",
        icon: faClock,
      },
      {
        title: "Interest Only on Withdrawn Amount",
        description: "Pay interest only on the amount you withdraw, not the total credit limit.",
        icon: faLock,
      },
    ],
  },
  'msme-loan': {
    title: "MSME Loan",
    description: "Support your micro, small, or medium-sized business with our specialized MSME loans.",
    imageUrl: "/images/products/credit.svg",
    loanType: "MSME Loan",
    keyComponents: [
      {
        title: "Tailored for MSMEs",
        description: "Designed specifically for micro, small, and medium enterprises.",
        icon: faLock,
      },
      {
        title: "Flexible Repayment Options",
        description: "Choose a repayment schedule that fits your business cash flow.",
        icon: faCalendarAlt,
      },
      {
        title: "Affordable Interest Rates",
        description: "Benefit from competitive rates that are tailored for MSMEs.",
        icon: faDollarSign,
      },
      {
        title: "Quick Processing",
        description: "Fast approval and disbursal to meet urgent business needs.",
        icon: faClock,
      },
    ],
  },
  'secured-business-loan': {
    title: "Secured Business Loan",
    description: "Access larger funds with our secured business loans, backed by collateral.",
    imageUrl: "/images/products/secured-loan.svg",
    loanType: "Secured Business Loan",
    keyComponents: [
      {
        title: "Backed by Collateral",
        description: "Secure a loan with valuable assets as collateral.",
        icon: faLock,
      },
      {
        title: "Higher Loan Amounts",
        description: "Access larger amounts compared to unsecured loans.",
        icon: faDollarSign,
      },
      {
        title: "Lower Interest Rates",
        description: "Benefit from lower rates due to collateral backing.",
        icon: faCalendarAlt,
      },
      {
        title: "Flexible Repayment Terms",
        description: "Choose a repayment schedule that fits your business needs.",
        icon: faClock,
      },
    ],
  },
  'machinery-loan': {
    title: "Machinery Loan",
    description: "Invest in new machinery and equipment with our tailored machinery loans.",
    imageUrl: "/images/products/machinery-loan.svg",
    loanType: "Machinery Loan",
    keyComponents: [
      {
        title: "Purchase New Machinery",
        description: "Get funding specifically for buying new machinery and equipment.",
        icon: faDollarSign,
      },
      {
        title: "Easy Repayment Plans",
        description: "Repay the loan with flexible terms tailored to your financial situation.",
        icon: faCalendarAlt,
      },
      {
        title: "Quick Approval",
        description: "Get your loan approved quickly to avoid delays in equipment procurement.",
        icon: faClock,
      },
      {
        title: "Competitive Interest Rates",
        description: "Enjoy low rates designed for machinery purchases.",
        icon: faLock,
      },
    ],
  },
  'business-loan-for-women': {
    title: "Business Loan for Women",
    description: "Empowering women entrepreneurs with specialized loan options.",
    imageUrl: "/images/products/women-loan.svg",
    loanType: "Business Loan for Women",
    keyComponents: [
      {
        title: "Specialized for Women Entrepreneurs",
        description: "Loans designed to support women-led businesses.",
        icon: faLock,
      },
      {
        title: "Flexible Terms",
        description: "Enjoy flexible repayment terms that suit your business needs.",
        icon: faCalendarAlt,
      },
      {
        title: "Competitive Rates",
        description: "Benefit from competitive rates tailored for women business owners.",
        icon: faDollarSign,
      },
      {
        title: "Quick Processing",
        description: "Fast approval process to help you get started without delays.",
        icon: faClock,
      },
    ],
  },
  'business-e-commerce-loan': {
    title: "Business E-Commerce Loan",
    description: "Fuel your online business growth with our e-commerce loan solutions.",
    imageUrl: "/images/products/ecommerce-loan.svg",
    loanType: "Business E-Commerce Loan",
    keyComponents: [
      {
        title: "Designed for E-Commerce Businesses",
        description: "Tailored financing solutions for online businesses.",
        icon: faLock,
      },
      {
        title: "Grow Your Online Presence",
        description: "Use the loan to invest in digital marketing, inventory, and technology.",
        icon: faDollarSign,
      },
      {
        title: "Flexible Repayment Options",
        description: "Choose from various repayment plans that fit your business model.",
        icon: faCalendarAlt,
      },
      {
        title: "Quick Approval Process",
        description: "Fast processing to help you seize opportunities in the e-commerce space.",
        icon: faClock,
      },
    ],
  },
}


const Page = ({ params }) => {
  const { loanType } = params;

  // Fetch the content based on the loanType
  const content = contentMap[loanType];

  if (!content) {
    return <div>Loan type not found</div>;
  }

  return (
    <div>
      <BusinessHero
        title={content.title}
        description={content.description}
        imageUrl={content.imageUrl}
      />
      <LoanKeyComponents components={content.keyComponents} loanType={content.loanType} />
      <LoanCalculator />
    </div>
  );
};

export default Page;
