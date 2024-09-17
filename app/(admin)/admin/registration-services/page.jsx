"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axios";
import * as XLSX from "xlsx";

export default function RegistrationRequests() {
    const [registrationRequests, setRegistrationRequests] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const token = sessionStorage.getItem("jwtToken");
        if (!token) {
            router.push("/admin/login");
        } else {
            fetchRegistrationRequests();
        }
    }, []);

    const fetchRegistrationRequests = async () => {
        try {
            const { data } = await axiosInstance.get("/registeration-requests/all", {
                headers: { authorization: `Bearer ${sessionStorage.getItem("jwtToken")}` },
            });
            setRegistrationRequests(data.data);
        } catch (error) {
            console.error("Error fetching registration requests", error);
        }
    };

    // Function to format date and time
    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    // Function to export data to Excel
    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(registrationRequests.map(req => ({
            Name: req.name,
            Mobile: req.mobile,
            Email: req.email,
            "Registration Service Type": req.registerationServiceType,
            Verified: req.verified ? "Verified" : "Pending",
            "Created At": formatDate(req.createdAt),
            "Updated At": formatDate(req.updatedAt)
        })));
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Registration Requests");

        // Generate and download the Excel file
        XLSX.writeFile(workbook, "registration_requests.xlsx");
    };

    // Function to delete a registration request by ID
    const deleteRequest = async (id) => {
        try {
            await axiosInstance.delete(`/registeration-requests/delete/${id}`, {
                headers: { authorization: `Bearer ${sessionStorage.getItem("jwtToken")}` },
            });
            // Refresh the list after deletion
            setRegistrationRequests(registrationRequests.filter(req => req._id !== id));
        } catch (error) {
            console.error("Error deleting registration request", error);
        }
    };

    return (
        <section className="container px-4 mx-auto">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div>
                    <div className="flex items-center gap-x-3">
                        <h2 className="text-lg font-medium text-gray-800">Registration Requests</h2>
                        <span className="px-3 py-1 text-xs text-blue-500 bg-blue-100 rounded-full">{registrationRequests.length} Requests</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Manage all registration service requests.</p>
                </div>
                <button
                    onClick={exportToExcel}
                    className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600"
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
                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">Name</th>
                                        <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left text-gray-500">Mobile</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Email</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Registration Service Type</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Verified</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Created At</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Updated At</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {registrationRequests.map(({ _id, name, mobile, email, registerationServiceType, verified, createdAt, updatedAt }) => (
                                        <tr key={_id}>
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
                                                <div className="text-gray-600">{registerationServiceType}</div>
                                            </td>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div className={`inline px-3 py-1 text-sm font-normal rounded-full ${verified ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                                                    {verified ? "Verified" : "Pending"}
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div className="text-gray-600">{formatDate(createdAt)}</div>
                                            </td>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div className="text-gray-600">{formatDate(updatedAt)}</div>
                                            </td>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <button
                                                    onClick={() => deleteRequest(_id)}
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
