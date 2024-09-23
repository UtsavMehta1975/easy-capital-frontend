import React, { useState } from "react";
import axiosInstance from "@/utils/axios";

const BasicDetailsForm = ({ nextStep, setOrderDetails }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    gender: "",
    email: "",
    loanAmount: 50000,
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [sending, setSending] = useState(false);

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
        error = /^(\+91|0)?\d{10}$/.test(value)
          ? ""
          : "Mobile number must be 10 digits.";
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
    setErrors((prevErrors) => ({ ...prevErrors, [id]: error }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Limit the length of mobile input
    if (id === "mobile" && value.length > 12) {
      return; // Prevent input if length exceeds 12 (10 digits + 2 for prefix)
    }

    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
    validateField(id, value);
  };

  const normalizePhoneNumber = (number) => {
    return number.replace(/^(\+91|0)/, "");
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) =>
      validateField(field, formData[field])
    );
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendOTP = async () => {
    if (validate()) {
      setSending(true);
      try {
        const normalizedMobile = normalizePhoneNumber(formData.mobile);
        const res = await axiosInstance.post("/login/send-otp", {
          name: formData.name,
          email: formData.email,
          phoneNumber: normalizedMobile,
          gender: formData.gender,
          amount: formData.loanAmount,
        });

        const { message, orderDetails, error } = res.data;
        if (error) {
          setApiError(message);
        } else {
          setApiError("");
          await setOrderDetails(orderDetails);
          nextStep();
        }
      } catch (e) {
        console.error(e);
        setApiError("Failed to send OTP. Please try again.");
      } finally {
        setSending(false);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendOTP();
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
              className={inputStyle(errors.name)}
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
              className={inputStyle(errors.mobile)}
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
              className={inputStyle(errors.gender)}
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
              className={inputStyle(errors.email)}
            />
            {errors.email && (
              <p className="mt-2 text-xs text-red-400">{errors.email}</p>
            )}
          </div>

          {/* Loan Amount Input */}
          <div>
            <label className="block text-sm text-gray-500" htmlFor="loanAmount">
              Loan Amount
            </label>
            <input
              id="loanAmount"
              type="range"
              min="50000"
              max="10000000"
              value={formData.loanAmount}
              onChange={handleChange}
              className="w-full h-2 mt-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <span className="block mt-2 text-gray-700">
              ₹{Number(formData.loanAmount).toLocaleString()}
            </span>
          </div>
        </div>
        {apiError && <p className="mt-2 text-xs text-red-400">{apiError}</p>}
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-gray-600"
            disabled={sending}
          >
            {sending ? "Sending..." : "Apply"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default BasicDetailsForm;
