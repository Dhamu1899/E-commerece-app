import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold uppercase mb-10 text-center">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
              <p className="text-gray-600 mb-6">
                Have questions about our products or your order? We're here to help. Fill out the form and we'll get
                back to you as soon as possible.
              </p>

              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <h3 className="font-semibold text-base">Email</h3>
                  <p>info@example.com</p>
                </div>

                <div>
                  <h3 className="font-semibold text-base">Phone</h3>
                  <p>+1 (234) 567-8900</p>
                </div>

                <div>
                  <h3 className="font-semibold text-base">Address</h3>
                  <p>
                    123 Main Street <br />
                    New York, NY 10001 <br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
