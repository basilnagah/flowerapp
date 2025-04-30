import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (

        <footer className="bg-pink-100 py-10 px-4 text-center text-sm">
            <nav className="flex justify-center flex-wrap gap-4 mb-6 text-gray-700 font-medium">
                {['About Us', 'Stores', 'contact', 'Delivery', 'Policy', 'FAQS'].map((link, i) => (
                    <Link href={link} key={i} className="hover:underline">{link}</Link>
                ))}
            </nav>
            <p className="text-lg font-semibold mb-2">
                Get <span className="text-pink-600 font-bold">20% Off</span> Discount Coupon
            </p>
            <p className="mb-4 text-gray-600">By Subscribe Our Newsletter</p>
            <div className="flex justify-center">
                <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="px-4 py-2 rounded-l-md border border-pink-400 focus:outline-none"
                />
                <button className="bg-pink-500 text-white px-4 py-2 rounded-r-md hover:bg-pink-600">
                    Subscribe
                </button>
            </div>
        </footer>
    )
}
