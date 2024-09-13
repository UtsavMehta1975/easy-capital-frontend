"use client"
import { NavLoanContent } from '@/data/loanContent';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [businessLoanDropdownOpen, setBusinessLoanDropdownOpen] = useState(false);
    const [registrationDropdownOpen, setRegistrationDropdownOpen] = useState(false);
    const [gstDropdownOpen, setGstDropdownOpen] = useState(false);

    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const toggleDropdown = (dropdownType) => {
        switch (dropdownType) {
            case 'businessLoan':
                setBusinessLoanDropdownOpen(!businessLoanDropdownOpen);
                break;
            case 'registration':
                setRegistrationDropdownOpen(!registrationDropdownOpen);
                break;
            case 'gst':
                setGstDropdownOpen(!gstDropdownOpen);
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
                    <Link href={'/'}>
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
                    </Link>
                </div>

                {/* Links - hidden on mobile */}
                <div className="hidden md:flex space-x-4">
                    <Link href="/about-us" className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-lg font-medium">
                        About Us
                    </Link>
                    <Link href="/contact-us" className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-lg font-medium">
                        Contact Us
                    </Link>
                </div>
            </nav>

            {/* Sidebar */}
            <aside
                ref={sidebarRef}
                className={`fixed top-0 right-0 md:left-0 h-screen bg-white shadow-lg transform transition-transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full md:-translate-x-full'
                    } z-30 lg:w-64 w-64`}
            >
                <div className="flex items-center justify-between px-4 py-4 ">
                    {/* Sidebar Menu Icon + Logo */}
                    <div className="flex items-center md:w-auto w-full justify-between flex-row-reverse md:flex-row">
                        <span onClick={toggleSidebar} className="cursor-pointer text-gray-800 hover:text-blue-500 focus:outline-none">
                            <FiMenu size={24} />
                        </span>
                        <Link href={'/'}>
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
                        </Link>
                    </div>
                </div>
                <div className="px-4 ">
                    <ul className="space-y-4 text-left max-h-[600px] overflow-auto">
                        <li>
                            <span onClick={toggleSidebar} >
                                <Link href="/" className="text-gray-800 hover:text-blue-500 block">
                                    Home
                                </Link>
                            </span>
                        </li>

                        {/* Business Loan Dropdown */}
                        <li>
                            <div onClick={() => toggleDropdown('businessLoan')} className="flex justify-between items-center text-gray-800 hover:text-blue-500 cursor-pointer">
                                Business Loan
                                <span className={`transform transition-transform ${businessLoanDropdownOpen ? 'rotate-180' : ''}`}>&#9662;</span>
                            </div>
                            <ul className={`pl-2 border-l border-cyan-800 transition-all duration-500 overflow-hidden ${businessLoanDropdownOpen ? 'max-h-96' : 'max-h-0'} mt-2 space-y-2`}>
                                {Object.entries(NavLoanContent).map(([key, { title, link }]) => (
                                    <li key={key}>
                                        <span onClick={toggleSidebar} >
                                            <Link href={link} className="text-gray-800 hover:text-blue-500 block">
                                                {title}
                                            </Link>
                                        </span>
                                    </li>
                                ))}
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
                                    <span onClick={toggleSidebar} >
                                        <Link href="/gst-services/gst-registration" className="text-gray-800 hover:text-blue-500 block">GST Registration</Link>
                                    </span>
                                </li>
                                <li>
                                    <span onClick={toggleSidebar} >
                                        <Link href="/gst-services/gst-filling" className="text-gray-800 hover:text-blue-500 block">GST filling</Link>
                                    </span>
                                </li>
                                <li>
                                    <span onClick={toggleSidebar} >
                                        <Link href="/gst-services/gst-registration-cancelation" className="text-gray-800 hover:text-blue-500 block">GST Registration Cancelation</Link>
                                    </span>
                                </li>
                                <li>
                                    <span onClick={toggleSidebar} >
                                        <Link href="/gst-services/gst-annual-return" className="text-gray-800 hover:text-blue-500 block">GST Annual Return</Link>
                                    </span>
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
                                    <span onClick={toggleSidebar}>
                                        <Link href="/registration-services/udhyam-certificate" className="text-gray-800 hover:text-blue-500 block">Udhyam Certificate</Link>
                                    </span>
                                </li>
                                <li>
                                    <span onClick={toggleSidebar}>
                                        <Link href="/registration-services/fssai-registration" className="text-gray-800 hover:text-blue-500 block">FSSAI Registration</Link>
                                    </span>
                                </li>
                                <li>
                                    <span onClick={toggleSidebar}>
                                        <Link href="/registration-services/halal-registration" className="text-gray-800 hover:text-blue-500 block">HALAL Registration</Link>
                                    </span>
                                </li>
                                <li>
                                    <span onClick={toggleSidebar}>
                                        <Link href="/registration-services/trade-license" className="text-gray-800 hover:text-blue-500 block">Trade License</Link>
                                    </span>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>

                {/* Links at the bottom of the sidebar in mobile */}
                <div className="absolute bottom-0 left-0 w-full px-4 py-6 bg-white flex flex-col items-center gap-4 ">
                    <ul className="space-y-4 text-center">
                        <li>
                            <span onClick={toggleSidebar}>
                                <Link href="/about-us" className="text-gray-800 hover:text-blue-500">About Us</Link>
                            </span>
                        </li>
                        <li>
                            <span onClick={toggleSidebar}>
                                <Link href="/contact-us" className="text-gray-800 hover:text-blue-500">Contact Us</Link>
                            </span>
                        </li>
                    </ul>
                    <span className='w-full flex items-center' onClick={toggleSidebar}>
                        <Link href="/apply" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 mx-auto rounded-md w-full text-center font-semibold">Apply Now</Link>
                    </span>
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
