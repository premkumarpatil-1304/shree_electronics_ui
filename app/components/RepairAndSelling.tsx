"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function RepairAndSelling() {
    const [activeTab, setActiveTab] = useState<"repair" | "selling">("repair");

    const repairServices = [
        { name: "Inverter Repair & Battery Replacement", icon: "🔋", image: "/icons/inverter.svg" },
        { name: "Washing Machine Service", icon: "🧺", image: "/icons/washing-machine.svg" },
        { name: "Refrigerator Gas Filling & Cooling Issues", icon: "❄️", image: "/icons/fridge.svg" },
        { name: "Microwave Oven Repair", icon: "🍽️", image: "/icons/microwave.svg" },
        { name: "Mixer Grinder & Kitchen Appliances", icon: "🥤", image: "/icons/mixer.svg" },
        { name: "RO Water Purifier Repair", icon: "💧", image: "/icons/ro.svg" },
        { name: "Geyser Repair", icon: "🚿", image: "/icons/geyser.svg" },
        { name: "Switch Board & Wiring Issues", icon: "🔌", image: "/icons/switchboard.svg" },
        { name: "LED / LCD TV Repair", icon: "📺", image: "/icons/tv.svg" },
    ];

    const sellingProducts = [
        { name: "TV Panels & Power Boards", icon: "📺", image: "/icons/tv-panel.svg" },
        { name: "Chargers & Cables", icon: "🔌", image: "/icons/charger.svg" },
        { name: "Phone Cases & Screen Protectors", icon: "📱", image: "/icons/phone-case.svg" },
        { name: "HDMI Cables & Adapters", icon: "🔗", image: "/icons/hdmi.svg" },
        { name: "Headphones", icon: "🎧", image: "/icons/headphones.svg" },
        { name: "Mouse", icon: "🖱️", image: "/icons/mouse.svg" },
        { name: "Keyboards", icon: "⌨️", image: "/icons/keyboard.svg" },
        { name: "LED Lights & Bulbs", icon: "💡", image: "/icons/bulb.svg" },
        { name: "Tube Lights", icon: "💡", image: "/icons/tubelight.svg" },
    ];

    return (
        <section className="py-20 px-4 bg-black">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Repairs & Products
                    </h2>
                    <p className="text-lg text-gray-300">
                        Professional repair services and quality products under one roof
                    </p>
                </div>

                {/* Tab Buttons */}
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab("repair")}
                        className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${activeTab === "repair"
                                ? "bg-[#FF7A00] text-black shadow-lg shadow-[#FF7A00]/40 scale-105"
                                : "bg-[#1b1b1b] text-gray-300 hover:bg-[#2a2a2a] hover:text-white"
                            }`}
                    >
                        🔧 Repair Services
                    </button>
                    <button
                        onClick={() => setActiveTab("selling")}
                        className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${activeTab === "selling"
                                ? "bg-[#FF7A00] text-black shadow-lg shadow-[#FF7A00]/40 scale-105"
                                : "bg-[#1b1b1b] text-gray-300 hover:bg-[#2a2a2a] hover:text-white"
                            }`}
                    >
                        🛒 Products We Sell
                    </button>
                </div>

                {/* Tab Content */}
                <div className="relative">
                    {/* Repair Services Tab */}
                    {activeTab === "repair" && (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                            {repairServices.map((service, idx) => (
                                <div
                                    key={idx}
                                    className="group p-6 bg-[#0a0a0a] border border-[#1b1b1b] rounded-xl hover:border-[#FF7A00] transition-all duration-300 hover:shadow-xl hover:shadow-[#FF7A00]/20 hover:-translate-y-1"
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Icon */}
                                        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#CC6200] flex items-center justify-center text-3xl shadow-md group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                        {/* Text */}
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-white group-hover:text-[#FF7A00] transition-colors">
                                                {service.name}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Selling Products Tab */}
                    {activeTab === "selling" && (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                            {sellingProducts.map((product, idx) => (
                                <div
                                    key={idx}
                                    className="group p-6 bg-[#0a0a0a] border border-[#1b1b1b] rounded-xl hover:border-[#FF7A00] transition-all duration-300 hover:shadow-xl hover:shadow-[#FF7A00]/20 hover:-translate-y-1"
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Icon */}
                                        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#CC6200] flex items-center justify-center text-3xl shadow-md group-hover:scale-110 transition-transform duration-300">
                                            {product.icon}
                                        </div>
                                        {/* Text */}
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-white group-hover:text-[#FF7A00] transition-colors">
                                                {product.name}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
