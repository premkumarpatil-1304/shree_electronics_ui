import Image from "next/image";
import Link from "next/link";

export default function AboutShreeElectronicsSection() {
    return (
        <section className="bg-black">
            <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Image */}
                <div className="relative">
                    <div className="relative aspect-12/12 rounded-2xl overflow-hidden border-2 border-[#FF7A00] shadow-xl shadow-[#FF7A00]/30">
                        <Image
                            src="/home_page/shop_photo.png"
                            alt="Shree Electronics repair workspace"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/10 to-transparent" />
                    </div>
                </div>

                {/* Right: Content */}
                <div className="text-left">
                    <span className="inline-block bg-[#FF7A00]/10 text-[#FF7A00] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        Trusted Electronics Repair in PCMC
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Shree Electronics – PCMC&apos;s Reliable Electronic Device Shop & Service Center
                    </h2>

                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                        At Shree Electronics, we specialize in repairing  LED/LCD TVs, and home
                        appliances with expert care and genuine parts.We also sell electronics devices and their parts.
                    </p>

                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        Whether it&apos;s a cracked screen, dead motherboard, no‑power issue, or slow performance, our trained
                        technicians diagnose quickly and provide honest, cost‑effective repair options you can trust.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/services"
                            className="bg-[#FF7A00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#CC6200] transition-colors shadow-md shadow-[#FF7A00]/40"
                        >
                            View Repair Services
                        </Link>
                        <Link
                            href="/contact"
                            className="border-2 border-[#FF7A00] text-[#FF7A00] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF7A00] hover:text-black transition-colors"
                        >
                            Book a Repair Visit
                        </Link>
                    </div>

                    {/* Quick badges */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <div className="bg-[#FF7A00]/10 text-[#FF7A00] px-4 py-2 rounded-lg text-sm font-semibold">
                            Speakers • CCtvs • AC • TV
                        </div>
                        <div className="bg-[#FF7A00]/10 text-[#FF7A00] px-4 py-2 rounded-lg text-sm font-semibold">
                            Same‑Day Diagnosis
                        </div>
                        <div className="bg-[#FF7A00]/10 text-[#FF7A00] px-4 py-2 rounded-lg text-sm font-semibold">
                            Genuine Parts & Warranty
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
