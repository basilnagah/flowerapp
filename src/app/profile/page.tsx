/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { authOptions } from "@/auth";
import { userContext } from "@/context/user.context";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { getServerSession } from "next-auth";
import React, { useContext, useEffect } from "react";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import { z } from "zod";

export default function Profile() {
    const { session }: any = useContext(userContext)

    const fetchUserProfile = async () => {
        const res = await fetch('https://flower.elevateegy.com/api/v1/auth/profile-data', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${session.token}` // uncomment if token-based
            }
        });
        if (!res.ok) throw new Error('Failed to fetch profile');
        return res.json();
    };

    const {data , isLoading} = useQuery({
        queryKey:['profile'],
        queryFn: fetchUserProfile
    })

    

    const schema = z.object({
        firstName: z.string({ required_error: 'firstname is required' }).min(1, 'firstname is required').min(2, 'firstname at least 2 chars'),
        lastName: z.string({ required_error: 'lastName is required' }).min(1, 'lastName is required').min(2, 'lastname at least 2 chars'),
        email: z.string({ required_error: 'email is required' }).min(1, 'email is required').email('email must be valid'),
        phone: z.string({ required_error: 'phone is required' }).min(1, 'phone is required').regex(/^\+201(0|1|2|5)[0-9]{8}$/, 'must be egyptian numbernumber with country code'),
    })
    type Inputs = z.infer<typeof schema>

    const form = useForm<Inputs>({
        defaultValues: {
            firstName: data?.user.firstName,
            lastName: data?.user.lastName,
            email: data?.user.email,
            phone: data?.user.phone,
        },
        resolver: zodResolver(schema)
    });
    const { reset } = form;
    useEffect(() => {
        if (data) {
            console.log('tmam');

            reset({
                firstName: data.user.firstName || "",
                lastName: data.user.lastName || "",
                email: data.user.email || "",
                phone: data.user.phone || "",
            });
        }
    }, [data, reset]);


    const onSubmit: SubmitErrorHandler<Inputs> = async (values) => {

        const response = await fetch('https://flower.elevateegy.com/api/v1/auth/editProfile', {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${session?.token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        });

        console.log(response);


    }

    return (
        <div className="min-h-screen bg-white p-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <form onSubmit={form.handleSubmit(onSubmit)}>

                        <div className="border rounded-md p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        {...form.register("firstName")}
                                        id="firstName"
                                        className="border rounded-md p-2 w-full"
                                        placeholder="First Name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        {...form.register("lastName")}
                                        id="lastname"
                                        className="border rounded-md p-2 w-full"
                                        placeholder="Last Name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        {...form.register("email")}

                                        id="email"
                                        className="border rounded-md p-2 w-full"
                                        placeholder="Email Address"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        {...form.register("phone")}
                                        id="phone"
                                        className="border rounded-md p-2 w-full"
                                        placeholder="Phone Number"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4 mt-4">
                                <div>
                                    <label htmlFor="address1">Adress Line 1</label>
                                    <input
                                        id="address1"
                                        className="border rounded-md p-2 w-full"
                                        placeholder="Address Line 1"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="address2">Adress Line 2</label>
                                    <input
                                        id="address2"
                                        className="border rounded-md p-2 w-full"
                                        placeholder="Address Line 2"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="country">Country</label>
                                        <select
                                            id="country"
                                            className="w-full border rounded-md p-2 text-gray-500 focus:outline-pink-500"
                                        >
                                            <option>Choose Country</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="city">City</label>
                                        <input
                                            id="city"
                                            className="border rounded-md p-2 w-full"
                                            placeholder="City"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="Postal">Postal Code</label>
                                        <input
                                            id="Postal"
                                            className="border rounded-md p-2 w-full"
                                            placeholder="Post Code"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="state">State</label>
                                        <input
                                            id="state"
                                            className="border rounded-md p-2 w-full"
                                            placeholder="State"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between mt-6">
                            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-sm shadow-md">
                                Confirm
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}
