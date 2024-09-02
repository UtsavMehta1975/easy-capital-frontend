import React, { useState, useEffect, useRef } from "react";

const OTPVerification = ({nextStep}) => {
  // State to track the OTP input values
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");

  // Refs for inputs to manage focus
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, otp.length);
  }, [otp.length]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value;

    // Move focus to next input
    if (value.length === 1 && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Move focus to previous input
    if (value.length === 0 && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    setOtp(newOtp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join("");

    // Validate OTP length
    if (otpValue.length !== 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    // // Example API call (replace with actual implementation)
    // try {
    //   const response = await fetch("/api/verify-otp", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ otp: otpValue }),
    //   });

    //   if (response.ok) {
    //     alert("OTP verified successfully!");
    //   } else {
    //     setError("Invalid OTP. Please try again.");
    //   }
    // } catch (error) {
    //   console.error("Error verifying OTP:", error);
    //   setError("An error occurred. Please try again.");
    // }

    nextStep()
  };

  const handleResend = () => {
    alert("Resend OTP functionality not implemented.");
  };

  return (
    <div className="min-w-[320px] w-[45%] p-6 relative flex max-h-[600px] rounded-lg flex-col justify-center overflow-hidden bg-gray-50 py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>We have sent a code to your phone number</p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  {otp.map((value, index) => (
                    <div key={index} className="w-10 h-14">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center  outline-none rounded-xl border border-gray-200 text-lg bg-white text-black focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        maxLength={1}
                        value={value}
                        onChange={(e) => handleChange(e, index)}
                        ref={(el) => (inputRefs.current[index] = el)}
                      />
                    </div>
                  ))}
                </div>

                {error && <p className="text-red-600 text-center">{error}</p>}

                <div className="flex flex-col space-y-5">
                  <div>
                    <button
                      type="submit"
                      className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                    >
                      Verify Account
                    </button>
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Did not receive code?</p>{" "}
                    <button
                      type="button"
                      onClick={handleResend}
                      className="flex flex-row items-center text-blue-600"
                    >
                      Resend
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
