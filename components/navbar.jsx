"use client";
import { NavLoanContent } from '@/data/loanContent';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaBriefcase, FaInfoCircle, FaEnvelope, FaRegistered, FaGavel } from 'react-icons/fa';

// Import Font Awesome for the chevron icons
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [businessLoanDropdownOpen, setBusinessLoanDropdownOpen] = useState(false);
    const [registrationDropdownOpen, setRegistrationDropdownOpen] = useState(false);
    const [gstDropdownOpen, setGstDropdownOpen] = useState(false);

    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        if (sidebarOpen) {
            setBusinessLoanDropdownOpen(false);
            setGstDropdownOpen(false);
            setRegistrationDropdownOpen(false);
        }
        setSidebarOpen(!sidebarOpen);
    };

    const toggleDropdown = (dropdownType) => {
        switch (dropdownType) {
            case 'businessLoan':
                if (!businessLoanDropdownOpen) {
                    setRegistrationDropdownOpen(false);
                    setGstDropdownOpen(false);
                }
                setBusinessLoanDropdownOpen(!businessLoanDropdownOpen);
                break;
            case 'registration':
                if (!registrationDropdownOpen) {
                    setBusinessLoanDropdownOpen(false);
                    setGstDropdownOpen(false);
                }
                setRegistrationDropdownOpen(!registrationDropdownOpen);
                break;
            case 'gst':
                if (!gstDropdownOpen) {
                    setBusinessLoanDropdownOpen(false);
                    setRegistrationDropdownOpen(false);
                }
                setGstDropdownOpen(!gstDropdownOpen);
                break;
            default:
                break;
        }
    };

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
                <nav className="bg-gradient-to-b from-blue-100 to-white fixed top-0 left-0 w-full z-20 shadow-lg flex items-center justify-between px-4 py-2 backdrop-filter backdrop-blur-md">
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
                                <span className="text-2xl font-bold text-gray-800">
                                    <span className='text-blue-800'>Easy</span>Capital
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div className="hidden lg:flex space-x-6 items-center">
                        {/* Updated Home link - Removed icon */}
                        <Link href="/" className="text-gray-800 hover:text-blue-500 py-2 rounded-md text-md xl:text-lg font-medium transition duration-300 transform hover:scale-105">
                            Home
                        </Link>

                        <div className="relative" onMouseEnter={() => toggleDropdown('businessLoan')} onMouseLeave={() => toggleDropdown('businessLoan')}>
                            <span className="text-gray-800 hover:text-blue-500 py-2 rounded-md text-md xl:text-lg font-medium cursor-default transition duration-300 transform hover:scale-105">
                                Business Loan
                                <span className={`ml-2 transform transition-transform ${businessLoanDropdownOpen ? 'rotate-180' : ''}`}>
                                    {/* Updated dropdown icon */}
                                    <i className="fa-solid fa-chevron-down"></i>
                                </span>
                            </span>
                            <ul className={`absolute bg-white shadow-lg mt-2 space-y-2 transition-all duration-300 overflow-hidden text-sm w-max ${businessLoanDropdownOpen ? 'border border-gray-200 max-h-96' : 'max-h-0'}`}>
                                {Object.entries(NavLoanContent).map(([key, { title, link }]) => (
                                    <li key={key}>
                                        <Link href={link} className="text-gray-800 hover:text-blue-500 block px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-100">{title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative" onMouseEnter={() => toggleDropdown('gst')} onMouseLeave={() => toggleDropdown('gst')}>
                            <span className="text-gray-800 hover:text-blue-500 py-2 rounded-md text-md xl:text-lg font-medium cursor-default transition duration-300 transform hover:scale-105">
                                GST Services
                                <span className={`ml-2 transform transition-transform ${gstDropdownOpen ? 'rotate-180' : ''}`}>
                                    {/* Updated dropdown icon */}
                                    <i className="fa-solid fa-chevron-down"></i>
                                </span>
                            </span>
                            <ul className={`absolute bg-white shadow-lg mt-2 space-y-2 transition-all duration-300 overflow-hidden text-sm w-max ${gstDropdownOpen ? 'border border-gray-200 max-h-96' : 'max-h-0'}`}>
                                <li><Link href="/gst-services/gst-registration" className="text-gray-800 hover:text-blue-500 block px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-100">GST Registration</Link></li>
                                <li><Link href="/gst-services/gst-filling" className="text-gray-800 hover:text-blue-500 block px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-100">GST Filling</Link></li>
                                <li><Link href="/gst-services/gst-registration-cancelation" className="text-gray-800 hover:text-blue-500 block px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-100">GST Registration Cancelation</Link></li>
                                <li><Link href="/gst-services/gst-annual-return" className="text-gray-800 hover:text-blue-500 block px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-100">GST Annual Return</Link></li>
                            </ul>
                        </div>

                        <div className="relative" onMouseEnter={() => toggleDropdown('registration')} onMouseLeave={() => toggleDropdown('registration')}>
                            <span className="text-gray-800 hover:text-blue-500 py-2 rounded-md text-md xl:text-lg font-medium cursor-default transition duration-300 transform hover:scale-105">
                                Registration Services
                                <span className={`ml-2 transform transition-transform ${registrationDropdownOpen ? 'rotate-180' : ''}`}>
                                    {/* Updated dropdown icon */}
                                    <i className="fa-solid fa-chevron-down"></i>
                                </span>
                            </span>
                            <ul className={`absolute bg-white shadow-lg mt-2 space-y-2 transition-all duration-300 overflow-hidden text-sm w-max ${registrationDropdownOpen ? 'border border-gray-200 max-h-96' : 'max-h-0'}`}>
                                <li><Link href="/registration-services/halal-registration" className="text-gray-800 hover:text-blue-500 block px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-100">Halal Registration</Link></li>
                                <li><Link href="/registration-services/trade-license" className="text-gray-800 hover:text-blue-500 block px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-100">Trade License</Link></li>
                                <li><Link href="/registration-services/startup-india" className="text-gray-800 hover:text-blue-500 block px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-100">Startup India</Link></li>
                            </ul>
                        </div>
                        {/* Additional links */}
                        <Link href="/about-us" className="text-gray-800 hover:text-blue-500 py-2 rounded-md text-md xl:text-lg font-medium transition duration-300 transform hover:scale-105 flex items-center gap-2">
                            <FaInfoCircle size={20} /> About Us
                        </Link>
                        <Link href="/contact-us" className="text-gray-800 hover:text-blue-500 py-2 rounded-md text-md xl:text-lg font-medium transition duration-300 transform hover:scale-105 flex items-center gap-2">
                            <FaEnvelope size={20} /> Contact Us
                        </Link>
                        </div>
                </nav>

                {/* Sidebar for mobile view */}
                <aside ref={sidebarRef} className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-30 transform transition-transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex items-center justify-between px-4 py-5 bg-gradient-to-b from-blue-100 to-white shadow">
                        <span onClick={toggleSidebar} className="cursor-pointer text-gray-800 hover:text-blue-500 focus:outline-none">
                            <FiMenu size={24} />
                        </span>
                    </div>
                    <ul className="mt-4 space-y-3 px-4">
                        {/* Home link */}
                        <li>
                            <Link href="/" onClick={toggleSidebar} className="text-gray-800 hover:text-blue-500 block flex items-center gap-3">
                                Home
                            </Link>
                        </li>
                        <li>
                            <div onClick={() => toggleDropdown('businessLoan')} className="mb-3 flex justify-between items-center text-gray-800 hover:text-blue-500 cursor-pointer">
                                <span className="flex items-center gap-3"><FaBriefcase size={20} /> Business Loan</span>
                                <span className={`transform transition-transform ${businessLoanDropdownOpen ? 'rotate-180' : ''}`}>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </span>
                            </div>
                            <ul className={`pl-4 space-y-2 transition-all duration-500 overflow-hidden ${businessLoanDropdownOpen ? 'max-h-96' : 'max-h-0'}`}>
                                {Object.entries(NavLoanContent).map(([key, { title, link }]) => (
                                    <li key={key}>
                                        <Link href={link} onClick={toggleSidebar} className="text-gray-800 hover:text-blue-500 block">{title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <div onClick={() => toggleDropdown('gst')} className="mb-3 flex justify-between items-center text-gray-800 hover:text-blue-500 cursor-pointer">
                                <span className="flex items-center gap-3"><FaGavel size={20} /> GST Services</span>
                                <span className={`transform transition-transform ${gstDropdownOpen ? 'rotate-180' : ''}`}>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </span>
                            </div>
                            <ul className={`pl-4 space-y-2 transition-all duration-500 overflow-hidden ${gstDropdownOpen ? 'max-h-96' : 'max-h-0'}`}>
                                <li><Link href="/gst-services/gst-registration" onClick={toggleSidebar} className="text-gray-800 hover:text-blue-500">GST Registration</Link></li>
                                <li><Link href="/gst-services/gst-filling" onClick={toggleSidebar} className="text-gray-800 hover:text-blue-500">GST Filling</Link></li>
                                <li><Link href="/gst-services/gst-registration-cancelation" onClick={toggleSidebar} className="text-gray-800 hover:text-blue-500">GST Registration Cancelation</Link></li>
                                <li><Link href="/gst-services/gst-annual-return" onClick={toggleSidebar} className="text-gray-800 hover:text-blue-500">GST Annual Return</Link></li>
                            </ul>
                        </li>
                        <li>
                            <div onClick={() => toggleDropdown('registration')} className="mb-3 flex justify-between items-center text-gray-800 hover:text-blue-500 cursor-pointer">
                                <span className="flex items-center gap-3"><FaRegistered size={20} /> Registration Services</span>
                                <span className={`transform transition-transform ${registrationDropdownOpen ? 'rotate-180' : ''}`}>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </span>
                            </div>
                            <ul className={`pl-4 space-y-2 transition-all duration-500 overflow-hidden ${registrationDropdownOpen ? 'max-h-96' : 'max-h-0'}`}>
                                <li><Link href="/registration-services/udhyam-certificate" onClick={toggleSidebar} className="text-gray-800 hover:text-blue-500">Udhyam Certificate</Link></li>
                                <li><Link href="/registration-services/fssai-registration" onClick={toggleSidebar} className="text-gray-800 hover:text-blue-500">FSSAI Registration</Link></li>
                                <li><Link href="/registration-services/halal-registration" onClick={toggleSidebar} className="text-gray-800 hover:text-blue-500">Halal Registration</Link></li>
                                <li><Link href="/registration-services/trade-license" onClick={toggleSidebar} className="text-gray-800 hover:text-blue-500">Trade License</Link></li>
                                <li><Link href="/registration-services/startup-india" onClick={toggleSidebar} className="text-gray-800 hover:text-blue-500">Startup India</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/about-us" onClick={toggleSidebar} className="text-gray-800 hover:text-blue-500 block flex items-center gap-3">
                                <FaInfoCircle size={20} /> About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact-us" onClick={toggleSidebar} className="text-gray-800 hover:text-blue-500 block flex items-center gap-3">
                                <FaEnvelope size={20} /> Contact Us
                            </Link>
                        </li>
                    </ul>
                </aside>
            </nav>
            <div className="h-[70px]"></div>
        </>
    );
};

export default Navbar;

