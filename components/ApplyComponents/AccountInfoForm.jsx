"use client";
import React, { useState } from "react";
import Autocomplete from 'react-google-autocomplete';

const AccountInfoForm = ({nextStep}) => {
  const [formData, setFormData] = useState({
    pan: "",
    businessType: "",
    companyName: "",
    businessAge: "",
    accountType: "",
    gst: "",
    gstType: "",
    state: "",
    city: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (id, value) => {
    let error;
    switch (id) {
      case "pan":
        error = value.length === 10 ? "" : "PAN card number must be exactly 10 characters.";
        break;
      case "businessType":
        error = value ? "" : "Business type is required.";
        break;
      case "companyName":
        error = value ? "" : "Company name is required.";
        break;
      case "businessAge":
        error = value ? "" : "Business age is required.";
        break;
      case "accountType":
        error = value ? "" : "Account type is required.";
        break;
      case "gst":
        error = value ? "" : "GST status is required.";
        break;
      case "gstType":
        error = formData.gst === "yes" && !value ? "GST type is required when GST is 'yes'." : "";
        break;
      case "state":
        error = value ? "" : "State is required.";
        break;
      case "city":
        error = value ? "" : "City is required.";
        break;
      case "pincode":
        error = /^[1-9][0-9]{5}$/.test(value) ? "" : "Pincode must be a 6-digit number.";
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

  const handleAddressChange = (place) => {
    const addressComponents = place.address_components || [];
    const state = addressComponents.find(component => component.types.includes('administrative_area_level_1'))?.long_name || '';
    const city = addressComponents.find(component => component.types.includes('locality'))?.long_name || '';
    const pincode = addressComponents.find(component => component.types.includes('postal_code'))?.long_name || '';

    setFormData((prevFormData) => ({
      ...prevFormData,
      state,
      city,
      pincode,
    }));
    validateField("state", state);
    validateField("city", city);
    validateField("pincode", pincode);
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      nextStep()
    }
  };

  return (
    <section className="min-w-[320px] w-[45%] p-6 bg-white border rounded-md shadow-lg">
      <h2 className="text-lg font-semibold text-gray-700 capitalize">
        Account Information
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6 mt-4">
          {/* PAN Card Number Input */}
          <div>
            <label className="block text-sm text-gray-500" htmlFor="pan">
              PAN Card Number
            </label>
            <input
              id="pan"
              type="text"
              placeholder="ABCDE1234F"
              value={formData.pan}
              onChange={handleChange}
              maxLength={10}
              required
              className={`block w-full px-5 py-2.5 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring ${errors.pan
                  ? "border-red-400 focus:border-red-400 focus:ring-red-300 bg-white"
                  : "border-gray-200 focus:border-blue-400 focus:ring-blue-300 bg-[rgb(237,242,247)]"
                }`}
            />
            {errors.pan && (
              <p className="mt-2 text-xs text-red-400">{errors.pan}</p>
            )}
          </div>

          {/* Business Type Input */}
          <div>
            <label className="block text-sm text-gray-500" htmlFor="businessType">
              Business Type
            </label>
            <select
              id="businessType"
              value={formData.businessType}
              onChange={handleChange}
              required
              className={`block w-full px-5 py-2.5 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring ${errors.businessType
                  ? "border-red-400 focus:border-red-400 focus:ring-red-300 bg-white"
                  : "border-gray-200 focus:border-blue-400 focus:ring-blue-300 bg-[rgb(237,242,247)]"
                }`}
            >
              <option value="">Select Business Type</option>
              <option value="proprietorship">Proprietorship</option>
              <option value="partnership">Partnership</option>
              <option value="privateLimited">Private Limited</option>
              <option value="limited">Limited</option>
            </select>
            {errors.businessType && (
              <p className="mt-2 text-xs text-red-400">{errors.businessType}</p>
            )}
          </div>

          {/* Company Name Input */}
          <div>
            <label className="block text-sm text-gray-500" htmlFor="companyName">
              Company Name
            </label>
            <input
              id="companyName"
              type="text"
              placeholder="Your Company Ltd."
              value={formData.companyName}
              onChange={handleChange}
              required
              className={`block w-full px-5 py-2.5 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring ${errors.companyName
                  ? "border-red-400 focus:border-red-400 focus:ring-red-300 bg-white"
                  : "border-gray-200 focus:border-blue-400 focus:ring-blue-300 bg-[rgb(237,242,247)]"
                }`}
            />
            {errors.companyName && (
              <p className="mt-2 text-xs text-red-400">{errors.companyName}</p>
            )}
          </div>

          {/* Business Age Input */}
          <div>
            <label className="block text-sm text-gray-500" htmlFor="businessAge">
              How Old is Your Business?
            </label>
            <input
              id="businessAge"
              type="number"
              placeholder="In years"
              value={formData.businessAge}
              onChange={handleChange}
              required
              className={`block w-full px-5 py-2.5 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring ${errors.businessAge
                  ? "border-red-400 focus:border-red-400 focus:ring-red-300 bg-white"
                  : "border-gray-200 focus:border-blue-400 focus:ring-blue-300 bg-[rgb(237,242,247)]"
                }`}
            />
            {errors.businessAge && (
              <p className="mt-2 text-xs text-red-400">{errors.businessAge}</p>
            )}
          </div>

          {/* Account Type Input */}
          <div>
            <label className="block text-sm text-gray-500" htmlFor="accountType">
              Account Type
            </label>
            <select
              id="accountType"
              value={formData.accountType}
              onChange={handleChange}
              required
              className={`block w-full px-5 py-2.5 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring ${errors.accountType
                  ? "border-red-400 focus:border-red-400 focus:ring-red-300 bg-white"
                  : "border-gray-200 focus:border-blue-400 focus:ring-blue-300 bg-[rgb(237,242,247)]"
                }`}
            >
              <option value="">Select Account Type</option>
              <option value="current">Current Account</option>
              <option value="savings">Savings Account</option>
            </select>
            {errors.accountType && (
              <p className="mt-2 text-xs text-red-400">{errors.accountType}</p>
            )}
          </div>

          {/* GST Status Input */}
          <div>
            <label className="block text-sm text-gray-500" htmlFor="gst">
              GST Status
            </label>
            <select
              id="gst"
              value={formData.gst}
              onChange={handleChange}
              required
              className={`block w-full px-5 py-2.5 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring ${errors.gst
                  ? "border-red-400 focus:border-red-400 focus:ring-red-300 bg-white"
                  : "border-gray-200 focus:border-blue-400 focus:ring-blue-300 bg-[rgb(237,242,247)]"
                }`}
            >
              <option value="">Select GST Status</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.gst && (
              <p className="mt-2 text-xs text-red-400">{errors.gst}</p>
            )}
          </div>

          {/* GST Type Input */}
          {formData.gst === "yes" && (
            <div>
              <label className="block text-sm text-gray-500" htmlFor="gstType">
                GST Type
              </label>
              <input
                id="gstType"
                type="text"
                placeholder="e.g., Regular"
                value={formData.gstType}
                onChange={handleChange}
                required
                className={`block w-full px-5 py-2.5 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring ${errors.gstType
                    ? "border-red-400 focus:border-red-400 focus:ring-red-300 bg-white"
                    : "border-gray-200 focus:border-blue-400 focus:ring-blue-300 bg-[rgb(237,242,247)]"
                  }`}
              />
              {errors.gstType && (
                <p className="mt-2 text-xs text-red-400">{errors.gstType}</p>
              )}
            </div>
          )}

          <div>
            <label className="block text-sm text-gray-500" htmlFor="address">
              Address (for auto-filling state, city, pincode)
            </label>
            <Autocomplete
              id="address"
              onPlaceSelected={handleAddressChange}
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
              types={['address']}
              options={{
                types: ["(regions)"],
                componentRestrictions: { country: "in" },
              }}
              className="block w-full px-5 py-2.5 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring border-gray-200 focus:border-blue-400 focus:ring-blue-300 bg-[rgb(237,242,247)]"
            />
          </div>


          {/* State Input */}
          <div>
            <label className="block text-sm text-gray-500" htmlFor="state">
              State
            </label>
            <input
              id="state"
              type="text"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
              className={`block w-full px-5 py-2.5 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring ${errors.state
                  ? "border-red-400 focus:border-red-400 focus:ring-red-300 bg-white"
                  : "border-gray-200 focus:border-blue-400 focus:ring-blue-300 bg-[rgb(237,242,247)]"
                }`}
            />
            {errors.state && (
              <p className="mt-2 text-xs text-red-400">{errors.state}</p>
            )}
          </div>

          {/* City Input */}
          <div>
            <label className="block text-sm text-gray-500" htmlFor="city">
              City
            </label>
            <input
              id="city"
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              className={`block w-full px-5 py-2.5 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring ${errors.city
                  ? "border-red-400 focus:border-red-400 focus:ring-red-300 bg-white"
                  : "border-gray-200 focus:border-blue-400 focus:ring-blue-300 bg-[rgb(237,242,247)]"
                }`}
            />
            {errors.city && (
              <p className="mt-2 text-xs text-red-400">{errors.city}</p>
            )}
          </div>

          {/* Pincode Input */}
          <div>
            <label className="block text-sm text-gray-500" htmlFor="pincode">
              Pincode
            </label>
            <input
              id="pincode"
              type="text"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
              className={`block w-full px-5 py-2.5 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring ${errors.pincode
                  ? "border-red-400 focus:border-red-400 focus:ring-red-300 bg-white"
                  : "border-gray-200 focus:border-blue-400 focus:ring-blue-300 bg-[rgb(237,242,247)]"
                }`}
            />
            {errors.pincode && (
              <p className="mt-2 text-xs text-red-400">{errors.pincode}</p>
            )}
          </div>

          {/* Google Maps Autocomplete */}

          <button
            type="submit"
            className="w-full py-2.5 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default AccountInfoForm;
