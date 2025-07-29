'use client'

import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUp,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#061136] text-white relative pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-3">Feed<span className="text-white">Box</span></h2>
          <p className="text-sm text-gray-300">
            Offering comprehensive digital marketing solutions to help businesses succeed online.
          </p>
        </div>

        {/* Explore More */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Explore More</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#about" className="hover:text-white transition">➞ About Us</a></li>
            <li><a href="#contact" className="hover:text-white transition">➞ Contact Us</a></li>
            <li><a href="#services" className="hover:text-white transition">➞ Services</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm text-gray-300 mb-2">For Business Queries: +91-7869909760</p>
          <p className="text-sm text-gray-300">Email ID: contact@feedbox.tech</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us On</h3>
          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
            <a href="#" className="flex items-center gap-2 hover:text-white transition">
              <Facebook className="text-blue-600" size={18} /> Facebook
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white transition">
              <Instagram className="text-pink-500" size={18} /> Instagram
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white transition">
              <Linkedin className="text-blue-500" size={18} /> LinkedIn
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white transition">
              <Twitter className="text-sky-400" size={18} /> Twitter
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white transition">
              <img src="/whatsapp.png" className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Feedbox. All Rights Reserved
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/917869909760"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 z-50"
      >
        <img src="/whatsapp.png" alt="WhatsApp" className="w-12 h-12" />
      </a>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-5 right-5 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition z-50"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  )
}
