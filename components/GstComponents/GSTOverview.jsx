import React from "react";

const gstInfo = [
    {
        title: "GST Overview",
        content: "The Goods and Services Tax (GST) is a unified, destination-based indirect tax implemented in India on July 1, 2017, to replace multiple existing taxes like VAT, service tax, and excise duty. It simplifies the tax structure by merging these into a single tax, applicable on the supply of goods and services. GST is designed to be levied at every stage of the supply chain, with credit for taxes paid on inputs available at each stage, thereby reducing the overall tax burden and promoting a seamless flow of goods and services across the country."
    },
    {
        title: "What are the different types of GST?",
        content: "GST is categorized into four types: Central GST (CGST), State GST (SGST), Integrated GST (IGST), and Union Territory GST (UTGST)."
    },
    {
        title: "What is the GST registration process?",
        content: "The GST registration process involves submitting an online application through the GST portal, providing business details, and uploading required documents."
    },
    {
        title: "What documents are required for GST registration?",
        content: "Documents required for GST registration include PAN card, proof of business address, bank statement, and authorized signatory details."
    },
    {
        title: "GST Registration Turnover Limit",
        content: "Businesses with an annual turnover exceeding Rs. 40 lakhs (Rs. 20 lakhs for special category states) must register for GST."
    },
    {
        title: "What are the benefits of GST for businesses?",
        content: "GST offers benefits such as the elimination of cascading taxes, simplified tax compliance, and increased efficiency in supply chains."
    },
    {
        title: "What is the difference between CGST, SGST, IGST, and UTGST?",
        content: "CGST and SGST are levied on intra-state transactions, while IGST is imposed on inter-state transactions. UTGST applies to Union Territories."
    },
    {
        title: "What is the GST return filing process?",
        content: "GST return filing involves submitting monthly or quarterly returns through the GST portal, detailing sales, purchases, and tax collected."
    },
    {
        title: "What are the penalties for non-compliance with GST regulations?",
        content: "Penalties for non-compliance can include fines, interest on unpaid taxes, and possible legal action."
    },
    {
        title: "How can businesses claim Input Tax Credits under GST?",
        content: "Businesses can claim Input Tax Credits (ITC) for GST paid on purchases if they have valid tax invoices and have filed the relevant returns."
    },
];

const GSTOverview = () => {
    return (
        <div className="p-8 bg-gradient-to-br from-blue-50 to-white shadow-lg rounded-xl w-[80%] min-w-[320px] mx-auto mt-10">
            <h2 className="text-3xl font-extrabold text-center mb-8 text-green-800">Get Started with GST: Registration and Key Insights</h2>

            <div className="space-y-6">
                {gstInfo.map((info, index) => (
                    <section
                        key={index}
                        className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <h3 className="text-2xl font-semibold text-green-700 mb-2">{info.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{info.content}</p>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default GSTOverview;
