"use client";
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { userContext } from "@/context/user.context";
import { zodResolver } from "@hookform/resolvers/zod";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import { z } from "zod";

export default function Checkout() {
    const router = useRouter()
    const { session, status, cartData }: any = useContext(userContext);
    useEffect(() => {
        console.log(cartData);
    }, []);

    const fetchUserProfile = async () => {
        const res = await fetch(
            "https://flower.elevateegy.com/api/v1/auth/profile-data",
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${session.token}`, // uncomment if token-based
                },
            }
        );
        if (!res.ok) throw new Error("Failed to fetch profile");
        return res.json();
    };
    const { data, isLoading } = useQuery({
        queryKey: ["profile"],
        queryFn: fetchUserProfile,
    });

    const schema = z.object({
        firstName: z.string({ required_error: 'firstname is required' }).min(1, 'firstname is required').min(2, 'firstname at least 2 chars'),
        lastName: z.string({ required_error: 'lastName is required' }).min(1, 'lastName is required').min(2, 'lastname at least 2 chars'),
        email: z.string({ required_error: 'email is required' }).min(1, 'email is required').email('email must be valid'),
        street: z
            .string({ required_error: "street is required" })
            .min(1, "street is required")
            .min(2, "street at least 2 chars"),
        phone: z
            .string({ required_error: "phone is required" })
            .min(1, "phone is required")
            .min(2, "phone at least 2 chars"),
        city: z
            .string({ required_error: "city is required" })
            .min(1, "city is required"),
    });
    type Inputs = z.infer<typeof schema>;
    const form = useForm<Inputs>({
        defaultValues: {
            phone: data?.user.phone,
            firstName: data?.user.firstName,
            lastName: data?.user.lastName,
            email: data?.user.email
        },
        resolver: zodResolver(schema),
    });
    const { reset } = form;
    useEffect(() => {
        if (data) {
            reset({
                firstName: data.user.firstName || "",
                lastName: data.user.lastName || "",
                email: data.user.email || "",
                phone: data.user.phone || "",
            });
        }
    }, [data, reset]);


    // //functions
    const onSubmit: SubmitErrorHandler<Inputs> = async (values) => {
        const response = await fetch('https://flower.elevateegy.com/api/v1/orders', {
            method: "POST",
            headers: {
                Authorization: `Bearer ${session?.token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                'shippingAddress':{
                    "street": values.street,
                    "phone": values.phone,
                    "city": values.phone
                }
            }),
        });

        
        const data =  await response.json()

        if(data.message =='success'){
            router.push('/orderSuccess')
        }
    };

    if (!cartData) {
        return <h1>loading</h1>;
    }

    if (data) {

        return (
            <div className="min-h-screen bg-white p-6">
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="border rounded-md p-6">
                                <h2 className="text-pink-600 font-semibold mb-4">
                                    Your Billing Address
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        className="border rounded-md p-2"
                                        placeholder="First Name"
                                        {...form.register("firstName")}
                                    />
                                    <input
                                        className="border rounded-md p-2"
                                        placeholder="Last Name"
                                        {...form.register("lastName")}

                                    />
                                    <input
                                        className="border rounded-md p-2"
                                        placeholder="Email Address"
                                        {...form.register("email")}

                                    />
                                    <input
                                        className="border rounded-md p-2"
                                        placeholder="Phone Number"
                                        {...form.register("phone")}

                                    />
                                </div>

                                <div className="space-y-4 mt-4">
                                    <input
                                        className="border rounded-md p-2 w-full"
                                        placeholder="Address Line 1"
                                        {...form.register("street")}
                                    />
                                    <input
                                        className="border rounded-md p-2 w-full"
                                        placeholder="Address Line 2"
                                    />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <select className="border rounded-md p-2 text-gray-500 focus:outline-pink-500">
                                            <option disabled hidden>Choose Country</option>
                                            <option>cairo</option>
                                            <option>alex</option>
                                            <option>giza</option>
                                        </select>
                                        <input {...form.register("city")} className="border rounded-md p-2" placeholder="City" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            className="border rounded-md p-2"
                                            placeholder="Post Code"
                                        />
                                        <input
                                            className="border rounded-md p-2"
                                            placeholder="State"
                                        />
                                    </div>

                                    <textarea
                                        className="border rounded-md p-2 w-full h-24"
                                        placeholder="Your Message For Order"
                                    />

                                    {/* <div className="flex justify-between mt-6">
                                        <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-sm shadow-md">
                                        </button>
                                        <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-sm shadow-md">
                                            Next Step →
                                        </button>
                                    </div> */}
                                </div>
                            </div>

                            {/* Your Payment Info */}
                            <div className="border rounded-md p-4">
                                <h2 className="text-black font-semibold">Your Payment Info</h2>
                                {/* Expand this section as needed */}
                            </div>
                        </div>

                        <div className="bg-pink-50 rounded-xl p-6 shadow-md h-fit">
                            <h2 className="text-black font-semibold mb-6">Cart Summary</h2>

                            <div className="space-y-4 text-sm text-gray-700">
                                <div className="flex justify-between">
                                    <span>Sub Total:</span>
                                    <span className="text-gray-900">
                                        ${cartData.cart.totalPrice}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Discount:</span>
                                    <span className="text-gray-900">{cartData.cart.discount}%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping:</span>
                                    <span className="text-gray-900">Free</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Taxes:</span>
                                    <span className="text-gray-900">$0.00</span>
                                </div>

                                <div className="border-t pt-4 flex justify-between font-bold">
                                    <span>Total:</span>
                                    <span className="text-pink-600">
                                        ${cartData.cart.totalPriceAfterDiscount}
                                    </span>
                                </div>
                            </div>

                            <button className="mt-6 w-full bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 text-white py-2 rounded-full text-sm shadow-lg">
                                Checkout Now →
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );

    }


    return <h1>ayhaga</h1>
}
