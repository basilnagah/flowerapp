'use client'
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import Link from 'next/link'
import { Form, SubmitErrorHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { registerAction } from '@/lib/actions/auth.action';

const RegisterModal = ({ isOpen, onClose, onOpenLogin }: { isOpen: boolean; onClose: () => void; onOpenLogin: () => void }) => {
    if (!isOpen) return null;


    // Navigation
    const router = useRouter()

    //state
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)


    //   //Form & Validation
    const schema = z.object({
        firstName: z.string({ required_error: 'firstname is required' }).min(1, 'firstname is required').min(2, 'firstname at least 2 chars'),
        lastName: z.string({ required_error: 'lastName is required' }).min(1, 'lastName is required').min(2, 'lastname at least 2 chars'),
        email: z.string({ required_error: 'email is required' }).min(1, 'email is required').email('email must be valid'),
        password: z.string({ required_error: 'password is required' }).min(1, 'password is required').regex(/[A-Z].+/, 'pass must start with capital followed by small,letter,special'),
        rePassword: z.string({ required_error: 'rePassword is required' }).min(1, 'rePassword is required').regex(/[A-Z].+/, 'pass must start with capital followed by small,letter,special'),
        phone: z.string({ required_error: 'phone is required' }).min(1, 'phone is required').regex(/^\+201(0|1|2|5)[0-9]{8}$/, 'must be egyptian numbernumber with country code'),
        gender: z.string({ required_error: 'gender is required' }).regex(/^(male|female)$/i, 'gender must be male or female'),
    }).refine((values) => values.password == values.rePassword, {
        message: 'password dont match',
        path: ['rePassword']
    })
    type Inputs = z.infer<typeof schema>

    const form = useForm<Inputs>({

        resolver: zodResolver(schema)
    })

    //functions
    const onSubmit: SubmitErrorHandler<Inputs> = async (values) => {
        setError(null)
        setLoading(true)
        const response = await registerAction(values)
        
        setLoading(false)

        if(response.message=='success'){
            onClose()
            onOpenLogin()
            return;
        }

        setError(response.error)
    }


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg relative">
                <h2 className="text-xl font-semibold mb-4">Create Account</h2>
                <form onSubmit={form.handleSubmit(onSubmit)}>

                    <input
                        {...form.register("firstName")}
                        type="firstName"
                        placeholder="first Name"
                        className="w-full p-2 mb-3 border rounded"
                    />
                    {form.formState.errors.firstName && (
                        <p className="text-sm text-primaryColor mt-1">
                            {form.formState.errors.firstName.message}
                        </p>
                    )}

                    <input
                        {...form.register("lastName")}
                        type="lastName"
                        placeholder="last Name"
                        className="w-full p-2 mb-3 border rounded"
                    />
                    {form.formState.errors.lastName && (
                        <p className="text-sm text-primaryColor mt-1">
                            {form.formState.errors.lastName.message}
                        </p>
                    )}

                    <input
                        {...form.register("email")}
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 mb-3 border rounded"
                    />
                    {form.formState.errors.email && (
                        <p className="text-sm text-primaryColor mt-1">
                            {form.formState.errors.email.message}
                        </p>
                    )}

                    <input
                        {...form.register("password")}
                        type="password"
                        placeholder="password"
                        className="w-full p-2 mb-3 border rounded"
                    />
                    {form.formState.errors.password && (
                        <p className="text-sm text-primaryColor mt-1">
                            {form.formState.errors.password.message}
                        </p>
                    )}

                    <input
                        {...form.register("rePassword")}
                        type="rePassword"
                        placeholder="rePassword"
                        className="w-full p-2 mb-3 border rounded"
                    />
                    {form.formState.errors.rePassword && (
                        <p className="text-sm text-primaryColor mt-1">
                            {form.formState.errors.rePassword.message}
                        </p>
                    )}

                    <input
                        {...form.register("phone")}
                        type="phone"
                        placeholder="phone"
                        className="w-full p-2 mb-3 border rounded"
                    />
                    {form.formState.errors.phone && (
                        <p className="text-sm text-primaryColor mt-1">
                            {form.formState.errors.phone.message}
                        </p>
                    )}

                    <input
                        {...form.register("gender")}
                        type="gender"
                        placeholder="gender"
                        className="w-full p-2 mb-3 border rounded"
                    />
                    {form.formState.errors.gender && (
                        <p className="text-sm text-primaryColor mt-1">
                            {form.formState.errors.gender.message}
                        </p>
                    )}

          
                    <div className="mt-8 flex flex-col gap-2">
                        <p className='text-primaryColor text-center font-semibold'>{error}</p>
                        <button className='bg-primaryColor py-2 rounded-full text-white' disabled={loading || form.formState.isSubmitted && !form.formState.isValid}>Create Account</button>
                    </div>

                </form>
                <button
                    onClick={onClose} 
                    className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
                >
                    &times;
                </button>
                <p className="text-sm mt-4">
                    Already have an account? <a href="#" className="text-pink-500" onClick={onOpenLogin}>Login</a>
                </p>
            </div>
        </div>
    );
};

export default RegisterModal;
















