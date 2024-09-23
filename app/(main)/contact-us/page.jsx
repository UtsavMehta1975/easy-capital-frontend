"use client"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import axiosInstance from '@/utils/axios';
import Map from '@/components/Map';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState('');
    const [errors, setErrors] = useState({
        name: { error: false, message: 'Name is required' },
        mobile: { error: false, message: 'Mobile number should be of 10 digits' },
        email: { error: false, message: 'Email is required' },
    });

    const validateData = () => {
        const updatedErrors = { ...errors };

        updatedErrors.name.error = !name;
        updatedErrors.email.error = !email || !email.match(/(.+)@(.+){2,}\.(.+){2,}/);
        updatedErrors.email.message = updatedErrors.email.error ? 'Please enter a valid email address' : 'Email is required';
        updatedErrors.mobile.error = !mobile || mobile.length !== 10;

        setErrors(updatedErrors);

        return !updatedErrors.name.error && !updatedErrors.email.error && !updatedErrors.mobile.error;
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setMobile('');
        setMessage('');
    };

    const resetErrors = () => {
        setErrors({
            name: { error: false, message: 'Name is required' },
            mobile: { error: false, message: 'Mobile number should be of 10 digits' },
            email: { error: false, message: 'Email is required' },
        });
    };

    const sendContact = async () => {
        if (validateData()) {
            setSending(true);
            try {
                await axiosInstance.post(`/contact-us`, {
                    name,
                    email,
                    phone: mobile,
                    message,
                });

                setSuccess('Thank you for contacting us. Our team will reach out to you soon!');
                resetForm();
                resetErrors();
            } catch (error) {
                console.log(error);
                setSending(false);
            }
            setSending(false);
        }
    };

    return (
        <div className="w-[90%] mx-auto py-20">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row-reverse gap-10">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h4 className="font-medium text-lg">Have a question in your mind?</h4>
                        <h1 className="font-semibold text-3xl md:text-5xl mt-1 text-blue-500">Get in touch with us</h1>
                        <div className="flex flex-col gap-6 mt-10">
                            <div className="flex flex-col text-base">
                                {errors.name.error && <span className="pl-1 text-[0.8rem] text-[#EE4B2B]">{errors.name.message}</span>}
                                <input
                                    placeholder="Name"
                                    className={`font-light rounded-full duration-200 bg-[#EDF2F7] appearance-none border-2 w-full py-2 px-4 text-gray-700 leading-tight outline-none ${errors.name.error ? 'border-[#EE4B2B] focus:border-[#EE4B2B]' : 'border-[#fff] focus:border-blue-500'
                                        }`}
                                    value={name}
                                    onChange={(e) => setName(e.target.value.replace(/[^a-zA-Z ]/g, ''))}
                                />
                            </div>
                            <div className="flex flex-col lg:flex-row gap-6 items-end">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className={`font-light rounded-full duration-200 bg-[#EDF2F7] appearance-none border-2 w-full py-2 px-4 text-gray-700 leading-tight outline-none ${errors.email.error ? 'border-[#EE4B2B] focus:border-[#EE4B2B]' : 'border-[#fff] focus:border-blue-500'
                                        }`}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="number"
                                    placeholder="Phone"
                                    maxLength="10"
                                    className={`font-light rounded-full duration-200 bg-[#EDF2F7] appearance-none border-2 w-full py-2 px-4 text-gray-700 leading-tight outline-none ${errors.mobile.error ? 'border-[#EE4B2B] focus:border-[#EE4B2B]' : 'border-[#fff] focus:border-blue-500'
                                        }`}
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                />
                            </div>
                            <textarea
                                rows="7"
                                placeholder="Your Message..."
                                className="font-light rounded-lg duration-200 bg-[#EDF2F7] appearance-none border-2 w-full py-2 px-4 text-gray-700 leading-tight outline-none border-[#fff] focus:border-blue-500"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button
                                className="max-w-fit ml-auto bg-blue-500 text-white font-semibold py-2 px-4 rounded-full disabled:opacity-50"
                                onClick={sending ? null : sendContact}
                                disabled={sending}
                            >
                                {sending ? 'Sending...' : 'Send'}
                            </button>
                            {success && <span className="-mt-2 text-[#50C878] font-medium italic text-[0.9rem] text-right">{success}</span>}
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex flex-col gap-6">
                        <div className="w-full h-full min-h-[30vh]">
                            <Map />
                            {/* <div className="w-full h-full min-h-[30vh] bg-gray-200">Map Placeholder</div> */}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-md bg-blue-500 p-4 flex items-center">
                                <div className="flex items-center gap-4">
                                    <FontAwesomeIcon icon={faLocationDot} className="text-white" />
                                    <p className="font-light text-[0.9rem] text-[#fff]">
                                        Maruti Industrial Development Area, Plot 23, Sector 18, Gurugram, Haryana 122015
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-md bg-blue-500 p-4 flex flex-col gap-4">
                                <a href="tel:+918745945682" className="flex items-center gap-4">
                                    <FontAwesomeIcon icon={faPhone} className="text-white" />
                                    <p className="font-light text-[0.9rem] text-[#fff]">+91 87459 45682</p>
                                </a>
                                <a href="mailto:support@easycapital.co.in" className="flex items-center gap-4">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                                    <p className="font-light text-[0.9rem] text-[#fff] break-words">support@easycapital.co.in</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
