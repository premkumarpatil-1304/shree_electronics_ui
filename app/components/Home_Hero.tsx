"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import HeroCarousel from './HeroCarousel';

export default function Hero() {
    const [currentVideo, setCurrentVideo] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const strings = [
        'Electronic devices',
        'Fan',
        'Fridge',
        'Tvs',
        'CCTvs',
        'Washing Machines',
        'Microwaves',
        'Air Conditioners',
    ];

    const videos = [
        '/videos/video1.mp4',
        '/videos/video2.mp4',
        '/videos/video3.mp4',
    ];

    // Typewriter effect
    useEffect(() => {
        const currentString = strings[currentStringIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayedText.length < currentString.length) {
                    setDisplayedText(currentString.slice(0, displayedText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText(displayedText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentStringIndex((prev) => (prev + 1) % strings.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentStringIndex]);

    // Video carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideo((prev) => (prev + 1) % videos.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [videos.length]);

    return (
        <section className="bg-black text-white  h-[90vh] flex items-center relative overflow-hidden">
            {/* Animated Background */}
            {/* <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF7A00] rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF7A00] rounded-full blur-3xl animate-pulse"></div>
            </div> */}

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-7 items-center">
                    {/* Left Side - Content */}
                    <div className="text-center lg:text-left">
                        <span className="inline-block bg-[#FF7A00] text-white px-6 py-2  rounded-full text-m font-bold mb-2 animate-bounce">
                            Welcome
                        </span>
                        <h1 className='text-6xl md:text-4xl lg:text-6xl font-bold mb-2 leading-tight'>Shree Electronics</h1>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            We Repair Devices Such as{" "}
                            <span className="text-[#FF7A00]">
                                {displayedText}
                                <span className="animate-pulse">|</span>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl mb-8 text-gray-300">
                            Mobile Phones • Laptops • Desktops • TVs • Home Appliances
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/contact"
                                className="bg-[#FF7A00] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#CC6200] hover:scale-105 transition-all duration-200 shadow-lg shadow-[#FF7A00]/40 text-center"
                            >
                                Book a Repair
                            </Link>
                            <Link
                                href="/services"
                                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-black transition-all duration-200 text-center"
                            >
                                View Repair Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <HeroCarousel
                    slides={[
                        { src: "/home_page/hero_carousel_1.png", alt: "Shree Electronics showcase 1" },
                        { src: "/home_page/hero_carousel_2.png", alt: "Shree Electronics showcase 2" },
                        { src: "/home_page/hero_carousel_3.png", alt: "Shree Electronics showcase 3" },
                    ]}
                    interval={5000}
                />
            </div>    

                   
            
        </section>
    );
}
