"use client";
import Image from "next/image";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowSuccess(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16 px-8 max-w-6xl mx-auto w-full">
      <h2 className="text-center text-4xl font-bold mb-12">Get in Touch</h2>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Left: Contact Info */}
        <div className="md:w-1/2 space-y-6 text-lg">
          <div>
            <h3 className="text-xl font-semibold">Call Me</h3>
            <p className="text-gray-700">+254 757 853 784</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Email</h3>
            <a
              href="mailto:alisuleimann4@gmail.com"
              className="text-blue-600 hover:underline"
            >
              alisuleimann4@gmail.com
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/suleiman-mashuhuli/"
              aria-label="LinkedIn"
              className="hover:opacity-80 transition"
            >
              <Image
                src="/icons/linkedin.png"
                alt="LinkedIn"
                width={32}
                height={32}
              />
            </a>
            <a
              href="https://github.com/SuleimanMashuhuli"
              aria-label="GitHub"
              className="hover:opacity-80 transition"
            >
              <Image
                src="/icons/github.png"
                alt="GitHub"
                width={32}
                height={32}
              />
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-gray-700">Nairobi, Kenya</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send me a Message
          </h2>

          {showSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              Thank you! I&apos;ll get back to you within 24 hours.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="How can I help you?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Tell me about your project, idea or safari dream..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
