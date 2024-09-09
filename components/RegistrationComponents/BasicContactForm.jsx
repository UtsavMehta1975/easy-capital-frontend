"use client";
import axiosInstance from "@/utils/axios";
import React, { useEffect, useState } from "react";

const BasicContactForm = ({ nextStep, changeService }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    gstServiceType: "",
  });

  useEffect(() => {
    const gstServiceMapping = {
      "Udhyam Certificate": "udhyam",
      "FSSAI Registration": "fssai",
      "HALAL Registration": "halal",
      "Trade License": "tradeLicense",
    };

    const selectedService = gstServiceMapping[formData.gstServiceType] || "";

    changeService(selectedService);
  }, [formData.gstServiceType]);



  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [sending, setSending] = useState(false); // State to track loading

  const inputStyle = (error) =>
    `block w-full px-5 py-2.5 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring ${error
      ? "border-red-400 focus:border-red-400 focus:ring-red-300 bg-white"
      : "border-gray-200 focus:border-blue-400 focus:ring-blue-300 bg-[rgb(237,242,247)]"
    }`;

  const validateField = (id, value) => {
    let error;
    switch (id) {
      case "name":
        error = value ? "" : "Name is required.";
        break;
      case "mobile":
        error = /^(\+91|0)?\d{10}$/.test(value) ? "" : "Mobile number must be 10 digits or start with +91 or 0.";
        break;
      case "email":
        error = value ? "" : "Email is required.";
        break;
      case "gstServiceType":
        error = value ? "" : "GST Service Type is required.";
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [id]: error }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
    validateField(id, value);
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => validateField(field, formData[field]));
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Function to send OTP
  const sendOTP = async () => {
    if (validate()) {
      setSending(true); // Set loading state
      try {
        const res = await axiosInstance.post("/login/send-otp", {
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.mobile,
          gstServiceType: formData.gstServiceType,
        });

        const { message, error } = res.data;
        if (error) {
          setApiError(message);
        } else {
          setApiError("");
          nextStep(); // Move to the next step if successful
        }
      } catch (e) {
        console.error(e);
        setApiError("Failed to send OTP. Please try again.");
      } finally {
        setSending(false); // Reset loading state
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendOTP(); // Call sendOTP on form submit
  };

  return (
    <section className="min-w-[320px] w-[45%] p-6 bg-white border rounded-md shadow-lg">
      <h2 className="text-lg font-semibold text-gray-700 capitalize">
        Let’s start by filling in some basic details:
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6 mt-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm text-gray-500" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputStyle(errors.name)}
            />
            {errors.name && <p className="mt-2 text-xs text-red-400">{errors.name}</p>}
          </div>

          {/* Mobile Input */}
          <div>
            <label className="block text-sm text-gray-500" htmlFor="mobile">Mobile</label>
            <input
              id="mobile"
              type="tel"
              placeholder="9876543210"
              value={formData.mobile}
              onChange={handleChange}
              required
              className={inputStyle(errors.mobile)}
            />
            {errors.mobile && <p className="mt-2 text-xs text-red-400">{errors.mobile}</p>}
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm text-gray-500" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="johndoe@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputStyle(errors.email)}
            />
            {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email}</p>}
          </div>

          {/* GST Service Type */}
          <div>
            <label className="block text-sm text-gray-500" htmlFor="gstServiceType">GST Service Type</label>
            <select
              id="gstServiceType"
              value={formData.gstServiceType}
              onChange={handleChange}
              required
              className={inputStyle(errors.gstServiceType)}
            >
              <option value="">Select GST Service Type</option>
              <option value="Udhyam Certificate">Udhyam Certificate</option>
              <option value="FSSAI Registration">FSSAI Registration</option>
              <option value="HALAL Registration">HALAL Registration</option>
              <option value="Trade License">Trade License</option>
            </select>
            {errors.gstServiceType && <p className="mt-2 text-xs text-red-400">{errors.gstServiceType}</p>}
          </div>

        </div>
        {apiError && <p className="mt-2 text-xs text-red-400">{apiError}</p>}
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            disabled={sending} // Disable button when loading
          >
            {sending ? "Sending..." : "Apply"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default BasicContactForm;
