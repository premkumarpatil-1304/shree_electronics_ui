"use client";

import React, { useEffect, useState } from "react";

const reasons: string[] = [
    "Almost all spare parts available in‑house",
    "Low‑cost, transparent service charges",
    "Repairs for TVs & appliances",
    "Door‑to‑door pickup and delivery in selected areas",
    "Experienced technicians & trusted local support",
];

const WhyChooseUs: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        const id = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % reasons.length);
        }, 3000);

        return () => clearInterval(id);
    }, []);

    return (
        <section className="relative overflow-hidden bg-black py-20">
            {/* subtle animated background blobs */}
            <div className="pointer-events-none absolute inset-0 opacity-20">
                <div className="absolute -top-10 left-10 w-64 h-64 bg-[#FF7A00] rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#CC6200] rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="relative max-w-5xl mx-auto px-4 z-10">
                {/* Eyebrow */}
                <div className="flex items-center gap-4 mb-4">
                    <span className="inline-block w-14 h-[3px] bg-[#FF7A00]" />
                    <span className="uppercase tracking-wider text-sm font-semibold text-[#FF7A00]">
                        Why Choose Us
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
                    Shree Electronics – All Your
                    <span className="block text-[#FF7A00]">
                        Device Repairs Under One Roof
                    </span>
                </h2>

                <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl">
                    From TVs to home appliances, we provide
                    fast, reliable and affordable repair services with genuine or
                    high‑quality parts and a friendly local team.
                </p>

                {/* Animated pill showing rotating reasons */}
                <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-[#FF7A00]/40 bg-white/5 px-5 py-3 backdrop-blur-md">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#FF7A00] text-black text-sm font-bold">
                        ⭐
                    </span>
                    <span className="text-sm md:text-base text-gray-100">
                        {reasons[activeIndex]}
                    </span>
                </div>

                {/* Bullet list */}
                <div className="space-y-5">
                    <WhyPoint
                        title="All Major Parts Available"
                        text="Most common boards, screens, batteries and components are kept in stock so your repair doesn’t have to wait for parts."
                    />
                    <WhyPoint
                        title="Low‑Cost, Honest Pricing"
                        text="Clear estimates before repair, no hidden charges and the right solution based on device age and your budget."
                    />
                    <WhyPoint
                        title="Everything Repaired Here"
                        text="LED/LCD TVs, inverters and more – one service center for almost every device at home or office."
                    />
                    <WhyPoint
                        title="Door‑to‑Door Convenience"
                        text="Pickup and drop service in selected areas so you can get your device repaired without stepping out."
                    />
                    <WhyPoint
                        title="Trusted Local Support"
                        text="Years of experience, repeat customers and word‑of‑mouth trust across Akola and nearby areas."
                    />
                </div>

                {/* Subtle divider dots */}
                <div className="mt-10 flex gap-2">
                    <span className="w-2 h-2 bg-[#FF7A00] rounded-full" />
                    <span className="w-2 h-2 bg-[#FF7A00]/60 rounded-full" />
                    <span className="w-2 h-2 bg-[#FF7A00]/40 rounded-full" />
                </div>
            </div>
        </section>
    );
};

type WhyPointProps = {
    title: string;
    text: string;
};

const WhyPoint: React.FC<WhyPointProps> = ({ title, text }) => {
    return (
        <div className="flex items-start gap-4">
            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-[#FF7A00] to-[#CC6200] text-black shadow-md">
                <span className="text-xl">✓</span>
            </div>
            <div>
                <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default WhyChooseUs;
