"use client";
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import autoplay from 'embla-carousel-autoplay';

const testimonials = [
    {
        quote: `"As a small business owner, securing a loan can be a daunting task. Easy Capital made it simple and stress-free. The platform allowed me to compare rates from various RBI-approved lenders, and I found a great deal that suited my business's needs. The customer service was exceptional, guiding me through each step of the process. I couldn't be happier with my experience!"`,
        name: 'Arvind Shah',
        location: 'Bihar, India'
    },
    {
        quote: `"I was looking for a loan to expand my manufacturing business, but I didn't know where to start. Easy Capital came to the rescue. The platform was easy to use, and I appreciated the range of options from reputable NBFCs and banks. The team at Easy Capital provided excellent advice, helping me choose the best loan for my business. Thanks to them, my business is now thriving."`,
        name: 'Eashan',
        location: 'Bihar, India'
    },
    {
        quote: `"Easy Capital is a game-changer! I was struggling to find a loan that matched my business's growth plans, but with Easy Capital, I could easily compare multiple offers from trusted lenders. Their transparent approach and focus on RBI-approved financial institutions gave me peace of mind. The application process was quick and efficient, and I received my loan in record time."`,
        name: 'Pratap Kumar Roy',
        location: 'Telangana, India'
    },
    {
        quote: `"After searching for weeks to secure a business loan, I stumbled upon Easy Capital, and I'm so glad I did. The platform made comparing loans from different banks and NBFCs straightforward, and the customer support team was always ready to assist. With their help, I got the perfect loan to renovate my restaurant. I highly recommend Easy Capital to any business owner looking for reliable loan options."`,
        name: 'Prakash S',
        location: 'Uttar Pradesh, India'
    },
    {
        quote: `"I received my MSME loan from Easy Capital much faster than I expected, thanks to their efficient team. They guided me throughout the process and ensured all my documents were in order. Their support was invaluable, making my experience smooth and stress-free. Highly recommended for MSME financing!"`,
        name: 'Anjali Singh',
        location: 'Uttrakhand, India'
    },
    {
        quote: `"I applied for an unsecured business loan through Easy Capital and was amazed by the quick approval process. The team was incredibly supportive, answering all my queries promptly. Their professional approach made the experience smooth and hassle-free. Highly recommend their services for anyone in need of financial assistance!"`,
        name: 'Rajesh Kumar',
        location: 'Uttrakhand, India'
    },
    {
        quote: `"The line of credit service at Easy Capital was exactly what my business needed. The process was quick and transparent, with no hidden charges. The team walked me through every step, ensuring I understood the terms clearly. I highly recommend them for anyone needing financial flexibility!"`,
        name: 'Priya Patil',
        location: 'Jammu, India'
    },
    {
        quote: `"I took out a secured business loan with Easy Capital, and the interest rates were very competitive compared to other lenders. The entire application process was straightforward, and their customer service was outstanding. I felt supported at every stage. Highly recommend for business financing!"`,
        name: 'Amit Deshmukh',
        location: 'Uttar Pradesh, India'
    },
    {
        quote: `"Thanks to Easy Capital's machinery loan service, we successfully upgraded our production equipment. The process was seamless, and their team provided excellent support. They understood our requirements and helped us choose the right financing option. Highly satisfied with the service and results!"`,
        name: 'Sanjay Joshi',
        location: 'Uttrakhand, India'
    },
    {
        quote: `"The business loan for women program at Easy Capital empowered me to start my e-commerce venture. The application process was efficient, and their team provided guidance throughout. I appreciated their commitment to supporting women entrepreneurs. Highly recommend this service for aspiring businesswomen!"`,
        name: 'Neha Rao',
        location: 'Uttar Pradesh, India'
    },
    {
        quote: `"My experience with GST registration through Easy Capital was smooth and hassle-free. The team was knowledgeable and answered all my questions promptly. They guided me through the entire process, ensuring I had all the necessary documentation. I would highly recommend their services for anyone needing GST assistance!"`,
        name: 'Rahul Verma',
        location: 'Telangana, India'
    },
    {
        quote: `"I was impressed with Easy Capital's GST filing service. The team was professional and organized, making the entire process seamless. They ensured all my documents were accurate and submitted on time. I highly recommend them for anyone looking for reliable GST support!"`,
        name: 'Sneha Gupta',
        location: 'Uttar Pradesh, India'
    },
    {
        quote: `"Their service for GST annual returns at Easy Capital was thorough and efficient. I appreciated how they took the time to explain the process and ensured everything was in order. Their attention to detail and professionalism made a potentially stressful task much easier. Highly recommend!"`,
        name: 'Vikram Singh',
        location: 'Bhopal, India'
    },
    {
        quote: `"Cancelling my GST registration was made easy with Easy Capital's expert help. They guided me through the necessary steps and ensured I had all the required documents ready. The service was quick and efficient. I highly recommend them for any GST-related assistance!"`,
        name: 'Pooja Sharma',
        location: 'Uttar Pradesh, India'
    },
    {
        quote: `"The Udhyam certificate process with Easy Capital was straightforward, and I received my certificate quickly. The team was very supportive, answering all my queries and guiding me through the documentation. Their efficiency and professionalism made the entire experience smooth. I highly recommend their services for MSMEs!"`,
        name: 'Rohit Kumar',
        location: 'Uttar Pradesh, India'
    },
    {
        quote: `"Registering for FSSAI with Easy Capital was a breeze thanks to their excellent assistance. They explained the entire process clearly and helped me gather the necessary documents. I was impressed by their professionalism and prompt responses. I highly recommend their services for anyone needing food business registration!"`,
        name: 'Manisha Rani',
        location: 'Bihar, India'
    },
    {
        quote: `"The halal registration service from Easy Capital was outstanding. They guided me through each step and made the process incredibly simple. Their team was knowledgeable and responsive, addressing all my concerns promptly. I couldn’t have done it without their help. Highly recommend for halal certification!"`,
        name: 'Amit Yadav',
        location: 'Haryana, India'
    },
    {
        quote: `"Obtaining my trade license was easy with Easy Capital's professional assistance. They handled all the paperwork and ensured I had everything in order. Their prompt communication and guidance throughout the process made it stress-free. I highly recommend their services for any business licensing needs!"`,
        name: 'Shweta Menon',
        location: 'MP, India'
    },
    {
        quote: `"The Startup India program provided by Easy Capital gave me the support I needed to launch my business. Their team was knowledgeable and helped me navigate the process smoothly. I appreciated their commitment to startups and the resources they offered. Highly recommend for aspiring entrepreneurs!"`,
        name: 'Karthik Nair',
        location: 'Telangana, India'
    },
    {
        quote: `"I had a great experience obtaining a business loan through Easy Capital. The team was very professional, and the application process was quick and straightforward. They guided me through every step, ensuring I understood everything. I highly recommend them for business financing!"`,
        name: 'Divya Reddy',
        location: 'Hydrabad, India'
    },
    {
        quote: `"Easy Capital's line of credit options provided the flexibility my business needed. The application process was quick, and their team was very supportive in explaining the terms. I felt valued as a client, and their service exceeded my expectations. Highly recommend for financial support!"`,
        name: 'Vijay Kumar',
        location: 'Uttrakhand, India'
    },
    {
        quote: `"I was very satisfied with the secured business loan service from Easy Capital. The process was efficient, and the interest rates were competitive. Their team was incredibly helpful in answering my questions and guiding me through the documentation. I would definitely recommend their services!"`,
        name: 'Nisha Iyer',
        location: 'Andhra Pradesh, India'
    },
    {
        quote: `"The assistance I received with my GST filing from Easy Capital was top-notch. The team was organized and made sure everything was submitted accurately and on time. I felt relieved knowing they were handling my GST requirements. Highly recommend their services for reliable support!"`,
        name: 'Suresh Bhat',
        location: 'Moradabad, India'
    },
    {
        quote: `"The machinery loan service from Easy Capital was a game-changer for my business. The team guided me through the entire process and helped me find the best financing options. I appreciate their professionalism and support. I highly recommend them for machinery financing!"`,
        name: 'Ravi Prakash',
        location: 'Uttar Pradesh, India'
    },
];

