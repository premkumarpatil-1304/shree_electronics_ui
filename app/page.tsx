import Image from "next/image";
import Home_Hero from "./components/Home_Hero";
import AboutShreeElectronicsSection from "./components/AboutShreeElectronicsSection";
import WhyChooseUs from "./components/WhyChooseUs";


export const metadata = {
  title: "Shree Electronics - Your Trusted Appliance Repair Partner",
  description:
    "Your trusted destination for high-quality electronics and electrical solutions. We offer a wide range of products including home appliances, mobile accessories, LED lighting, CCTV systems, wiring materials, inverters, batteries, and repair services. Whether you're upgrading your home, setting up a business, or looking for technical support, our expert team is here to guide you with reliable products, competitive pricing, and professional assistance.",
};


export default function Home() {
  return (
    <div>
      <Home_Hero />
      <AboutShreeElectronicsSection />
      <WhyChooseUs />
    </div>
   
  );
}
