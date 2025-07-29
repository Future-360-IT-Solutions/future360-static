'use client'

import {
  Camera,
  Palette,
  Video,
  Globe,
  PenTool,
  MonitorPlay
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Camera,
      title: 'Photography',
      desc: 'Product, event & branding photography services.'
    },
    {
      icon: Video,
      title: 'Videography',
      desc: 'Commercial shoots & storytelling with impact.'
    },
    {
      icon: MonitorPlay,
      title: 'Motion Graphics',
      desc: 'Animated reels and social-first content.'
    },
    {
      icon: Globe,
      title: 'Web & SEO',
      desc: 'High-performance websites and search rankings.'
    },
    {
      icon: PenTool,
      title: 'Design',
      desc: 'Logos, brand books, ads & creatives.'
    },
    {
      icon: Palette,
      title: 'Campaign Strategy',
      desc: 'Targeted digital ads with lead generation.'
    }
  ]

  return (
    <section id="services" className="bg-[#0b1b3e] text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-16">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="perspective">
              <div className="relative w-full h-64 card-wrapper rounded-xl">
                {/* Front Face */}
                <div className="absolute inset-0 bg-[#0b1b3e] border border-white/10 rounded-xl flex items-center justify-center card-face">
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 bg-blue-600 text-white rounded-xl p-6 flex flex-col justify-center items-center card-face card-back">
                  <Icon className="w-8 h-8 text-white mb-3" />
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-center text-white/90">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
