/* eslint-disable @next/next/no-img-element */
import HomeCard from '@/components/common/home-card';
import { Car, CheckCircle, Headset, RotateCcw, WalletCards } from 'lucide-react'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function about() {

    const testimonials = Array(4).fill({
        name: 'Ahmed Mohamed',
        role: 'Customer',
        text: 'Ab voluptatum voluptate rerum, tempora accusantium voluptas illum. Libero nostrum blanditiis eveniet.',
        avatar: '/images/avatar.jpg',
        rating: 5,
    });

    const teamMembers = [
        {
            name: "Ahmed Mohamed",
            title: "Senior Manager",
            img: "/images/team1.jpg",
        },
        {
            name: "Ahmed Mohamed",
            title: "Senior Manager",
            img: "/images/team1.jpg",
        },
        {
            name: "Ahmed Mohamed",
            title: "Senior Manager",
            img: "/images/team1.jpg",
        },
        {
            name: "Ahmed Mohamed",
            title: "Senior Manager",
            img: "/images/team1.jpg",
        },
    ];
    const logos = ['images/logo1.png', 'images/logo1.png ', 'images/logo1.png', 'images/logo1.png'];

    return (
        <>
            <div className="container flex flex-col md:flex-row items-center justify-between py-12 px-6 bg-white">

                <div className="relative w-full md:w-1/2 flex justify-center items-center">

                    <div className="relative z-10 m-3">
                        <img src="/images/home2.png" alt="Gift Box" className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="">
                            <img src="/images/home1.png" alt="Small Image 1" className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
                            />
                        </div>
                        <div className="">
                            <img src="/images/home3.png" alt="Small Image 2" className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
                    <p className="text-pink-500 text-sm uppercase tracking-wider">About Us</p>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                        We Provide Best And Quality Gifts Box Product For You
                    </h2>

                    <p className="text-gray-500 mt-4 text-sm md:text-base">
                        Recusandae temporibus laborum molestias veniam, a commodi sequi accusantium
                        ullam cupiditate. Neque laborum qui et autem dolor dicta necessitatibus ad.
                    </p>

                    <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full flex items-center justify-center mx-auto md:mx-0 hover:bg-pink-600 transition">
                        Discover More
                        <span className="ml-2">→</span>
                    </button>

                    {/* List */}
                    <ul className="mt-6 space-y-3 text-gray-600 text-sm md:text-base">
                        <li className="flex items-center">
                            <span className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                                <CheckCircle className="w-6 h-6 text-purple-500" />
                            </span>
                            Streamlined Shipping Experience
                        </li>
                        <li className="flex items-center">
                            <span className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                                <CheckCircle className="w-6 h-6 text-purple-500" />
                            </span>
                            Competitive Price & Easy To Shop
                        </li>
                        <li className="flex items-center">
                            <span className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                                <CheckCircle className="w-6 h-6 text-purple-500" />
                            </span>
                            Affordable Modern Design
                        </li>
                        <li className="flex items-center">
                            <span className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                                <CheckCircle className="w-6 h-6 text-purple-500" />
                            </span>
                            We Made Awesome Products
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-pink-200 py-10 px-4">
                <div className="container">

                    <div className="flex overflow-x-auto gap-6 pb-4">
                        {testimonials.map((item, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-lg p-6 min-w-[250px] max-w-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <img src='images/test1.jpeg' alt="" className="w-10 h-10 rounded-full" />
                                    <div>
                                        <p className="font-bold">{item.name}</p>
                                        <p className="text-sm text-pink-500">{item.role}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700">{item.text}</p>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="text-yellow-400">{'★'.repeat(item.rating)}</div>
                                    <span className="text-pink-400 text-xl">💬</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className="py-12 px-4 text-center">
                <div className="container">

                    <p className="text-pink-500 uppercase tracking-widest text-sm font-medium">Our Team</p>
                    <h2 className="text-2xl md:text-3xl font-bold mb-10">
                        Meet Our Expert <span className="text-pink-500">Team</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamMembers.map((member, i) => (
                            <div key={i} className="bg-white shadow-lg rounded-2xl overflow-hidden">
                                <img src={member.img} alt={member.name} className="w-full h-56 object-cover" />
                                <div className="py-4">
                                    <h3 className="font-bold text-lg">{member.name}</h3>
                                    <p className="text-pink-500 text-sm">{member.title}</p>
                                </div>
                                <div className="flex justify-center gap-4 pb-4 text-pink-500 text-lg">
                                    <FaFacebookF className="bg-pink-500 w-6 h-6 rounded-full p-1 text-white  cursor-pointer" />
                                    <FaInstagram className="bg-pink-500 w-6 h-6 rounded-full p-1 text-white  cursor-pointer" />
                                    <FaTwitter className="bg-pink-500 w-6 h-6 rounded-full p-1 text-white  cursor-pointer" />
                                    <FaLinkedinIn className="bg-pink-500 w-6 h-6 rounded-full p-1 text-white  cursor-pointer" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-6 container">

                <HomeCard icon={Car} title="Free Delivery" items={'orders over 120$'} />
                <HomeCard icon={RotateCcw} title="Get Refund" items={'within 30 days return'} />
                <HomeCard icon={WalletCards} title="Safe Payment" items={'100% secure payment'} />
                <HomeCard icon={Headset} title="24/7 Support" items={'feel free to call us'} />
            </div>



            <div className="bg-white py-8 px-4 text-center">
                <p className="text-gray-800 font-bold mb-4">
                    Trusted By Over <span className="text-pink-500">4.5k+</span> Companies
                </p>
                <div className="flex justify-center flex-wrap gap-6 grayscale opacity-75">
                    {logos.map((src, i) => (
                        <img key={i} src={src} alt="Logo" className="h-10 object-contain" />
                    ))}
                </div>
            </div>



        </>
    )
}
