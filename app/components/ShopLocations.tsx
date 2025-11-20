"use client";

import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function ShopLocations() {
    const locations = [
        {
            id: 1,
            name: "Shree Electronics - Branch 1",
            address: "Gat No.1264, Jijamata Housing Society, Panchawati, Sharad Nagar, 412114",
            lat: 18.6298,
            lng: 73.7997,
            phone: "8169491298",
        },
        {
            id: 2,
            name: "Shree Electronics - Branch 2",
            address: "Sr No 132, Shop No 2, Saurabh Complex, Near Raj Mudra Hotel, Gurudwara Chowk, Chinchwad, Pune, 411033",
            lat: 18.6276,
            lng: 73.8009,
            phone: "8169491298",
        },
    ];

    useEffect(() => {
        // Initialize map with scrollWheelZoom disabled initially
        const map = L.map('map', {
            scrollWheelZoom: false,
            zoomControl: true,
        }).setView([18.6287, 73.8004], 13);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19,
        }).addTo(map);

        // Enable scroll zoom only when map is focused
        map.on('focus', () => {
            map.scrollWheelZoom.enable();
        });

        map.on('blur', () => {
            map.scrollWheelZoom.disable();
        });

        // Custom orange marker icon
        const orangeIcon = L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
        });

        // Add markers for each location
        locations.forEach((location) => {
            const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`;

            const popupContent = `
                <div class="p-2">
                    <h3 class="font-bold text-lg mb-2 text-[#FF7A00]">${location.name}</h3>
                    <p class="text-sm text-gray-700 mb-2">${location.address}</p>
                    <p class="text-sm text-gray-700 mb-3">📞 ${location.phone}</p>
                    <a 
                        href="${googleMapsUrl}" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="inline-block bg-[#FF7A00] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#CC6200] transition-colors duration-300"
                    >
                        Open in Google Maps
                    </a>
                </div>
            `;

            L.marker([location.lat, location.lng], { icon: orangeIcon })
                .addTo(map)
                .bindPopup(popupContent, { maxWidth: 300 });
        });

        // Cleanup map on unmount
        return () => {
            map.remove();
        };
    }, []);

    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Visit Our Stores
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Find us at our two convenient locations in Pune
                    </p>
                </div>

                {/* Map Container */}
                <div className="mb-8 rounded-xl overflow-hidden shadow-2xl relative">
                    <div
                        id="map"
                        className="h-[500px] w-full relative z-0"
                        style={{ position: 'relative', zIndex: 0 }}
                    ></div>
                    {/* Scroll instruction overlay */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg text-sm pointer-events-none z-10">
                        Click on map to enable scroll zoom
                    </div>
                </div>

                {/* Location Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {locations.map((location) => {
                        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`;

                        return (
                            <div
                                key={location.id}
                                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#FF7A00]"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {location.name}
                                </h3>
                                <div className="space-y-3 mb-4">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[#FF7A00] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <p className="text-gray-700">{location.address}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#FF7A00] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <a href={`tel:${location.phone}`} className="text-gray-700 hover:text-[#FF7A00]">
                                            {location.phone}
                                        </a>
                                    </div>
                                </div>
                                <a
                                    href={googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-[#FF7A00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#CC6200] hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                    Get Directions
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
