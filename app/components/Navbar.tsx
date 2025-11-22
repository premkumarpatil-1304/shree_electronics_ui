"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Work", href: "/work" },
        { label: "Contact", href: "/contact" },
    ];

    const isActive = (path: string) => pathname === path;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                bg-white
                
              
                `}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* main row */}
                <div className="flex items-center justify-between h-20 gap-4">
                    {/* Logo - Left */}
                    <Link
                        href="/"
                        className="flex items-center group shrink-0"
                        aria-label="BN Media Home"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#FF7A00]/25 blur-sm opacity-0 group-hover:opacity-100 transition-opacity rounded" />
                            <div className="relative w-50 h-[70px] rounded overflow-hidden">
                                <Image
                                    src="/logo.png"
                                    alt="BN Media logo"
                                    fill
                                    sizes="160px"
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </Link>

                    {/* Navigation Links - Center */}
                    <div className="hidden md:flex flex-1 items-center justify-center space-x-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative px-4 py-2 text-m font-medium tracking-wide transition-all duration-300 group ${isActive(item.href)
                                        ? "text-[#FF7A00]"
                                        : "text-black hover:text-[#FFB566]"
                                    }`}
                            >
                                {item.label}
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#FF7A00] transform origin-center transition-transform duration-300 ${isActive(item.href)
                                            ? "scale-x-100"
                                            : "scale-x-0 group-hover:scale-x-100"
                                        }`}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button - Right */}
                    <div className="hidden md:flex items-center justify-end shrink-0">
                        <Link
                            href="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="inline-block px-6 py-2.5 rounded-lg bg-[#FF7A00] text-white text-sm font-semibold tracking-wide text-center shadow-lg shadow-[#FF7A00]/40 hover:bg-[#CC6200] transition-all duration-300"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden relative w-10 h-10 text-white focus:outline-none group shrink-0"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle menu"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-6 space-y-1.5">
                                <span
                                    className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                                        }`}
                                />
                                <span
                                    className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"
                                        }`}
                                />
                                <span
                                    className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                        }`}
                                />
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-4 pt-2 pb-6 space-y-2 bg-black/95 backdrop-blur-lg border-t border-[#FF7A00]/20">
                    {navItems.map((item, index) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            style={{ transitionDelay: `${index * 50}ms` }}
                            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${isActive(item.href)
                                    ? "bg-[#FF7A00] text-white shadow-lg shadow-[#FF7A00]/50"
                                    : "text-white hover:bg-[#FF7A00]/10 hover:text-[#FFB566]"
                                }`}
                        >
                            <span className="flex items-center justify-between">
                                {item.label}
                                {isActive(item.href) && (
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                            </span>
                        </Link>
                    ))}

                    <Link
                        href="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="block mx-4 mt-3 bg-[#FF7A00] text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-[#CC6200] transition-all duration-300 shadow-lg shadow-[#FF7A00]/50"
                    >
                        Get Started
                    </Link>
                </div>
            </div>

            {/* Optional glowing bottom line – orange */}
            {/* <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF7A00] shadow-[0_0_6px_1px_#FF7A00]" /> */}
        </nav>
    );
}
