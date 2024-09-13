"use client";
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

    useEffect(() => {
        if (sidebarOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [sidebarOpen]);

    return (
        <>
            <nav>
                {/* Navbar */}
                <nav className="bg-white fixed top-0 left-0 w-full z-20 shadow-lg flex items-center justify-between px-4 py-2">
                    {/* Menu Icon + Logo */}
                    <div className="flex items-center lg:w-auto w-full justify-between flex-row-reverse lg:flex-row">
                        <span onClick={toggleSidebar} className="cursor-pointer text-gray-800 hover:text-blue-500 focus:outline-none lg:hidden">
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

                    {/* Links and Dropdowns */}
                    <div className="hidden lg:flex space-x-6 items-center">
                        <div className="relative" onMouseEnter={() => toggleDropdown('businessLoan')} onMouseLeave={() => toggleDropdown('businessLoan')} >
                            <span className="text-gray-800 hover:text-blue-500 py-2 rounded-md text-md xl:text-lg font-medium cursor-default">
                                Business Loan
                                <span className={`ml-2 transform transition-transform ${businessLoanDropdownOpen ? 'rotate-180' : ''}`}>&#9662;</span>
                            </span>
                            <ul className={`absolute bg-white shadow-lg mt-2 space-y-2 transition-all duration-300 overflow-hidden text-sm w-max  ${businessLoanDropdownOpen ? 'border border-gray-200 max-h-96' : 'max-h-0'}`}>
                                {Object.entries(NavLoanContent).map(([key, { title, link }]) => (
                                    <li key={key}>
                                        <Link href={link} className="text-gray-800 hover:text-blue-500 block px-4 py-2">{title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative" onMouseEnter={() => toggleDropdown('gst')} onMouseLeave={() => toggleDropdown('gst')} >
                            <span className="text-gray-800 hover:text-blue-500 py-2 rounded-md text-md xl:text-lg font-medium cursor-default">
                                GST Services
                                <span className={`ml-2 transform transition-transform ${gstDropdownOpen ? 'rotate-180' : ''}`}>&#9662;</span>
                            </span>
                            <ul className={`absolute bg-white shadow-lg mt-2 space-y-2 transition-all duration-300 overflow-hidden text-sm w-max ${gstDropdownOpen ? 'border border-gray-200 max-h-96' : 'max-h-0'}`}>
                                <li><Link href="/gst-services/gst-registration" className="text-gray-800 hover:text-blue-500 block px-4 py-2">GST Registration</Link></li>
                                <li><Link href="/gst-services/gst-filling" className="text-gray-800 hover:text-blue-500 block px-4 py-2">GST filling</Link></li>
                                <li><Link href="/gst-services/gst-registration-cancelation" className="text-gray-800 hover:text-blue-500 block px-4 py-2">GST Registration Cancelation</Link></li>
                                <li><Link href="/gst-services/gst-annual-return" className="text-gray-800 hover:text-blue-500 block px-4 py-2">GST Annual Return</Link></li>
                            </ul>
                        </div>

                        <div className="relative" onMouseEnter={() => toggleDropdown('registration')} onMouseLeave={() => toggleDropdown('registration')} >
                            <span className="text-gray-800 hover:text-blue-500 py-2 rounded-md text-md xl:text-lg font-medium cursor-default">
                                Registration Services
                                <span className={`ml-2 transform transition-transform ${registrationDropdownOpen ? 'rotate-180' : ''}`}>&#9662;</span>
                            </span>
                            <ul className={`absolute bg-white shadow-lg mt-2 space-y-2 transition-all duration-300 overflow-hidden text-sm w-max  ${registrationDropdownOpen ? 'border border-gray-200 max-h-96' : 'max-h-0'}`}>
                                <li><Link href="/registration-services/udhyam-certificate" className="text-gray-800 hover:text-blue-500 block px-4 py-2">Udhyam Certificate</Link></li>
                                <li><Link href="/registration-services/fssai-registration" className="text-gray-800 hover:text-blue-500 block px-4 py-2">FSSAI Registration</Link></li>
                                <li><Link href="/registration-services/halal-registration" className="text-gray-800 hover:text-blue-500 block px-4 py-2">HALAL Registration</Link></li>
                                <li><Link href="/registration-services/trade-license" className="text-gray-800 hover:text-blue-500 block px-4 py-2">Trade License</Link></li>
                            </ul>
                        </div>

                        <Link href="/about-us" className="text-gray-800 hover:text-blue-500 py-2 rounded-md text-md xl:text-lg font-medium">
                            About Us
                        </Link>
                        <Link href="/contact-us" className="text-gray-800 hover:text-blue-500 py-2 rounded-md text-md xl:text-lg font-medium">
                            Contact Us
                        </Link>
                    </div>
                </nav>

                {/* Sidebar (visible only on mobile) */}
                <aside
                    ref={sidebarRef}
                    className={`fixed top-0 right-0 lg:hidden h-screen bg-white shadow-lg transform transition-transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} z-30 w-64`}
                >
                    <div className="flex items-center justify-between px-4 pt-4 pb-1 md:py-4">
                        {/* Sidebar Menu Icon + Logo */}
                        <div className="flex items-center w-full justify-end">
                            <span onClick={toggleSidebar} className="cursor-pointer text-gray-800 hover:text-blue-500 focus:outline-none">
                                <FiMenu size={24} />
                            </span>
                        </div>
                    </div>
                    <div className="px-4">
                        <ul className="space-y-4 text-left max-h-[600px] overflow-auto">
                            <li>
                                <span onClick={toggleSidebar}>
                                    <Link href="/" className="text-gray-800 hover:text-blue-500 block">
                                        Home
                                    </Link>
                                </span>
                            </li>
                            <li>
                                <div onClick={() => toggleDropdown('businessLoan')} className="mb-3 flex justify-between items-center text-gray-800 hover:text-blue-500 cursor-pointer">
                                    Business Loan
                                    <span className={`transform transition-transform ${businessLoanDropdownOpen ? 'rotate-180' : ''}`}>&#9662;</span>
                                </div>
                                <ul className={`pl-4 space-y-2 transition-all duration-500 overflow-hidden ${businessLoanDropdownOpen ? 'max-h-96' : 'max-h-0'}`}>
                                    {Object.entries(NavLoanContent).map(([key, { title, link }]) => (
                                        <li key={key}>
                                            <Link href={link} className="text-gray-800 hover:text-blue-500 block">{title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li>
                                <div onClick={() => toggleDropdown('gst')} className="mb-3 flex justify-between items-center text-gray-800 hover:text-blue-500 cursor-pointer">
                                    GST Services
                                    <span className={`transform transition-transform ${gstDropdownOpen ? 'rotate-180' : ''}`}>&#9662;</span>
                                </div>
                                <ul className={`pl-4 space-y-2 transition-all duration-500 overflow-hidden ${gstDropdownOpen ? 'max-h-96' : 'max-h-0'}`}>
                                    <li><Link href="/gst-services/gst-registration" className="text-gray-800 hover:text-blue-500">GST Registration</Link></li>
                                    <li><Link href="/gst-services/gst-filling" className="text-gray-800 hover:text-blue-500">GST filling</Link></li>
                                    <li><Link href="/gst-services/gst-registration-cancelation" className="text-gray-800 hover:text-blue-500">GST Registration Cancelation</Link></li>
                                    <li><Link href="/gst-services/gst-annual-return" className="text-gray-800 hover:text-blue-500">GST Annual Return</Link></li>
                                </ul>
                            </li>
                            <li>
                                <div onClick={() => toggleDropdown('registration')} className="mb-3 flex justify-between items-center text-gray-800 hover:text-blue-500 cursor-pointer">
                                    Registration Services
                                    <span className={`transform transition-transform ${registrationDropdownOpen ? 'rotate-180' : ''}`}>&#9662;</span>
                                </div>
                                <ul className={`pl-4 space-y-2 transition-all duration-500 overflow-hidden ${registrationDropdownOpen ? 'max-h-96' : 'max-h-0'}`}>
                                    <li><Link href="/registration-services/udhyam-certificate" className="text-gray-800 hover:text-blue-500">Udhyam Certificate</Link></li>
                                    <li><Link href="/registration-services/fssai-registration" className="text-gray-800 hover:text-blue-500">FSSAI Registration</Link></li>
                                    <li><Link href="/registration-services/halal-registration" className="text-gray-800 hover:text-blue-500">HALAL Registration</Link></li>
                                    <li><Link href="/registration-services/trade-license" className="text-gray-800 hover:text-blue-500">Trade License</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/about-us" className="text-gray-800 hover:text-blue-500 block">About Us</Link>
                            </li>
                            <li>
                                <Link href="/contact-us" className="text-gray-800 hover:text-blue-500 block">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </aside>
            </nav>
            <div className="h-[70px]"></div>
        </>
    );
};

export default Navbar;
