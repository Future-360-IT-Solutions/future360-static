"use client";

import CountUp from "react-countup";
import Image from "next/image";

export default function AboutUs() {
  const stats = [
    { label: "Team Members", count: 42, color: "text-green-400" },
    { label: "Projects Completed", count: 196, color: "text-yellow-400" },
    { label: "Awards & Recognition", count: 7, color: "text-blue-400" },
    { label: "Countries", count: 12, color: "text-red-400" },
  ];

  const logos = [
    "/about/republic.png",
    "/about/dainik-bhaskar.png",
    "/about/ht.png",
    "/about/india-saga.png",
    "/about/dmn.png",
  ];

  return (
    <section id="about" className="bg-[#0b1b3e] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Animated Illustration */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px]">
            <Image
              src="/about/teamwork.gif"
              alt="About illustration"
              width={400}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Right: About Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4 border-b-2 w-fit pb-1 border-blue-500">
            About Us
          </h2>
          <p className="mb-4 text-white/90">
            Feedbox is a Digital Marketing Agency that is helping Businesses &
            funded Startups achieve their business metrics like Revenue, Growth
            and Customer Acquisition.
          </p>
          <p className="mb-4 text-white/90">
            We work at the intersection of Branding, Digital Marketing,
            Performance Marketing and SEO to help you propel forward.
          </p>
          <p className="mb-6 text-white/90">
            Feedbox has been awarded as Super Startup by Indore Saansad & our
            founders have been awarded as MP Young Achievers by Hon’ble CM
            Shivraj Singh Chouhan.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md font-semibold text-white transition">
            Read More
          </button>

          {/* Media Logos */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mt-8">
            {logos.map((src, idx) => (
              <div
                key={idx}
                className="bg-white rounded-md p-2 flex items-center justify-center h-12"
              >
                <Image
                  src={src}
                  alt={`Logo ${idx}`}
                  width={60}
                  height={30}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 px-4 max-w-5xl mx-auto text-center">
        {stats.map((item, idx) => (
          <div key={idx}>
            <h3 className={`text-4xl font-bold ${item.color}`}>
              <CountUp end={item.count} duration={2.5} suffix="+" />
            </h3>
            <p className="text-sm mt-1 text-white/80">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
