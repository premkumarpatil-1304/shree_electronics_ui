"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import "leaflet-routing-machine";

// Declare module for leaflet-routing-machine to avoid TypeScript errors
declare module "leaflet" {
    namespace Routing {
        function control(options: any): any;
    }
}
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

// Fix default marker icon issue in Leaflet
const defaultIcon = new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

const locations = [
    {
        id: 1,
        name: "BN Media - Mothi Umari",
        address: "Vitthal Nagar, Mothi Umari, Akola, Maharashtra 444005",
        lat: 18.66671544942619,
        lng: 73.8005293687486,
        phone: "+91 87675 87595",
    },
    {
        id: 2,
        name: "BN Media - Second Location",
        address: "Second Location Address, Akola, Maharashtra",
        lat: 18.644237823908387, // Example coordinates - replace with actual
        lng: 73.76527691534231,
        phone: "+91 87675 87595",
    },
];

function RoutingControl() {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        const routingControl = L.Routing.control({
            waypoints: [
                L.latLng(locations[0].lat, locations[0].lng),
                L.latLng(locations[1].lat, locations[1].lng),
            ],
            routeWhileDragging: true,
            showAlternatives: true,
            lineOptions: {
                styles: [{ color: "#FF6600", weight: 4 }], // Orange theme
            },
            createMarker: function () {
                return null; // Don't create default markers (we have our own)
            },
        }).addTo(map);

        return () => {
            map.removeControl(routingControl);
        };
    }, [map]);

    return null;
}

function LocationMarker() {
    const map = useMap();

    useEffect(() => {
        // Center map to show both locations
        if (locations.length > 0) {
            const bounds = L.latLngBounds(
                locations.map((loc) => [loc.lat, loc.lng])
            );
            map.fitBounds(bounds, { padding: [50, 50] });
        }
    }, [map]);

    return null;
}

export default function LocationMap() {
    return (
        <section className="py-20 px-4 bg-white relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                        Find Us on the Map
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Visit our offices in Akola to discuss your digital needs
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Map - Left */}
                    <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg border-2 border-gray-100 relative z-0">
                        <MapContainer
                            center={[20.7155, 77.029]}
                            zoom={13}
                            style={{ height: "500px", width: "100%" }}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {locations.map((location) => (
                                <Marker
                                    key={location.id}
                                    position={[location.lat, location.lng]}
                                    icon={defaultIcon}
                                >
                                    <Popup>
                                        <div className="text-sm">
                                            <h3 className="font-bold text-black mb-1">
                                                {location.name}
                                            </h3>
                                            <p className="text-gray-600 text-xs mb-2">
                                                {location.address}
                                            </p>
                                            <a
                                                href={`tel:${location.phone}`}
                                                className="text-[#FF6600] font-semibold text-xs hover:underline"
                                            >
                                                {location.phone}
                                            </a>
                                        </div>
                                    </Popup>
                                </Marker>
                            ))}
                            <LocationMarker />
                            <RoutingControl />
                        </MapContainer>
                    </div>

                    {/* Locations List - Right */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-black mb-6">Our Locations</h3>
                        {locations.map((location) => (
                            <div
                                key={location.id}
                                className="bg-white p-5 rounded-xl shadow-md border-2 border-gray-100 hover:border-[#FF6600] transition-all"
                            >
                                <h4 className="font-bold text-black mb-2">{location.name}</h4>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex items-start gap-2">
                                        <svg
                                            className="w-5 h-5 text-[#FF6600] shrink-0 mt-0.5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>{location.address}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg
                                            className="w-5 h-5 text-[#FF6600]"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                        <a
                                            href={`tel:${location.phone}`}
                                            className="text-[#FF6600] font-semibold hover:underline"
                                        >
                                            {location.phone}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                :global(.leaflet-container) {
                    z-index: 1 !important;
                }
                :global(.leaflet-popup) {
                    z-index: 10 !important;
                }
                :global(.leaflet-control) {
                    z-index: 5 !important;
                }
                :global(.leaflet-routing-container) {
                    background: white;
                    padding: 10px;
                    border-radius: 8px;
                }
            `}</style>
        </section>
    );
}
