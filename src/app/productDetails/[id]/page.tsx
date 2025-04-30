/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { userContext } from '@/context/user.context';
import { addProductToCart, getDetails } from '@/lib/actions/auth.action';
/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import { Heart, ShoppingCart } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners';

export default function Page({ params }: { params: { id: string } }) {

    const [data, setData] = useState<ProductDetails | null>(null)
    const [quantity, setQuantity] = useState(0)
    const { data: session, status } = useSession();
    const { addToCart, addToWishlist }: any = useContext(userContext)


    async function getProductDetails() {
        const resp = await getDetails(params.id)
        setData(resp)

    }

    useEffect(() => {
        getProductDetails();
    }, []);












    return (
        <>
            {data?.product ?
                <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col gap-4 w-1/4">
                        <Image
                            src={data.product.imgCover}
                            alt={data.product.title}
                            width={400}
                            height={500}
                            className="rounded-lg object-cover"
                        />
                        <div className="flex gap-2">
                            {data.product.images.map((image, index) => (
                                <Image
                                    key={index}
                                    src={image}
                                    alt={`image ${index + 1}`}
                                    width={80}
                                    height={80}
                                    className="rounded-lg object-cover cursor-pointer hover:opacity-80"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 ">
                        <h1 className="text-2xl font-bold text-gray-800">{data.product.title}</h1>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-xl font-semibold text-gray-800">${data.product.priceAfterDiscount}</span>
                            <span className="text-lg text-gray-500 line-through">${data.product.price}</span>
                            <span className="text-sm text-pink-500 font-medium">{data.product.discount}% off</span>
                        </div>
                        <p className="text-gray-600 mt-4">{data.product.description}</p>

                        <div className="mt-6 flex items-center gap-4">
                            <span className="text-gray-700">Quantity</span>
                            <div className="flex items-center border rounded-lg">
                                <button onClick={() => setQuantity(quantity - 1)} className="px-3 py-1 text-gray-600 hover:bg-gray-100">-</button>
                                <span className="px-4 py-1 text-gray-800">{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 text-gray-600 hover:bg-gray-100">+</button>
                            </div>
                        </div>

                        <div className="mt-4 flex items-center gap-4">
                            <span className="text-gray-700">Size</span>
                            <select className="border rounded-lg px-3 py-1 text-gray-800">
                                <option>Choose Size</option>
                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>
                            </select>
                        </div>

                        <div className="mt-4 flex items-center gap-4">
                            <span className="text-gray-700">Color</span>
                            <div className="flex gap-2">
                                <button className="w-6 h-6 rounded-full bg-purple-500 border-2 border-gray-300"></button>
                                <button className="w-6 h-6 rounded-full bg-green-500 border-2 border-gray-300"></button>
                                <button className="w-6 h-6 rounded-full bg-blue-500 border-2 border-gray-300"></button>
                                <button className="w-6 h-6 rounded-full bg-yellow-500 border-2 border-gray-300"></button>
                                <button className="w-6 h-6 rounded-full bg-red-500 border-2 border-gray-300"></button>
                            </div>
                        </div>

                        <ul className="mt-6 text-gray-700 space-y-2">
                            <li>Stock: <span className="text-gray-800">{data.product.quantity ? 'available' : 'out of stock'}</span></li>
                        </ul>

                        <div className="mt-6 flex items-center gap-4">
                            <button onClick={() => addToCart(data.product._id, quantity)} className="bg-pink-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-pink-600">
                                <ShoppingCart />
                                Add to Cart
                            </button>
                            <button onClick={() => addToWishlist(data.product._id)} className="text-pink-500 hover:text-pink-600">
                                <Heart />

                            </button>
                        </div>
                    </div>
                </div>
                : <div className="flex justify-center items-center h-64">
                    <ClipLoader
                        color="#ec4899" // Tailwind pink-500
                        // loading={loading}
                        // cssOverride={override}
                        size={50}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>}
        </>
    )
}
