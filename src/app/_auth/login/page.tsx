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




const LoginModal = ({ isOpen, onClose  , onOpenRegister , onOpenForget}: { isOpen: boolean; onClose: () => void; onOpenRegister: () => void; onOpenForget: () => void }) => {
    if (!isOpen) return null;


    // Navigation
    const router = useRouter()

    //state
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)


    //   //Form & Validation
    const schema = z.object({
        email: z.string({ required_error: 'email is required' }).email('email must be valid'),
        password: z.string({ required_error: 'password is required' }).regex(/[A-Z].+/, 'pass must start with capital followed by small,letter,special')
    })
    type Inputs = z.infer<typeof schema>

    const form = useForm<Inputs>({
        resolver: zodResolver(schema)
    })

    //functions
    const onSubmit: SubmitErrorHandler<Inputs> = async (values) => {

        setError(null)
        setLoading(true)
        const response = await signIn('credentials', {
          ...values,
          redirect: false
        })

        setLoading(false)
        console.log(response);

        // if logged in successfully
        if (response?.ok) {
          onClose()
          router.replace(response.url || '/dashboard')
          return;
        }

        // //otherwise
        setError(response?.error || 'something went wrong')
    }


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg relative">
                <h2 className="text-xl font-semibold mb-4">Login To Your Account</h2>
                <form onSubmit={form.handleSubmit(onSubmit)}>

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
                        placeholder="Password"
                        className="w-full p-2 mb-3 border rounded"
                    />
                    {form.formState.errors.password && (
                        <p className="text-sm text-primaryColor mt-1">
                            {form.formState.errors.password.message}
                        </p>
                    )}


                    <div className="flex items-center justify-between mb-4 text-sm">
                        <label>
                            <input type="checkbox" className="mr-1" />
                            Remember me
                        </label>
                        <a href="#" className="text-pink-500" onClick={onOpenForget}>Forgot Password</a>
                    </div>
                    <div className="mt-8 flex flex-col gap-2">
                        <p className='text-primaryColor text-center font-semibold'>{error}</p>
                        <button className='bg-primaryColor py-2 rounded-full text-white' disabled={loading || form.formState.isSubmitted && !form.formState.isValid}>Login</button>
                    </div>

                </form>
                <button
                    onClick={onClose} // Close modal for now; add login logic later
                    className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
                >
                    &times;
                </button>
                <p className="text-sm mt-4">
                    No account? <a href="#" className="text-pink-500" onClick={onOpenRegister}>Create one here</a>
                </p>
            </div>
        </div>
    );
};

export default LoginModal;
















