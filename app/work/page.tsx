"use client";

import React, { useState } from "react";
import Image from "next/image";
import RepairAndSelling from "../components/RepairAndSelling";

export default function WorkPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    // Portfolio items – adjust image paths to match your /public folder structure
    const portfolioItems = [
        {
            id: 1,
            title: "CCTV Installation - Residential Complex",
            category: "cctv",
            description: "4-camera CCTV system with DVR, remote viewing & cable routing for apartment complex.",
            image: "/cctv_photos/cctv_one.png",
        },
        {
            id: 2,
            title: "Professional CCTV Services",
            category: "cctv",
            description: "24/7 monitoring, professional installation & remote access setup for homes and businesses.",
            image: "/cctv_photos/cctv_two.png",
        },
        {
            id: 3,
            title: "Outdoor AC Installation & Repair",
            category: "electrical",
            description: "Split AC installation, outdoor unit mounting & maintenance services.",
            image: "/working/site_photos.png",
        },
        {
            id: 4,
            title: "Electrical & Electronics Repair Services",
            category: "electrical",
            description: "AC, fridge, washing machine, RO, TV repair, CCTV installation, microwave, geyser & all electrical services.",
            image: "/electrical_Electronics_repair.png",
        },
    ];

    const categories = [
        { id: "all", label: "All Projects" },
        { id: "cctv", label: "CCTV Systems" },
        { id: "electrical", label: "Electrical Services" },
    ];

    const filteredItems =
        activeCategory === "all"
            ? portfolioItems
            : portfolioItems.filter((item) => item.category === activeCategory);

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
                        Our Work
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Real Projects, Real Results
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        From CCTV installations to electrical repairs, see how e-Shree has helped homes and
                        businesses across PCMC with trusted, professional service.
                    </p>
                </div>
            </section>

            {/* FILTER TABS */}
            <section className="py-8 px-4 bg-[#050505]">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeCategory === cat.id
                                        ? "bg-[#FF7A00] text-black shadow-lg shadow-[#FF7A00]/40"
                                        : "bg-[#1b1b1b] text-gray-300 hover:bg-[#2a2a2a] hover:text-white"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* PORTFOLIO GRID */}
            <section className="py-20 px-4 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
                        {filteredItems.map((item) => (
                            <div
                                key={item.id}
                                className="group relative bg-[#050505] rounded-2xl overflow-hidden border border-[#1b1b1b] hover:border-[#FF7A00] transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF7A00]/30 hover:-translate-y-2"
                            >
                                {/* Image */}
                                {/* Image */}
                                <div className="relative aspect-[3/4] overflow-hidden bg-[#0a0a0a]">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    <div className="absolute top-4 left-4">
                                        <span className="inline-block bg-[#FF7A00] text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                                            {item.category === "cctv" ? "CCTV" : "Electrical"}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#FF7A00] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Decorative corner accent */}
                                <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#FF7A00]/10 rounded-tl-full transform scale-0 group-hover:scale-100 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>

                    {/* Empty state */}
                    {filteredItems.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-xl text-gray-400">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </section>
            <RepairAndSelling />

            {/* STATS / HIGHLIGHTS */}
            <section className="py-20 px-4 bg-[#050505]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Trusted by Hundreds of Customers
                        </h2>
                        <p className="text-lg text-gray-300">
                            Delivering quality service across PCMC & Pune.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-black border border-[#1b1b1b] rounded-xl hover:border-[#FF7A00] transition-all">
                            <div className="text-5xl mb-4">📹</div>
                            <div className="text-4xl font-bold text-[#FF7A00] mb-2">200+</div>
                            <p className="text-gray-300">CCTV Systems Installed</p>
                        </div>

                        <div className="text-center p-8 bg-black border border-[#1b1b1b] rounded-xl hover:border-[#FF7A00] transition-all">
                            <div className="text-5xl mb-4">🔧</div>
                            <div className="text-4xl font-bold text-[#FF7A00] mb-2">500+</div>
                            <p className="text-gray-300">Repairs Completed</p>
                        </div>

                        <div className="text-center p-8 bg-black border border-[#1b1b1b] rounded-xl hover:border-[#FF7A00] transition-all">
                            <div className="text-5xl mb-4">⚡</div>
                            <div className="text-4xl font-bold text-[#FF7A00] mb-2">24/7</div>
                            <p className="text-gray-300">Support Available</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-[#FF7A00] to-black text-white py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl text-gray-100 mb-8">
                        Contact e-Shree today for CCTV installation, electrical repairs, or any other service.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-black text-[#FF7A00] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#111111] transition-colors shadow-lg shadow-black/60"
                    >
                        Get a Free Quote
                    </a>
                </div>
            </section>
            
        </main>
    );
}
