"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axios";
import * as XLSX from "xlsx";

export default function BusinessLoanRequests() {
    const [loanRequests, setLoanRequests] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            router.push("/admin/login");
        } else {
            fetchLoanRequests();
        }
    }, []);

    const fetchLoanRequests = async () => {
        try {
            const { data } = await axiosInstance.get("/get-users", {
                headers: { authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
            });

            const sortedRequests = data.sort((a, b) => a.userId.localeCompare(b.userId));

            const normalizedRequests = sortedRequests.map((request) => ({
                ...request,
                details: {
                    shopName: request.details?.shopName || "",
                    businessType: request.details?.businessType || "",
                    city: request.details?.city || "",
                    state: request.details?.state || "",
                    pincode: request.details?.pincode || "",
                    pan: request.details?.pan || "",
                    gst: request.details?.gst || "",
                    gstNumber: request.details?.gstNumber || "",
                    accountType: request.details?.accountType || "",
                    businessAge: request.details?.businessAge || "",
                }
            }));

            setLoanRequests(normalizedRequests);
        } catch (error) {
            console.error("Error fetching loan requests", error);
        }
    };



    const deleteLoanRequest = async (userId) => {
        try {
            await axiosInstance.delete(`/user/delete/${userId}`, {
                headers: { authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
            });
            setLoanRequests(loanRequests.filter(request => request._id !== userId));
        } catch (error) {
            console.error("Error deleting loan request", error);
        }
    };

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    const exportToExcel = () => {
        const formattedData = loanRequests.map(({ userId, name, mobile, email, details, createdAt, updatedAt }) => ({
            "User ID": userId,
            Name: name,
            Mobile: mobile,
            Email: email,
            "Business Name": details.shopName || "",
            "Business Type": details.businessType || "",
            City: details.city || "",
            State: details.state || "",
            Pincode: details.pincode || "",
            "PAN Number": details.pan || "",
            "GST": details.gst || "",
            "GST Number": details.gstNumber || "",
            "Account Type": details.accountType || "",
            "Business Age": details.businessAge || "",
            "Created At": formatDate(createdAt),
            "Updated At": formatDate(updatedAt),
        }));

        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Loan Requests");
        XLSX.writeFile(workbook, "BusinessLoanRequests.xlsx");
    };

    return (
        <section className="container px-4 mx-auto">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div>
                    <div className="flex items-center gap-x-3">
                        <h2 className="text-lg font-medium text-gray-800">Business Loan Requests</h2>
                        <span className="px-3 py-1 text-xs text-blue-500 bg-blue-100 rounded-full">{loanRequests.length} Requests</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Manage all business loan requests.</p>
                </div>
                <button
                    onClick={exportToExcel}
                    className="px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                    Export to Excel
                </button>
            </div>

            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">User ID</th>
                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">Name</th>
                                        <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left text-gray-500">Mobile</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Email</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Business Name</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Business Type</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">City</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">State</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Pincode</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">PAN Number</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">GST</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">GST Number</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Account Type</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Business Age</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Created At</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Updated At</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {loanRequests.map(({ _id, userId, name, mobile, email, details, createdAt, updatedAt }) => (
                                        <tr key={_id}>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div className="text-gray-600">{userId}</div>
                                            </td>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <h2 className="font-medium text-gray-800">{name}</h2>
                                            </td>
                                            <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                                <div className="text-gray-600">{mobile}</div>
                                            </td>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div className="text-gray-600">{email}</div>
                                            </td>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div className="text-gray-600">{details.shopName || ""}</div>
                                            </td>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div className="text-gray-600">{details.businessType || ""}</div>
                                            </td>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div className="text-gray-600">{details.city || ""}</div>
                                            </td>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div className="text-gray-600">{details.state || ""}</div>
                                            </td>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div className="text-gray-600">{details.pincode || ""}</div>
                                            </td>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div className="text-gray-600">{details.pan || ""}</div>
                                            </td>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div className="text-gray-600">{details.gst || ""}</div>
                                            </td>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div className="text-gray-600">{details.gstNumber || ""}</div>
                                            </td>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div className="text-gray-600">{details.accountType || ""}</div>
                                            </td>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div className="text-gray-600">{details.businessAge || ""}</div>
                                            </td>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div className="text-gray-600">{formatDate(createdAt)}</div>
                                            </td>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div className="text-gray-600">{formatDate(updatedAt)}</div>
                                            </td>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <button
                                                    onClick={() => deleteLoanRequest(_id)}
                                                    className="px-4 py-2 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
