"use client";
import React, { useState } from "react";

const AccountInfoForm = ({ nextStep }) => {
  const [formData, setFormData] = useState({
    pan: "",
    businessType: "",
    shopName: "",
    businessAge: "",
    accountType: "",
    gst: "",
    gstNumber: "",
    state: "",
    city: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (id, value) => {
    const errorMessages = {
      pan: value.length === 10 ? "" : "PAN card number must be exactly 10 characters.",
      businessType: value ? "" : "Business type is required.",
      shopName: value ? "" : "Shop name is required.",
      businessAge: value ? "" : "Business age is required.",
      accountType: value ? "" : "Account type is required.",
      gst: value ? "" : "GST status is required.",
      gstNumber: formData.gst === "yes" && !value ? "GST number is required when GST is 'yes'." : "",
      state: value ? "" : "State is required.",
      city: value ? "" : "City is required.",
      pincode: /^[1-9][0-9]{5}$/.test(value) ? "" : "Pincode must be a 6-digit number.",
    };
    setErrors((prevErrors) => ({ ...prevErrors, [id]: errorMessages[id] }));
  };

  const handleChange = ({ target: { id, value } }) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
    validateField(id, value);
  };

  const validate = () => {
    Object.keys(formData).forEach((field) => validateField(field, formData[field]));
    return !Object.values(errors).some((error) => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      nextStep();
    }
  };

  return (
    <section className="min-w-[320px] w-[45%] p-6 bg-white border rounded-md shadow-lg">
      <h2 className="text-lg font-semibold text-gray-700 capitalize">Account Information</h2>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6 mt-4">
          {[
            { id: "pan", label: "PAN Card Number", type: "text", placeholder: "ABCDE1234F", maxLength: 10 },
            { id: "businessType", label: "Business Type", type: "select", options: ["proprietorship", "partnership", "privateLimited", "limited"] },
            { id: "shopName", label: "Shop Name", type: "text", placeholder: "Your Shop" },
            { id: "businessAge", label: "How Old is Your Business?", type: "number", placeholder: "In years" },
            { id: "accountType", label: "Account Type", type: "select", options: ["current", "savings"] },
            { id: "gst", label: "GST Status", type: "select", options: ["yes", "no"] },
            ...(formData.gst === "yes" ? [{ id: "gstNumber", label: "GST Number", type: "text", placeholder: "GSTIN" }] : []),
            { id: "state", label: "State", type: "text", placeholder: "State" },
            { id: "city", label: "City", type: "text", placeholder: "City" },
            { id: "pincode", label: "Pincode", type: "text", placeholder: "Pincode" },
          ].map(({ id, label, type, ...rest }) => (
            <div key={id}>
              <label className="block text-sm text-gray-500" htmlFor={id}>{label}</label>
              {type === "select" ? (
                <select id={id} value={formData[id]} onChange={handleChange} required className={`block w-full px-5 py-2.5 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring ${errors[id] ? "border-red-400 focus:border-red-400 focus:ring-red-300 bg-white" : "border-gray-200 focus:border-blue-400 focus:ring-blue-300 bg-[rgb(237,242,247)]"}`}>
                  <option value="">Select {label}</option>
                  {rest.options.map((option) => (<option key={option} value={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</option>))}
                </select>
              ) : (
                <input id={id} type={type} value={formData[id]} onChange={handleChange} {...rest} required className={`block w-full px-5 py-2.5 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring ${errors[id] ? "border-red-400 focus:border-red-400 focus:ring-red-300 bg-white" : "border-gray-200 focus:border-blue-400 focus:ring-blue-300 bg-[rgb(237,242,247)]"}`} />
              )}
              {errors[id] && <p className="mt-2 text-xs text-red-400">{errors[id]}</p>}
            </div>
          ))}
        </div>
        <button type="submit" className="mt-4 w-full px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">Next Step</button>
      </form>
    </section>
  );
};

export default AccountInfoForm;
