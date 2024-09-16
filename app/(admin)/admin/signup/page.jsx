// app/admin/subadmin/signup/page.js
"use client";
import { useState } from "react";
import axiosInstance from "@/utils/axios";

export default function SubAdminSignup() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [name, setName] = useState("");
    const [otp, setOtp] = useState("");
    const [orderId, setOrderId] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    const handleSendOtp = async () => {
        try {
            const response = await axiosInstance.post("/admin/subadmin/signup", { phoneNumber, name });
            setOrderId(response.data.orderId);
            setOtpSent(true);
            alert("OTP sent to your phone.");
        } catch (error) {
            console.error("Error sending OTP", error);
        }
    };

    const handleVerifyOtp = async () => {
        try {
            // await axiosInstance.post("/admin/subadmin/signup", { phoneNumber, name, otp, orderId });
            const response = await axiosInstance.post("/admin/login", { phoneNumber, otp, orderId });

            alert("Signup successful. Awaiting admin approval.");
        } catch (error) {
            console.error("Error verifying OTP", error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">Sub-admin Signup</h1>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                    />
                    {otpSent && (
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full px-4 py-2 border rounded"
                        />
                    )}
                    <button
                        onClick={otpSent ? handleVerifyOtp : handleSendOtp}
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                        {otpSent ? "Verify OTP" : "Send OTP"}
                    </button>
                </div>
            </div>
        </div>
    );
}
