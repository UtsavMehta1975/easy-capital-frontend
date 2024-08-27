"use client"
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [businessLoanDropdownOpen, setBusinessLoanDropdownOpen] = useState(false);
    const [gstDropdownOpen, setGstDropdownOpen] = useState(false);
    const [registrationDropdownOpen, setRegistrationDropdownOpen] = useState(false);

    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const toggleDropdown = (dropdownType) => {
        switch (dropdownType) {
            case 'businessLoan':
                setBusinessLoanDropdownOpen(!businessLoanDropdownOpen);
                break;
            case 'gst':
                setGstDropdownOpen(!gstDropdownOpen);
                break;
            case 'registration':
                setRegistrationDropdownOpen(!registrationDropdownOpen);
                break;
            default:
                break;
        }
    };

    // Close sidebar when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sidebarOpen]);

    return (
        <nav>
            {/* Navbar */}
            <nav className="bg-white fixed top-0 left-0 w-full z-20 shadow-lg flex items-center justify-between px-4 py-2">
                {/* Menu Icon + Logo */}
                <div className="flex items-center md:w-auto w-full justify-between flex-row-reverse md:flex-row">
                    <span onClick={toggleSidebar} className="cursor-pointer text-gray-800 hover:text-blue-500 focus:outline-none">
                        <FiMenu size={24} />
                    </span>
                    <div className="md:ml-3 flex gap-1 items-center">
                        <Image
                            className="h-12 w-auto"
                            src="/images/easy-capital-logo.png"
                            alt="EasyCapital Logo"
                            width={50}
                            height={50}
                        />
                        <span className="text-2xl font-bold text-gray-800"><span className='text-blue-800'>Easy</span>Capital</span>
                    </div>
                </div>

                {/* Links - hidden on mobile */}
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-lg font-medium">
                        About Us
                    </a>
                    <a href="#" className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-lg font-medium">
                        Our Partners
                    </a>
                    <a href="#" className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-lg font-medium">
                        Contact Us
                    </a>
                    <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Login</a>
                </div>
            </nav>

            {/* Sidebar */}
            <aside
                ref={sidebarRef}
                className={`fixed top-0 right-0 md:left-0 h-full bg-white shadow-lg transform transition-transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full md:-translate-x-full'
                    } z-30 lg:w-64 w-64`}
            >
                <div className="flex items-center justify-between px-4 py-4">
                    {/* Sidebar Menu Icon + Logo */}
                    <div className="flex items-center md:w-auto w-full justify-between flex-row-reverse md:flex-row">
                        <span onClick={toggleSidebar} className="cursor-pointer text-gray-800 hover:text-blue-500 focus:outline-none">
                            <FiMenu size={24} />
                        </span>
                        <div className="hidden md:flex md:ml-3 gap-1 items-center">
                            <Image
                                className="h-12 w-auto"
                                src="/images/easy-capital-logo.png"
                                alt="EasyCapital Logo"
                                width={50}
                                height={50}
                            />
                            <span className="text-2xl font-bold text-gray-800"><span className='text-blue-800'>Easy</span>Capital</span>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-6">
                    <ul className="space-y-4 text-left">
                        <li>
                            <a href="#" className="text-gray-800 hover:text-blue-500 block">Home</a>
                        </li>

                        {/* Business Loan Dropdown */}
                        <li>
                            <div onClick={() => toggleDropdown('businessLoan')} className="flex justify-between items-center text-gray-800 hover:text-blue-500 cursor-pointer">
                                Business Loan
                                <span className={`transform transition-transform ${businessLoanDropdownOpen ? 'rotate-180' : ''}`}>&#9662;</span>
                            </div>
                            <ul className={`pl-2 border-l border-cyan-800 transition-all duration-500 overflow-hidden ${businessLoanDropdownOpen ? 'max-h-96' : 'max-h-0'} mt-2 space-y-2`}>
                                <li>
                                    <a href="#" className="text-gray-800 hover:text-blue-500 block">Unsecured Business Loan</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-800 hover:text-blue-500 block">Line Of Credit</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-800 hover:text-blue-500 block">MSME Loan</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-800 hover:text-blue-500 block">Secured Business Loan</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-800 hover:text-blue-500 block">Machinery Loan</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-800 hover:text-blue-500 block">Business Loan for Women</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-800 hover:text-blue-500 block">Business E-Commerce Loan</a>
                                </li>
                            </ul>
                        </li>

                        {/* GST Services Dropdown */}
                        <li>
                            <div onClick={() => toggleDropdown('gst')} className="flex justify-between items-center text-gray-800 hover:text-blue-500 cursor-pointer">
                                GST Services
                                <span className={`transform transition-transform ${gstDropdownOpen ? 'rotate-180' : ''}`}>&#9662;</span>
                            </div>
                            <ul className={`pl-2 border-l border-cyan-800 transition-all duration-500 overflow-hidden ${gstDropdownOpen ? 'max-h-96' : 'max-h-0'} mt-2 space-y-2`}>
                                <li>
                                    <a href="#" className="text-gray-800 hover:text-blue-500 block">GST Registration</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-800 hover:text-blue-500 block">GST Filing</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-800 hover:text-blue-500 block">GST Registration Cancellation</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-800 hover:text-blue-500 block">GST Annual Return</a>
                                </li>
                            </ul>
                        </li>

                        {/* Registration Services Dropdown */}
                        <li>
                            <div onClick={() => toggleDropdown('registration')} className="flex justify-between items-center text-gray-800 hover:text-blue-500 cursor-pointer">
                                Registration Services
                                <span className={`transform transition-transform ${registrationDropdownOpen ? 'rotate-180' : ''}`}>&#9662;</span>
                            </div>
                            <ul className={`pl-2 border-l border-cyan-800 transition-all duration-500 overflow-hidden ${registrationDropdownOpen ? 'max-h-96' : 'max-h-0'} mt-2 space-y-2`}>
                                <li>
                                    <a href="#" className="text-gray-800 hover:text-blue-500 block">Udhyam Certificate</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-800 hover:text-blue-500 block">FSSAI Registration</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-800 hover:text-blue-500 block">HALAL Registration</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-800 hover:text-blue-500 block">Trade License</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* Links at the bottom of the sidebar in mobile */}
                <div className="absolute bottom-0 left-0 w-full px-4 py-6 bg-white flex flex-col items-center gap-4 ">
                    <ul className="space-y-4 text-center">
                        <li>
                            <a href="#" className="text-gray-800 hover:text-blue-500">About Us</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-800 hover:text-blue-500">Our Partners</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-800 hover:text-blue-500">Contact Us</a>
                        </li>
                    </ul>
                    <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full text-center font-semibold">Login</a>
                </div>
            </aside>

            {/* Overlay to darken background when sidebar is open */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-10 z-20"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
            <div className=' h-[70px]'></div>

        </nav>
    );
};

export default Navbar;
