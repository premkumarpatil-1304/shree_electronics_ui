"use client";

import Image from 'next/image';

export default function ServicesGrid() {
    const services = [
        {
            id: 1,
            title: "Refrigerator Repair",
            image: "/repair_devices/fridge.png",
            description: "Expert repair and maintenance for all refrigerator brands",
        },
        {
            id: 2,
            title: "Washing Machine Repair",
            image: "/repair_devices/washing_machine.png",
            description: "Professional washing machine repair and installation services",
        },
        {
            id: 3,
            title: "Microwave Repair",
            image: "/repair_devices/microwave.jpg",
            description: "Quick and reliable microwave oven repair services",
        },
        {
            id: 4,
            title: "CCTV Installation",
            image: "/repair_devices/cctv.jpg",
            description: "Complete CCTV camera installation and setup solutions",
        },
        {
            id: 5,
            title: "Electrical Fitting",
            image: "/repair_devices/electrical.jpg",
            description: "Industrial and domestic electricals fittings and contracts",
        },
    ];

    return (
        <section className="bg-black py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Our Services
                    </h2>
                    <p className="text-lg text-white max-w-2xl mx-auto">
                        Professional repair and installation services for all your electronic appliances
                    </p>
                    <div className="mt-4 w-20 h-1 bg-[#FF7A00] mx-auto rounded-full"></div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden bg-gray-200">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Orange Badge */}
                                <div className="absolute top-4 right-4 bg-[#FF7A00] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                    Popular
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#FF7A00] transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Learn More Link */}
                                <div className="flex items-center gap-2 text-[#FF7A00] font-semibold group/link">
                                    <span className="relative">
                                        Learn More
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF7A00] group-hover/link:w-full transition-all duration-300"></span>
                                    </span>
                                    <svg
                                        className="w-5 h-5 transform group-hover/link:translate-x-2 transition-transform duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>

                            {/* Bottom Border Animation */}
                            <div className="h-1 w-0 bg-gradient-to-r from-[#FF7A00] to-orange-600 group-hover:w-full transition-all duration-500"></div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-12">
                    <button className="bg-[#FF7A00] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#CC6200] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        View All Services
                    </button>
                </div>
            </div>
        </section>
    );
}
