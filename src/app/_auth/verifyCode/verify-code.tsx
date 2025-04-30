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
import { forgetAction, recoverAction, registerAction } from '@/lib/actions/auth.action';

const VerifyCodeModal = ({ isOpen, onClose, onOpenSet }: { isOpen: boolean; onClose: () => void; onOpenSet: () => void }) => {
    if (!isOpen) return null;


    // Navigation
    const router = useRouter()

    //state
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)


    //   //Form & Validation
    const schema = z.object({
        resetCode: z.string({ required_error: 'email is required' }),
    })
    type Inputs = z.infer<typeof schema>

    const form = useForm<Inputs>({

        resolver: zodResolver(schema)
    })

    //functions
    const onSubmit: SubmitErrorHandler<Inputs> = async (values) => {
        setError(null)
        setLoading(true)
        const response = await recoverAction(values)
        
        setLoading(false)

        if(response.status=='Success'){
            onClose()
            onOpenSet()
            return;
        }

        setError(response.error)
    }


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg relative">
                <h2 className="text-xl font-semibold mb-4">Verify Code</h2>
                <form onSubmit={form.handleSubmit(onSubmit)}>

                    <input
                        {...form.register("resetCode")}
                        type="resetCode"
                        placeholder="resetCode"
                        className="w-full p-2 mb-3 border rounded"
                    />
                    {form.formState.errors.resetCode && (
                        <p className="text-sm text-primaryColor mt-1">
                            {form.formState.errors.resetCode.message}
                        </p>
                    )}

          
                    <div className="mt-8 flex flex-col gap-2">
                        <p className='text-primaryColor text-center font-semibold'>{error}</p>
                        <button className='bg-primaryColor py-2 rounded-full text-white' disabled={loading || form.formState.isSubmitted && !form.formState.isValid}>Recover Password</button>
                    </div>

                </form>
                <button
                    onClick={onClose} 
                    className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
                >
                    &times;
                </button>
           
            </div>
        </div>
    );
};

export default VerifyCodeModal;
















