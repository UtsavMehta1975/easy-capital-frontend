"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axios";
import * as XLSX from "xlsx";

export default function GstRequests() {
    const [gstRequests, setGstRequests] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            router.push("/admin/login");
        } else {
            fetchGstRequests();
        }
    }, []);

    const fetchGstRequests = async () => {
        try {
            const { data } = await axiosInstance.get("/gst-requests/all", {
                headers: { authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
            });
            setGstRequests(data.data.sort((a, b) => a.gstRequestID.localeCompare(b.gstRequestID)));
        } catch (error) {
            console.error("Error fetching GST requests", error);
        }
    };

    // Function to delete a GST request
    const deleteGstRequest = async (id) => {
        try {
            await axiosInstance.delete(`/gst-requests/delete/${id}`, {
                headers: { authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
            });
            setGstRequests(gstRequests.filter(request => request._id !== id));
        } catch (error) {
            console.error("Error deleting GST request", error);
        }
    };

    // Function to format date and time
    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    // Function to export data to Excel
    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(gstRequests.map(req => ({
            "GST Request ID": req.gstRequestID,
            Name: req.name,
            Mobile: req.mobile,
            Email: req.email,
            "GST Service Type": req.gstServiceType,
            Verified: req.verified ? "Verified" : "Pending",
            "Created At": formatDate(req.createdAt),
            "Updated At": formatDate(req.updatedAt),
        })));
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "GST Requests");

        XLSX.writeFile(workbook, "gst_requests.xlsx");
    };

    return (
        <section className="container px-4 mx-auto">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div>
                    <div className="flex items-center gap-x-3">
                        <h2 className="text-lg font-medium text-gray-800">GST Requests</h2>
                        <span className="px-3 py-1 text-xs text-blue-500 bg-blue-100 rounded-full">{gstRequests.length} Requests</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Manage all GST service requests.</p>
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
                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">GST Request ID</th>
                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">Name</th>
                                        <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left text-gray-500">Mobile</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Email</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">GST Service Type</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Verified</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Created At</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Updated At</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {gstRequests.map(({ _id, name, mobile, email, gstServiceType, verified, createdAt, updatedAt, gstRequestID }) => (
                                        <tr key={_id}>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <h2 className="font-medium text-gray-800">{gstRequestID}</h2>
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
                                                <div className="text-gray-600">{gstServiceType}</div>
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
                                                    onClick={() => deleteGstRequest(_id)}
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
