"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function ServicesPage() {
    // Testimonials data
    const testimonials = [
        {
            name: "Rajesh Kumar",
            location: "Akola",
            review:
                "My laptop motherboard was dead and Shree Electronics repaired it in just 2 days. Great service and honest pricing!",
            rating: 5,
        },
        {
            name: "Priya Deshmukh",
            location: "PCMC",
            review:
                "They replaced my phone screen with genuine parts. Very professional and quick turnaround.",
            rating: 5,
        },
        {
            name: "Amit Joshi",
            location: "Akola",
            review:
                "TV repair done at my home. No need to carry heavy TV to the shop. Highly recommend their door‑to‑door service!",
            rating: 5,
        },
        {
            name: "Sneha Patil",
            location: "Akola",
            review:
                "Inverter was making noise and not charging properly. Technician came home, diagnosed the issue and fixed it on the spot.",
            rating: 5,
        },
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(id);
    }, [testimonials.length]);

    // Services data
    const services = [
        
        {
            title: "CCTV System Setup & Installation",
            icon: "📹",
            items: [
                "CCTV camera installation (indoor & outdoor)",
                "DVR / NVR setup & configuration",
                "IP camera & wireless camera setup",
                "Cable routing & power supply installation",
                "Remote viewing setup (mobile app & PC access)",
                "Camera repair, lens cleaning & angle adjustment",
                "Hard drive upgrade & storage expansion",
            ],
        },

       
        {   
            title: "LED / LCD TV Repair",
            icon: "📺",
            items: [
                "Display issues (lines, dim, flickering)",
                "Power supply & board repair",
                "Panel replacement",
                "Remote & connectivity issues",
                "Software update & smart TV setup",
            ],
        },
        {
            title: "Home Appliance Repair",
            icon: "🔌",
            items: [
                "Inverter repair & battery replacement",
                "Washing machine service",
                "Refrigerator gas filling & cooling issues",
                "Microwave oven repair",
                "Mixer grinder & kitchen appliances",
                "RO Repair",
                "Geyser Repair",
                "Switch board & wiring issues",
            ],
        },
    ];

    // Products data
    const products = [
        {
            title: "Spare Parts",
            icon: "🛠️",
            items: [
                "Mobile screens",
                
                "TV panels & power boards",
                
            ],
        },
        {
            title: "Accessories",
            icon: "🎧",
            items: [
                "Chargers & cables",
                "Phone cases & screen protectors",
                "HDMI cables & adapters",
            ],
        },
        {
            title: "Refurbished Devices",
            icon: "♻️",
            items: [
                
                "LED TVs with warranty",
                "Tested inverters",
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-black text-white">
            {/* HERO / INTRO */}
            <section className="relative overflow-hidden py-16 px-4">
                <div className="pointer-events-none absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-[#FF7A00] rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#CC6200] rounded-full blur-3xl animate-pulse" />
                </div>

                <div className="relative max-w-5xl mx-auto text-center">
                    <span className="inline-block bg-[#FF7A00] text-black px-6 py-2 rounded-full text-xs font-semibold tracking-wide mb-6">
                        Our Services
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Complete Electronics Repair & Sales
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        From quick diagnostics to complex board‑level repairs, Shree Electronics provides trusted,
                        affordable services for all your devices—smartphones, laptops, TVs, inverters and more.
                    </p>
                </div>
            </section>

            {/* SECTION 1: SERVICES OFFERED */}
            <section className="py-20 px-4 bg-[#050505]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            What We Repair
                        </h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Multi‑brand service center covering a wide range of devices and faults.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="p-6 bg-black border border-[#1b1b1b] rounded-xl hover:border-[#FF7A00] transition-all duration-300 hover:shadow-xl hover:shadow-[#FF7A00]/20"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="text-5xl">{service.icon}</div>
                                    <h3 className="text-2xl font-bold text-white">
                                        {service.title}
                                    </h3>
                                </div>
                                <ul className="space-y-2 text-gray-300">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-[#FF7A00] mt-1">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 2: PRODUCTS WE SELL */}
            <section className="py-20 px-4 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Products & Parts We Sell
                        </h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Genuine and compatible spare parts, accessories, and refurbished devices.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {products.map((product, idx) => (
                            <div
                                key={idx}
                                className="p-6 bg-[#050505] border border-[#1b1b1b] rounded-xl hover:border-[#FF7A00] transition-all duration-300 hover:shadow-xl hover:shadow-[#FF7A00]/20"
                            >
                                <div className="text-5xl mb-4">{product.icon}</div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {product.title}
                                </h3>
                                <ul className="space-y-2 text-gray-300">
                                    {product.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-[#FF7A00]">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: DOOR-TO-DOOR SERVICE */}
            <section className="py-20 px-4 bg-[#050505]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left: content */}
                        <div>
                            <span className="inline-block bg-[#FF7A00]/10 text-[#FF7A00] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                Convenience at Your Doorstep
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Door‑to‑Door Repair Service
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                Don't have time to visit our service center? No problem. We offer
                                free pickup and delivery service in selected areas of Akola and PCMC.
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#FF7A00] text-xl">✓</span>
                                    <span>Schedule a pickup via call or WhatsApp</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#FF7A00] text-xl">✓</span>
                                    <span>Technician collects your device from your location</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#FF7A00] text-xl">✓</span>
                                    <span>Repair diagnosis & estimate shared with you</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#FF7A00] text-xl">✓</span>
                                    <span>Device delivered back after repair, tested & ready</span>
                                </li>
                            </ul>
                        </div>

                        {/* Right: illustration / visual card */}
                        <div className="relative h-80 rounded-2xl overflow-hidden border-2 border-[#FF7A00] shadow-xl shadow-[#FF7A00]/30">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/90 to-black/90 flex items-center justify-center p-8">
                                <div className="text-center text-white">
                                    <div className="text-6xl mb-4">🚚</div>
                                    <h3 className="text-2xl font-bold mb-2">
                                        Free Pickup & Drop*
                                    </h3>
                                    <p className="text-lg text-gray-200">
                                        Available in selected areas. Call us to confirm coverage in your locality.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: CUSTOMER REVIEWS (SLIDER) */}
            <section className="py-20 px-4 bg-black">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            What Our Customers Say
                        </h2>
                        <p className="text-lg text-gray-300">
                            Real feedback from happy customers across Akola & PCMC.
                        </p>
                    </div>

                    {/* Testimonial card slider */}
                    <div className="relative bg-[#050505] border border-[#1b1b1b] rounded-2xl p-8 md:p-12 shadow-xl overflow-hidden">
                        {/* decorative blob */}
                        <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 bg-[#FF7A00]/10 rounded-full blur-3xl" />

                        <div className="relative">
                            {/* Stars */}
                            <div className="flex justify-center gap-1 mb-4">
                                {Array.from({ length: testimonials[currentTestimonial].rating }).map(
                                    (_, i) => (
                                        <span key={i} className="text-[#FF7A00] text-2xl">
                                            ★
                                        </span>
                                    )
                                )}
                            </div>

                            {/* Review text */}
                            <p className="text-lg md:text-xl text-gray-200 text-center italic mb-6 leading-relaxed">
                                "{testimonials[currentTestimonial].review}"
                            </p>

                            {/* Name & location */}
                            <div className="text-center">
                                <h4 className="text-xl font-bold text-white">
                                    {testimonials[currentTestimonial].name}
                                </h4>
                                <p className="text-sm text-gray-400">
                                    {testimonials[currentTestimonial].location}
                                </p>
                            </div>
                        </div>

                        {/* Navigation dots */}
                        <div className="flex justify-center gap-2 mt-8">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentTestimonial(idx)}
                                    className={`h-2.5 rounded-full transition-all ${idx === currentTestimonial
                                            ? "bg-[#FF7A00] w-8"
                                            : "bg-gray-600 w-2.5 hover:bg-gray-500"
                                        }`}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-[#FF7A00] to-black text-white py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Fix Your Device?
                    </h2>
                    <p className="text-xl text-gray-100 mb-8">
                        Visit us or book a free pickup today. Fast, affordable, reliable repairs.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-black text-[#FF7A00] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#111111] transition-colors shadow-lg shadow-black/60"
                    >
                        Contact Us Now
                    </a>
                </div>
            </section>
        </main>
    );
}
