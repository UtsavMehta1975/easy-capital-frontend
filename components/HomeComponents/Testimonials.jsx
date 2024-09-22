"use client"
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
];


const Testimonials = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay({ delay: 2500 })]);
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
        <section className="bg-white">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <h2 className="text-5xl font-bold text-blue-500 mb-4">Success Stories</h2>
                <p className="mb-8 text-lg text-gray-700">Here are few stories from our satisfied clients who have successfully secured loans with us. Our clients rave about our efficient loan process, competitive rates, and exceptional customer service. Explore their experiences to see how Easy Capital can help you achieve your financial goals with confidence and ease</p>

                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        {testimonials.map((testimonial, index) => (
                            <div className="embla__slide" key={index}>
                                <figure className="max-w-screen-md mx-auto cursor-default shadow-md shadow-slate-500 rounded p-4">
                                    <svg className="h-12 mx-auto mb-3 text-blue-500" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                    </svg>
                                    <blockquote>
                                        <p className="md:text-2xl text-lg font-medium text-gray-900">{testimonial.quote}</p>
                                    </blockquote>
                                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                        <div className="pr-3 font-medium text-gray-900 border-r border-gray-500">{testimonial.name}</div>
                                        <div className="pl-0 text-sm font-light text-gray-500">{testimonial.location}</div>
                                    </figcaption>
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="embla__dots">
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
                    margin-top: 1rem;
                }
                .embla__dot {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    margin: 0 0.5rem;
                    background-color: #ccc;
                    cursor: pointer;
                }
                .embla__dot.is-selected {
                    background-color: #1e3a8a; /* Tailwind's blue-500 */
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
