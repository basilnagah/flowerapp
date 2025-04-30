/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { addProductToCart } from "@/lib/actions/auth.action";
import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";

export const userContext = createContext(0)

import React from 'react'
import toast from "react-hot-toast";

export default function UserProvider({ children }: any) {

    const { data: session, status } = useSession();
    const [cartData, setCartData] = useState();
    const [loading, setLoading] = useState(true);
    const [wishhlistArr , addToWishlistArr] = useState(0)

    async function getAllCart() {
        setLoading(true);
        try {

            const response = await fetch('https://flower.elevateegy.com/api/v1/cart', {
                headers: {
                    'Authorization': `Bearer ${session?.token}`,
                    "Content-Type": "application/json",

                },
                cache: 'no-store', // Ensure fresh data (optional, adjust as needed)
            });


            const data = await response.json()
            setCartData(data)

        } catch (error) {
            console.error("Error fetching cart:", error);
        } finally {
            setLoading(false);
        }

    }
    async function addToCart(pid: any , pQuantity: any) {
        if (session) {

            const myToken = session?.token
            

            const response = await fetch(`https://flower.elevateegy.com/api/v1/cart`, {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${myToken}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  product: pid,
                  quantity: pQuantity,
                }),
            });
            console.log(response);
            toast.success('product added to cart successfully')
            getAllCart()
        } else {
            toast.success('error adding in cart')
            handleOpenLogin()
        }

    }
    async function deleteCart(pid: any) {
        console.log('yala');

        const response = await fetch(`https://flower.elevateegy.com/api/v1/cart/${pid}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${session?.token}`,
                "Content-Type": "application/json",

            },
        });
        const data = await response.json()
        toast.success('product deleted from cart successfully')
        console.log(data);

        setCartData(data)
        if (!response.ok) {
            throw new Error("Failed to delete cart item");
        }
    }
    async function updateCart(pid: any, pQuantity: any) {

        const response = await fetch(`https://flower.elevateegy.com/api/v1/cart/${pid}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${session?.token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                quantity: pQuantity,
            }),
        });
        console.log(response);

        const data = await response.json()
        toast.success('cart updated successfully')

        console.log(data);
        setCartData(data)

        if (!response.ok) {
            throw new Error("Failed to update cart item");
        }

    }


    const addToWishlist = async (product: any) => {
        // if (session) {

        //     const myToken = session?.token
            

        //     const response = await fetch(`https://flower.elevateegy.com/api/v1/auth/editProfile`, {
        //         method: "PUT",
        //         headers: {
        //           Authorization: `Bearer ${myToken}`,
        //           "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({
        //           product: pID,
        //         //   quantity: pQuantity,
        //         }),
        //     });
        //     console.log(response);
        //     getAllCart()
        // } else {
        //     handleOpenLogin()
        // }

        if (!session) {
            handleOpenLogin()
            return;
        }

        // Check if the product is already in the wishlist
        if (session.wishlist.includes(product.id)) {
            toast.error(`${product.title} is already in your wishlist!`);
            
            // alert(`${product.title} is already in your wishlist!`);
            return;
        }

        // setLoading(true);
        // setError(null);
        
        try {
            session.wishlist.push(product.id)
            addToWishlistArr(product.id)
            
            toast.success(`${product.title} is added to your wishlist!`);
            // alert(`${pID} added to wishlist!`);
        } catch (err) {
            // setError("An error occurred while adding to wishlist");
            console.log('errpr');

        } finally {
            // setLoading(false);
        }
    };


    // ------------------------------------------
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [isForgetModalOpen, setIsForgetModalOpen] = useState(false);
    const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
    const [isSetModalOpen, setIsSetModalOpen] = useState(false);
    const handleOpenRegister = () => {
        setIsLoginModalOpen(false);
        setIsRegisterModalOpen(true);
    };

    const handleOpenLogin = () => {
        setIsRegisterModalOpen(false);
        setIsLoginModalOpen(true);
    };
    const handleOpenForget = () => {
        setIsLoginModalOpen(false);
        setIsForgetModalOpen(true);
    };

    const handleOpenRecover = () => {
        setIsForgetModalOpen(false);
        setIsVerifyModalOpen(true);
    };

    const handleOpenSet = () => {
        setIsVerifyModalOpen(false);
        setIsSetModalOpen(true);
    };
    return (
        <userContext.Provider value={{ session, status, cartData, getAllCart, addToCart, deleteCart, updateCart, loading, handleOpenLogin, handleOpenRegister, isLoginModalOpen, setIsLoginModalOpen, isRegisterModalOpen, setIsRegisterModalOpen, addToWishlist ,wishhlistArr }}>
            {children}
        </userContext.Provider>
    )
}
