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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xkgzbbvz", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target as HTMLFormElement),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error("Formspree submission failed.");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };


  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto w-full">
      <div className="text-center  mb-8 sm:mb-12">
        <h2 className=" text-3xl sm:text-4xl font-bold">Get in Touch</h2>
        <span className="font-normal text-gray-500"> My handle</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 sm:gap-12">
        {/* Left: Contact Info */}
        <div className="lg:w-1/2 space-y-4 sm:space-y-6 text-base sm:text-lg">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">Call Me</h3>
            <p className="text-gray-700 text-sm sm:text-base">+254 757 853 784</p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">Email</h3>
            <a
              href="mailto:alisuleimann4@gmail.com"
              className="text-blue-600 hover:underline text-sm sm:text-base"
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
                className="w-6 h-6 sm:w-8 sm:h-8"
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
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </a>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">Location</h3>
            <p className="text-gray-700 text-sm sm:text-base">Nairobi, Kenya</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:w-1/2 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
            Send me a Message
          </h2>

          {showSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 text-sm sm:text-base">
              Thank you! I&apos;ll get back to you within 24 hours.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
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
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
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
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
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
                rows={4}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base resize-none"
                placeholder="Tell me about your project, idea or safari dream..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
