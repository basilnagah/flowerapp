"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import ForgetPasswordModal from '@/app/_auth/forgetPassword/forget-password'
import LoginModal from '@/app/_auth/login/page'
import RegisterModal from '@/app/_auth/register/register'
import SetPasswordModal from '@/app/_auth/setPassword/set-password'
import VerifyCodeModal from '@/app/_auth/verifyCode/verify-code'
import { userContext } from '@/context/user.context'
import { Heart, Search, ShoppingBag, ShoppingCart, UserPen } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

const Navbar = () => {


    const { data: session, status } = useSession();
    const pathname = usePathname()
    const { wishhlistArr, cartData, getAllCart, handleOpenLogin, handleOpenRegister, isLoginModalOpen, setIsLoginModalOpen, isRegisterModalOpen, setIsRegisterModalOpen }: any = useContext(userContext)


    useEffect(() => {
        console.log(session?.wishlist.length);

    }, [wishhlistArr])

    useEffect(() => {
        getAllCart()
    }, [session])





    const links = [
        { href: '/', label: 'Home' },
        { href: '/categoreis', label: 'All Category' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ]




    return (
        <>
            <nav className='flex justify-between items-center container mx-auto py-2'>
                <div className="logo">
                    <Image src="/images/logo.png" alt="" width={100} height={100} />
                </div>
                <div className="list">
                    <ul className='flex gap-3'>
                        {links.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`font-semibold ${pathname === link.href ? 'text-primaryColor' : 'text-gray-700'}`}>
                                {link.label}
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="adds flex gap-3 items-center">

                    {session?.token ? <div className='flex gap-3 items-center'>
                        <div className="flex items-center space-x-6 text-pink-500 relative">
                            <div className="relative">
                                <Search className="w-5 h-5" />
                            </div>
                            <Link href={'/wishlist'} className="relative">
                                <Heart className="w-5 h-5" />
                                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">{session?.wishlist.length | 0}</span>
                            </Link>
                            <Link href={'/cart'} className="relative">
                                <ShoppingBag className="w-5 h-5" />
                                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">{cartData.numOfCartItems}</span>
                            </Link>
                            <Link href={'/profile'} className="relative">
                                <UserPen className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                        : <button className='bg-primaryColor text-white rounded-2xl px-3 py-1' onClick={() => setIsLoginModalOpen(true)}>Login</button>
                    }
                </div>
            </nav>
            <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
                onOpenRegister={handleOpenRegister}
                onOpenForget={() => alert('aa')}
            />
            <RegisterModal
                isOpen={isRegisterModalOpen}
                onClose={() => setIsRegisterModalOpen(false)}
                onOpenLogin={handleOpenLogin}
            />

            {/* <ForgetPasswordModal
                isOpen={isForgetModalOpen}
                onClose={() => setIsForgetModalOpen(false)}
                onOpenForget={handleOpenRecover}
            />

            <VerifyCodeModal
                isOpen={isVerifyModalOpen}
                onClose={() => setIsVerifyModalOpen(false)}
                onOpenSet={handleOpenSet}
            />

            <SetPasswordModal
                isOpen={isSetModalOpen}
                onClose={() => setIsSetModalOpen(false)}
                onOpenLogin={handleOpenLogin}
            /> */}



        </>);
};

export default Navbar;


