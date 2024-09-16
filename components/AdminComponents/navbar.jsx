"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative bg-white shadow mb-9">
            <div className="container py-1 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <div className="md:ml-3 flex gap-1 items-center">
                        <Image
                            className="h-12 w-auto"
                            src="/images/easy-capital-logo.png"
                            alt="EasyCapital Logo"
                            width={30}
                            height={30}
                        />
                        <span className="text-2xl font-bold text-gray-800">
                            <span className='text-blue-800'>Easy</span>Capital
                        </span>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                            aria-label="toggle menu"
                        >
                            <svg
                                className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                            </svg>
                            <svg
                                className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                <div
                    className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'block opacity-100 translate-x-0' : 'hidden opacity-0 -translate-x-full'}`}
                >
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <Link
                            className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0"
                            href="/admin/sub-admins"
                        >
                            Sub-admins
                        </Link>
                        <Link
                            className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0"
                            href="/admin/business-loans"
                        >
                            Business Loans
                        </Link>
                        <Link
                            className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0"
                            href="/admin/gst-services"
                        >
                            GST Services
                        </Link>
                        <Link
                            className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0"
                            href="/admin/registration-services"
                        >
                            Registration Services
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
