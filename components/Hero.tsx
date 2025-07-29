// components/Hero.tsx
'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full mt-4 bg-[#0b1b3e] text-white overflow-hidden py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Achieve Your <br className="hidden sm:block" /> Business Goals
            <br />
            With Our <br className="hidden sm:block" />
            <span className="text-blue-400">Advanced Digital</span> <br />
            Marketing Strategies
          </h1>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold text-white transition mt-4">
            Get in Touch
          </button>
        </div>

        {/* Rocket Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-float">
          <Image
            src="/hero/rocket.png"
            alt="Rocket Illustration"
            width={300}
            height={300}
            className="w-[200px] sm:w-[250px] md:w-[300px] h-auto"
          />
        </div>
      </div>
    </section>
  )
}
