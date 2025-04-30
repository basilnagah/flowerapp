'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { authOptions } from '@/auth';
import { userContext } from '@/context/user.context';
import { getProductFromCart } from '@/lib/actions/auth.action';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners';

export default function Cart() {

    const { session, status, getAllCart, cartData, deleteCart, setCartData, updateCart, loading }: any = useContext(userContext)
    const token = session?.token as string;

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "pink",
    };

    React.useEffect(() => {
        if (session && !cartData) {
            getAllCart();
        }
    }, [session, cartData, getAllCart]);

  
    if (!cartData || !cartData.numOfCartItems) {
        return <h1>No items in cart</h1>;
    }

    return (

        loading ? (
            <div className="flex justify-center items-center h-64">
                <ClipLoader
                    color="#ec4899" // Tailwind pink-500
                    loading={loading}
                    cssOverride={override}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        ) : (

            <div className="container">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Cart Table */}
                    <div className="flex-1">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-gray-700">
                                <thead>
                                    <tr className="border-b">
                                        <th className="py-3 px-4">IMAGE</th>
                                        <th className="py-3 px-4">PRODUCT NAME</th>
                                        <th className="py-3 px-4">PRICE</th>
                                        <th className="py-3 px-4">QUANTITY</th>
                                        <th className="py-3 px-4">SUB TOTAL</th>
                                        <th className="py-3 px-4">SUB TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartData?.cart.cartItems.map((item, index) => (
                                        <tr key={index} className="border-b">
                                            <td className="py-3 px-4">
                                                <Image
                                                    src={item.product.imgCover}
                                                    alt={item.product.title}
                                                    width={80}
                                                    height={80}
                                                    className="rounded-lg"
                                                />
                                            </td>
                                            <td className="py-3 px-4">
                                                <p>{item.product.title}</p>
                                                <p className="text-sm text-gray-500">Type: category</p>
                                                <p className="text-sm text-gray-500">Color: color</p>
                                            </td>
                                            <td className="py-3 px-4">${item.price!.toFixed(2)}</td>
                                            <td className="py-3 px-4">

                                                <div className="flex items-center gap-2">
                                                    <button
                                                        // onClick={() => updateMutation.mutate({ pId: item._id, pQuantity: item.quantity + 1 })}
                                                        onClick={() => updateCart(item.product.id, item.quantity - 1)}
                                                        className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center"
                                                    >
                                                        -
                                                    </button>
                                                    <span>{item.quantity}</span>
                                                    <button
                                                        // onClick={() => updateMutation.mutate({ pId: item._id, pQuantity: item.quantity + 1 })}
                                                        onClick={() => updateCart(item.product.id, item.quantity + 1)}
                                                        className="w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="py-3 px-4">${(item.price! * item.quantity!).toFixed(2)}</td>
                                            <td className="py-3 px-4">
                                                <button
                                                    onClick={() => deleteCart(item.product.id)}
                                                    className="text-gray-500 hover:text-red-500"
                                                >
                                                    ✕
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 flex flex-col sm:flex-row gap-4">
                            <Link href="/">
                                <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600">
                                    ← Continue Shopping
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Cart Summary */}
                    <div className="w-full md:w-80 bg-pink-50 p-6 rounded-lg">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Cart Summary</h2>
                        <div className="space-y-2 text-gray-700">
                            <div className="flex justify-between">
                                <span>Sub Total:</span>
                                <span>${cartData?.cart?.totalPrice}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Discount:</span>
                                <span>{cartData?.cart?.discount}%</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping:</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Taxes:</span>
                                <span>$0</span>
                            </div>
                            <div className="flex justify-between font-semibold text-gray-800 pt-2 border-t">
                                <span>Total:</span>
                                <span>${cartData?.cart?.totalPriceAfterDiscount}</span>
                            </div>
                        </div>
                        <Link href="/checkout">
                            <button className="w-full mt-6 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600">
                                Checkout Now →
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        ))
}




