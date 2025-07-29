'use client'

import Image from 'next/image'

const logos = [
  '/clients/1.png',
  '/clients/2.png',
  '/clients/3.png',
  '/clients/4.png',
  '/clients/5.png',
  '/clients/6.png',
  '/clients/7.png',
  '/clients/8.png',
  '/clients/9.png',
  '/clients/10.png'
]

export default function Clients() {
  return (
    <section className="bg-[#0b1b3e] py-20 px-4">
      <div className="bg-gray-100 rounded-2xl py-10 px-6 max-w-7xl mx-auto shadow-md">
        <h2 className="text-center text-gray-800 text-2xl font-semibold mb-10">
          Trusted by Startups & Brands
        </h2>

        <div className="space-y-6 overflow-hidden">
          {/* Row 1 */}
          <div className="whitespace-nowrap overflow-hidden">
            <div className="flex gap-10 animate-pause-loop w-max">
              {logos.concat(logos).map((logo, i) => (
                <Image
                  key={`top-${i}`}
                  src={logo}
                  alt={`Client logo ${i}`}
                  width={120}
                  height={40}
                  className="grayscale hover:grayscale-0 transition duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
