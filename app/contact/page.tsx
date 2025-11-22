"use client";

import dynamic from "next/dynamic";
import AppointmentForm from "../components/AppointmentForm";

const LocationMap = dynamic(() => import("../components/LocationMap"), {
    ssr: false,
    loading: () => <p>Loading map...</p>,
});

export default function ContactPage() {
    return (
        <div className="">
            <LocationMap />
            <AppointmentForm/>
        </div>
    );
}
