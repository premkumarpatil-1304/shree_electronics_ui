"use client";

import Image from 'next/image';

export default function TeamSection() {
    const teamMembers = [
        {
            id: 1,
            name: "Harshal Patil",
            role: "Owner",
            title: "Electronics Repair Specialist",
            image: "/team_photos/Harshal_Patil.png",
        },
        {
            id: 2,
            name: "Hari Patil",
            role: "Senior Technician",
            title: "Appliance Repair Expert",
            image: "/team_photos/Hari_Patil.png",
        },
    ];

    return (
        <section className="bg-[#000000] py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Meet Our Team
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Expert technicians dedicated to providing top-quality repair services
                    </p>
                </div>

                {/* Team Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 transition-transform"
                        >
                            {/* Card Image */}
                            <div className="relative h-80 w-full bg-gray-200">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-6 text-center">
                                <div className="mb-2">
                                    <span className="inline-block bg-[#FF7A00] text-white px-4 py-1 rounded-full text-sm font-semibold">
                                        {member.role}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-gray-600 text-lg">
                                    {member.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
