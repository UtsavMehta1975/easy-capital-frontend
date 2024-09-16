// pages/business-loan/[loanType].js
import BusinessHero from '@/components/BusinessHero'
import LoanCalculator from '@/components/LoanCalculator'
import LoanKeyComponents from '@/components/LoanKeyComponents'
import { contentMap } from '@/data/loanContent';
import React from 'react'


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
