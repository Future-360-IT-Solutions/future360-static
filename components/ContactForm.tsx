'use client'

import { Phone, Mail } from 'lucide-react'
import { useState } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    requirements: '',
  })

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setForm({ ...form, [e.target.name]: e.target.value })
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  alert('Form submitted!')
}

  return (
    <section id="contact" className="bg-[#061136] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">Contact Us</h2>
        <p className="text-center text-gray-300 mb-8">
          Use Our Expertise To Your Advantage By Getting In Touch With Us!
        </p>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#0b1c4b] p-8 rounded-xl shadow-md space-y-4"
          >
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>

            <div className="flex gap-4">
              <input
                name="firstName"
                placeholder="First Name"
                required
                value={form.firstName}
                onChange={handleChange}
                className="w-full p-3 rounded bg-white text-black"
              />
              <input
                name="lastName"
                placeholder="Last Name"
                required
                value={form.lastName}
                onChange={handleChange}
                className="w-full p-3 rounded bg-white text-black"
              />
            </div>

            <div className="flex gap-4">
              <input
                name="email"
                type="email"
                placeholder="Enter Your Email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-white text-black"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Enter your Phone No."
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full p-3 rounded bg-white text-black"
              />
            </div>
            <textarea
              name="requirements"
              rows={4}
              placeholder="Your Requirements"
              required
              value={form.requirements}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white text-black"
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded"
            >
              Submit Now
            </button>
          </form>

          {/* Right: Business Info */}
          <div className="bg-[#0b1c4b] p-8 rounded-xl shadow-md flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 leading-snug">
              Take Your Business to <br />
              the Next Level
            </h3>

            <div className="flex items-center gap-3 mb-4">
              <Phone className="text-blue-500" />
              <div>
                <p className="text-sm text-gray-300">Contact No.</p>
                <p>+91-7869909760</p>
                <p className="text-sm mt-1 text-gray-400">
                  (For Job Related Queries: +91-7869614790)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <Mail className="text-blue-500" />
              <div>
                <p className="text-sm text-gray-300">Email ID</p>
                <p>contact@feedbox.tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
