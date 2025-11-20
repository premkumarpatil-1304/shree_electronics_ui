"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import React, { useEffect, useState } from "react";

const heroPhrases = [
  
  "LED / LCD TVs",
  "Inverters & Home Appliances",
  "Gaming Consoles & More",
];

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setPhraseIndex((prev) => (prev + 1) % heroPhrases.length),
      2500
    );
    return () => clearInterval(id);
  }, []);

  const stats = [
    {
      number: 10,
      suffix: "+",
      label: "Years Experience",
      icon: "🛠️",
      description: "Expert technicians in multi‑brand repairs",
    },
    {
      number: 2500,
      suffix: "+",
      label: "Devices Repaired",
      icon: "📱",
      description: "Mobiles, laptops, TVs, inverters & more",
    },
    {
      number: 1200,
      suffix: "+",
      label: "Happy Customers",
      icon: "😊",
      description: "Repeat customers from PCMC & nearby",
    },
    {
      number: 7,
      suffix: "/7",
      label: "Support Availability",
      icon: "🚚",
      description: "Door‑to‑door pickup & delivery*",
    },
  ];

  const values = [
    {
      title: "All Major Parts Available",
      description:
        "Most common spare parts are kept in stock so repairs are faster and more reliable.",
      icon: "📦",
    },
    {
      title: "Honest, Low‑Cost Service",
      description:
        "Clear diagnosis, transparent pricing, and repair options that match your budget.",
      icon: "💰",
    },
    {
      title: "Door‑to‑Door Convenience",
      description:
        "Pickup and drop in selected areas so you don’t have to leave your home or office.",
      icon: "🚚",
    },
  ];

  const team = [
    {
      name: "Lead Technician",
      role: "Board & Chip Level Repair",
      img: "/members/tech1.jpg",
    },
    {
      name: "Mobile Specialist",
      role: "Smartphones & Tablets",
      img: "/members/tech2.jpg",
    },
    {
      name: "Laptop Expert",
      role: "Laptops & Desktops",
      img: "/members/tech3.jpg",
    },
    {
      name: "Home Appliance Pro",
      role: "TVs & Inverters",
      img: "/members/tech4.jpg",
    },
    {
      name: "Customer Care",
      role: "Support & Coordination",
      img: "/members/tech5.jpg",
    },
  ];

  return (
    <main className="min-h-svh bg-black text-white">
      {/* HERO SECTION – Shree Electronics */}
      <section className="relative overflow-hidden">
        {/* Animated background blobs */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -top-10 left-0 w-72 h-72 bg-[#FF7A00] rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#CC6200] rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:py-16 py-12 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content with animated line */}
          <div className="text-center lg:text-left">
            <span className="inline-block bg-[#FF7A00] text-black px-6 py-2 rounded-full text-xs font-semibold tracking-wide mb-6">
              About Shree Electronics
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-4">
              PCMC&apos;s Trusted
              <span className="block">Electronics Repair & Service Center</span>
            </h1>

            {/* Animated hero line */}
            <div className="mb-6">
              <p className="text-lg md:text-xl text-gray-300">
                Fast, reliable repairs for{" "}
                <span className="relative inline-block">
                  <span className="pr-1 text-[#FF7A00] font-semibold">
                    {heroPhrases[phraseIndex]}
                  </span>
                  <span className="inline-block w-[2px] h-5 bg-[#FF7A00] align-middle animate-pulse ml-0.5" />
                </span>
              </p>
            </div>

            <div className="space-y-3 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                Shree Electronics is a multi‑brand service center in PCMC,
                specialising in smartphones, laptops, desktops, LED/LCD TVs,
                inverters and other home appliances.
              </p>
              <p>
                From cracked screens and dead motherboards to power issues and
                slow performance, our technicians diagnose quickly and repair
                with genuine or high‑grade compatible parts.
              </p>
              <p>
                With transparent pricing, clear communication and door‑to‑door
                service in selected areas, we make device repair simple and
                stress‑free for you.
              </p>
            </div>
          </div>

          {/* Right: Image / visual card */}
          <div className="relative">
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden border-2 border-[#FF7A00] shadow-xl shadow-[#FF7A00]/40">
              <Image
                src="/about_section_images/img1.jpg"
                alt="Shree Electronics repair workspace"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/10 to-transparent" />
            </div>

            {/* Accent shape */}
            <div className="pointer-events-none absolute -bottom-10 -right-6 w-44 h-44 rounded-full bg-[#FF7A00]/20 blur-2xl" />
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-[#050505] to-black relative overflow-hidden">
        {/* background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#FF7A00] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#CC6200] rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Numbers that show how many devices and customers trust Shree
              Electronics.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-[#0b0b0b] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#1f1f1f] hover:border-[#FF7A00] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {stat.icon}
                </div>

                {/* Counter Number */}
                <div className="relative">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-[#FF7A00] transition-colors duration-500">
                    {inView ? (
                      <CountUp
                        start={0}
                        end={stat.number}
                        duration={2.5}
                        suffix={stat.suffix}
                        separator=","
                      />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </div>
                  <div className="w-16 h-1 bg-[#FF7A00] rounded-full mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>

                {/* Label */}
                <div className="text-lg font-bold text-white mb-1">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm">{stat.description}</p>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-[#FF7A00]/10 rounded-full transform group-hover:scale-150 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="py-20 px-4 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual */}
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/90 to-black/90 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl mb-4">🔧</div>
                  <h3 className="text-3xl font-bold mb-2">Our Mission</h3>
                  <p className="text-lg text-gray-200">
                    Keep PCMC&apos;s devices running longer with honest,
                    affordable repairs.
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Repair First, Replace Later
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                At Shree Electronics, the goal is simple: repair what can be
                repaired, extend the life of your devices and save you money.
                Replacement is suggested only when it&apos;s truly the better
                option.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                With years of hands‑on experience and continuous learning, our
                technicians handle everything from basic faults to complex
                board‑level issues for multiple brands and categories.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Located in PCMC and serving nearby areas, we aim to be your
                first call when any device at home or office stops working.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Customers Trust Us
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Practical repair options, genuine advice and long‑term support for
              all your electronics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 bg-[#050505] border border-[#1b1b1b] rounded-xl hover:border-[#FF7A00] hover:shadow-xl hover:shadow-[#FF7A00]/20 transition-all"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-14 max-w-2xl mx-auto">
            Passionate professionals dedicated to your success
          </p>

          {/* Team Grid – 2 cards */}
          <div className="grid bg-amber-200 gap-10 sm:grid-cols-1 md:grid-cols-2">
            {[
              {
                name: "Chetan Patil",
                role: "Video Editor",
                img: "/team_photos/Harshal_Patil.png",
              },
              {
                name: "Ainkya Kurhade",
                role: "Social Media Manager",
                img: "/team_photos/social_media.png",
              },
            ].map((member, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 120}ms` }}
                className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100 hover:border-[#FF7A00]
            transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF7A00]/30 hover:-translate-y-2 hover:scale-[1.03]
            opacity-0 animate-fadeInUp"
              >
                {/* Animated Photo Box */}
                <div
                  className="relative w-40 h-40 mx-auto mb-5 rounded-xl overflow-hidden
              group shadow-md shadow-[#FF7A00]/20
              hover:shadow-xl hover:shadow-[#FF7A00]/40 transition-all duration-500
              bg-gradient-to-br from-[#FF7A00]/20 to-[#ffffff]"
                >
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />

                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-black tracking-tight">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-sm font-semibold text-[#FF7A00] mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-[#FF7A00] to-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Device Not Working Right?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Visit Shree Electronics or book a pickup – let our experts bring
            your devices back to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-[#FF7A00] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#111111] transition-colors shadow-lg shadow-black/60"
          >
            Book a Repair Now
          </a>
        </div>
      </section>
    </main>
  );
}
