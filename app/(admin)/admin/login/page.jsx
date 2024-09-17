// app/admin/login/page.js
"use client";
import { useState } from "react";
import axiosInstance from "@/utils/axios";
import { useRouter } from "next/navigation";

export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [orderId, setOrderId] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const router = useRouter();

    const handleSendOtp = async () => {
        try {
            const response = await axiosInstance.post("/admin/login", { phoneNumber });
            console.log(response.data)
            setOrderId(response.data.orderId);
            setOtpSent(true);
            alert("OTP sent to your phone.");
        } catch (error) {
            console.error("Error sending OTP", error);
        }
    };

    const handleVerifyOtp = async () => {
        try {
            const response = await axiosInstance.post("/admin/login/verify", { phoneNumber, otp, orderId });

            if (response.data.success) {
                const userRole = response.data.role;

                // Allow login only for admin (role 1) or sub-admin (role 2)
                if (userRole === 1 || userRole === 2) {
                    // Store the token and role in session storage
                    sessionStorage.setItem("jwtToken", response.data.token);
                    sessionStorage.setItem("userRole", userRole);

                    alert("Login successful");
                    router.push("/admin/sub-admins");
                } else {
                    // If user is not admin or sub-admin, show an alert
                    alert("Access denied. Only admins or sub-admins can log in.");
                }
            } else {
                // Handle specific error messages from the response
                alert(response.data.message || "An error occurred during login.");
            }
        } catch (error) {
            console.error("Error verifying OTP", error);
            alert("An error occurred while verifying the OTP. Please try again later.");
        }
    };



    return (
        <div className="flex justify-center items-center min-h-[50vh]  bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md min-w-[300px] max-w-[90vw] mx-auto">
                <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
                <div className="space-y-4">
                    {!otpSent && (<input
                        type="text"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                    />)}
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
