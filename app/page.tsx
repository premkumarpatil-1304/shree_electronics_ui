import Image from "next/image";
import Home_Hero from "./components/Home_Hero";
import AboutShreeElectronicsSection from "./components/AboutShreeElectronicsSection";
import WhyChooseUs from "./components/WhyChooseUs";


export const metadata = {
  title: "Shree Electronics - Your Trusted Appliance Repair Partner",
  description:
    "Grow your business with BN Media. We provide creative digital marketing, website design, branding, and software solutions tailored for your success.",
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
