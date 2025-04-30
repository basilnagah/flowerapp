'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import { authOptions } from '@/auth';
import { userContext } from '@/context/user.context';
import { addProductToCart } from '@/lib/actions/auth.action';
import { Eye, Heart, ShoppingCart } from 'lucide-react'
import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useContext } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'

export default function Card({ products }) {

  const { data: session, status , update } = useSession();
  const { getAllCart, addToCart  ,  handleOpenLogin , addToWishlist }: any = useContext(userContext)




  return (
    <div className="bg-white rounded-2xl col-span-1">
      <div className='relative rounded-xl group '>
        <div className="relative bg-pink-100 p-3 rounded-xl h-[150px]">

          <img src={products.imgCover} alt="Special Gift Box" className="w-full h-32 object-contain mx-auto" />

          {!products.quantity ? <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
            OUT OF STOCK
          </span> : ''}
        </div>
        <div className='flex justify-center items-center gap-3 cursor-pointer absolute top-0 end-0 start-0 bottom-0 bg-[#F82BA9B2] rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 '>
          <Link href={`/productDetails/${products.id}`}> <Eye className='bg-[#F82BA9] text-white w-7 h-7 rounded-full p-1' /></Link>
          <Heart onClick={()=> addToWishlist(products)} className='bg-[#F82BA9] text-white w-7 h-7 rounded-full p-1' />
        </div>
      </div>

      <div className="mt-4 px-4 flex justify-between items-center">
        <div>
          <p className="text-sm font-semibold text-gray-800">{products.title}</p>
          <div className="flex items-center text-yellow-400 my-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>
          { }
          <p className="text-red-500 font-semibold">${products.price}</p>
        </div>

        <div className="mt-2">
          <button onClick={() => addToCart(products.id , 1)} className="bg-purple-500 p-2 rounded-full text-white">
            <ShoppingCart />
          </button>
        </div>
      </div>
    </div>
  )
}
