"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

type Status = { type: "idle" | "sending" | "success" | "error"; message?: string };

export default function AppointmentForm() {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [status, setStatus] = useState<Status>({ type: "idle" });
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_APPOINTMENT_TEMPLATE_ID ?? "";
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

    useEffect(() => {
        if (typeof window === "undefined") return;
        if (!PUBLIC_KEY) {
            console.error("EmailJS public key is missing. Set NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in .env.local");
            return;
        }
        try {
            emailjs.init(PUBLIC_KEY);
        } catch (err) {
            console.error("emailjs.init error:", err);
        }
    }, [PUBLIC_KEY]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formRef.current) return;

        // Basic checks before calling EmailJS
        if (!SERVICE_ID || !TEMPLATE_ID) {
            setStatus({
                type: "error",
                message: "Mail service is not configured. Please contact site admin.",
            });
            console.error("Missing EmailJS Service ID or Template ID.");
            return;
        }

        // Honeypot (spam) check - hidden field named "company" should be empty
        const formEl = formRef.current;
        const honeypot = (formEl.elements.namedItem("company") as HTMLInputElement | null)?.value;
        if (honeypot) {
            // silently drop spam submissions
            console.warn("Honeypot triggered - dropping submission.");
            return;
        }

        setStatus({ type: "sending", message: "Booking appointment..." });

        try {
            const res = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formEl);
            // EmailJS returns an object; check res.status if you want (some SDK versions)
            console.log("EmailJS response:", res);
            setStatus({
                type: "success",
                message: "Appointment request sent! We'll contact you shortly to confirm your repair service.",
            });
            formEl.reset();
        } catch (err) {
            console.error("EmailJS Error:", err);
            setStatus({
                type: "error",
                message: "Failed to book appointment. Please call us at 8169491298 or try again.",
            });
        }
    };

    const isSubmitting = status.type === "sending";

    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Sidebar omitted for brevity — keep your existing sidebar */}
                    <aside className="lg:col-span-1">{/* ...keep sidebar as-is... */}</aside>

                    {/* Right Side - Appointment Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-black mb-3">Schedule Your Service</h2>
                                <p className="text-gray-600">Fill out the form below and we'll get back to you shortly to confirm your appointment.</p>
                            </div>

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
                                {/* Honeypot - invisible to users */}
                                <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />

                                {/* Name and Email (note name attributes match template variable names) */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-black font-semibold mb-2">Full Name *</label>
                                        <input
                                            id="name"
                                            name="user_name"
                                            type="text"
                                            required
                                            aria-required
                                            className="w-full px-4 py-3 border-2 text-black border-gray-200 rounded-lg focus:border-[#FF7A00] focus:outline-none transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-black font-semibold mb-2">Email Address *</label>
                                        <input
                                            id="email"
                                            name="user_email"
                                            type="email"
                                            required
                                            aria-required
                                            className="w-full px-4 py-3 border-2 text-black border-gray-200 rounded-lg focus:border-[#FF7A00] focus:outline-none transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                {/* Phone and Address */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-black font-semibold mb-2">Phone Number *</label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            required
                                            pattern="^\+?\d{7,15}$"
                                            title="Include country code, digits only. Example: +911234567890"
                                            className="w-full px-4 py-3 border-2 text-black border-gray-200 rounded-lg focus:border-[#FF7A00] focus:outline-none transition-colors"
                                            placeholder="+91 12345 67890"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="address" className="block text-black font-semibold mb-2">Service Address</label>
                                        <input
                                            id="address"
                                            name="address"
                                            type="text"
                                            className="w-full px-4 py-3 border-2 text-black border-gray-200 rounded-lg focus:border-[#FF7A00] focus:outline-none transition-colors"
                                            placeholder="Your address"
                                        />
                                    </div>
                                </div>

                                {/* Service Selection */}
                                <div>
                                    <label htmlFor="service" className="block text-black font-semibold mb-2">Service Needed *</label>
                                    <select id="service" name="service" required className="w-full px-4 py-3 border-2 text-black border-gray-200 rounded-lg focus:border-[#FF7A00] focus:outline-none transition-colors">
                                        <option value="">Select a service</option>
                                        <option value="refrigerator-repair">Refrigerator Repair</option>
                                        <option value="washing-machine-repair">Washing Machine Repair</option>
                                        <option value="microwave-repair">Microwave Repair</option>
                                        <option value="tv-repair">TV Repair</option>
                                        <option value="ac-repair">Air Conditioner Repair</option>
                                        <option value="cctv-installation">CCTV Installation</option>
                                        <option value="electrical-fitting">Electrical Fitting</option>
                                        <option value="fan-repair">Fan Repair</option>
                                        <option value="home-appliance-repair">Other Home Appliance</option>
                                    </select>
                                </div>

                                {/* Date and Time */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="date" className="block text-black font-semibold mb-2">Preferred Date *</label>
                                        <input id="date" name="date" type="date" required min={new Date().toISOString().split("T")[0]} className="w-full px-4 py-3 border-2 text-black border-gray-200 rounded-lg focus:border-[#FF7A00] focus:outline-none transition-colors" />
                                    </div>
                                    <div>
                                        <label htmlFor="time" className="block text-black font-semibold mb-2">Preferred Time *</label>
                                        <select id="time" name="time" required className="w-full px-4 py-3 border-2 text-black border-gray-200 rounded-lg focus:border-[#FF7A00] focus:outline-none transition-colors">
                                            <option value="">Select time</option>
                                            <option value="9:00 AM">9:00 AM</option>
                                            <option value="10:00 AM">10:00 AM</option>
                                            <option value="11:00 AM">11:00 AM</option>
                                            <option value="12:00 PM">12:00 PM</option>
                                            <option value="2:00 PM">2:00 PM</option>
                                            <option value="3:00 PM">3:00 PM</option>
                                            <option value="4:00 PM">4:00 PM</option>
                                            <option value="5:00 PM">5:00 PM</option>
                                            <option value="6:00 PM">6:00 PM</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Issue Description */}
                                <div>
                                    <label htmlFor="details" className="block text-black font-semibold mb-2">Describe the Issue</label>
                                    <textarea id="details" name="details" rows={4} className="w-full px-4 py-3 border-2 text-black border-gray-200 rounded-lg focus:border-[#FF7A00] focus:outline-none transition-colors resize-none" placeholder="Tell us about the problem with your device..." />
                                </div>

                                {/* Submit */}
                                <button type="submit" disabled={isSubmitting} className="w-full bg-[#FF7A00] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#CC6200] disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                    {isSubmitting ? "Booking..." : "Book Appointment"}
                                </button>

                                {/* Status */}
                                {status.message && (
                                    <div role="status" aria-live="polite" className={`p-4 rounded-lg ${status.type === "success" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
                                        {status.message}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