const Testimonials = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay({ delay: 10000 })]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (emblaApi) {
            emblaApi.on('select', onSelect);
        }
    }, [emblaApi, onSelect]);

    return (
        <section className="bg-gradient-to-tr from-blue-50 to-blue-200 py-2">
            <div className="max-w-screen-xl px-4 py-4 mx-auto text-center lg:py-8 lg:px-4">
                <h2 className="text-5xl font-bold text-blue-600 mb-4">Success Stories</h2>
                <p className="mb-4 text-lg text-gray-700">
                    Here are few stories from our satisfied clients who have successfully secured loans with us.
                </p>

                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        {testimonials.map((testimonial, index) => (
                            <div className="embla__slide" key={index}>
                                <figure className="max-w-screen-md mx-auto cursor-default bg-white rounded-lg shadow-xl p-4 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                                    <svg className="h-12 mx-auto mb-3 text-blue-500" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                    </svg>
                                    <blockquote>
                                        <p className="text-lg md:text-2xl font-medium text-gray-900">{testimonial.quote}</p>
                                    </blockquote>
                                    <figcaption className="flex items-center justify-center mt-4 space-x-3">
                                        <div className="pr-3 font-semibold text-gray-900 border-r border-gray-400">{testimonial.name}</div>
                                        <div className=" text-sm text-gray-500">{testimonial.location}</div>
                                    </figcaption>
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="embla__dots mt-4">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`embla__dot ${index === selectedIndex ? 'is-selected' : ''}`}
                            onClick={() => emblaApi && emblaApi.scrollTo(index)}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                .embla {
                    overflow: hidden;
                    width: 100%;
                }
                .embla__container {
                    display: flex;
                }
                .embla__slide {
                    min-width: 100%;
                    padding: 1rem;
                }
                .embla__dots {
                    display: flex;
                    justify-content: center;
                }
                .embla__dot {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    margin: 0 0.5rem;
                    background-color: #cbd5e1;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                .embla__dot.is-selected {
                    background-color: #1e3a8a;
                }
                .embla__dot:hover {
                    background-color: #4f46e5;
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
