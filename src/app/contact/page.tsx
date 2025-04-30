import React from 'react'

export default function Contact() {
    return (
        <section className="py-12 px-4 bg-white flex justify-center items-start gap-10 flex-wrap">
            {/* Left - Contact Info */}
            <div className="bg-white p-6 rounded-xl shadow-md w-80 space-y-6 border border-pink-100">
                <h2 className="text-sm font-semibold tracking-widest text-pink-600 uppercase">Contact Us</h2>

                {/* Call */}
                <div className="flex items-center gap-4">
                    <div className="bg-pink-100 p-3 rounded-lg">
                        <span className="text-pink-600 text-xl">📞</span>
                    </div>
                    <div>
                        <p className="text-pink-600 font-semibold">Call Anytime</p>
                        <p className="text-sm text-gray-700">241-373-2123</p>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                    <div className="bg-pink-100 p-3 rounded-lg">
                        <span className="text-pink-600 text-xl">📧</span>
                    </div>
                    <div>
                        <p className="text-pink-600 font-semibold">Send Email</p>
                        <p className="text-sm text-gray-700">Dwight63@gmail.com</p>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                    <div className="bg-pink-100 p-3 rounded-lg">
                        <span className="text-pink-600 text-xl">📍</span>
                    </div>
                    <div>
                        <p className="text-pink-600 font-semibold">Visit Us</p>
                        <p className="text-sm text-gray-700">
                            20 Island Park Road,<br />
                            New Jersey, New York, USA
                        </p>
                    </div>
                </div>
            </div>

            {/* Right - Contact Form */}
            <form className="bg-white p-6 rounded-xl shadow-md w-1/2 space-y-4 border border-pink-100">
                <input type="text" placeholder="Name" className="w-full p-3 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" />
                <input type="email" placeholder="Email" className="w-full p-3 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" />
                <input type="tel" placeholder="Phone" className="w-full p-3 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" />
                <textarea placeholder="Your Message" rows={4} className="w-full p-3 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" />

                <div className="flex justify-end">
                    <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full shadow-lg transition">
                        Send →
                    </button>
                </div>
            </form>
        </section>

    )
}
