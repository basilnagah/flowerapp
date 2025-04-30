/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { authOptions } from '@/auth'
import Card from '@/components/common/Card'
import { userContext } from '@/context/user.context'
import { getServerSession } from 'next-auth'
import React, { useContext, useEffect, useState } from 'react'

export default function Wishlist() {

  const [products, setProducts] = useState([])
  const [wishlist, setWishlist] = useState(null)
  const { session } = useContext(userContext)



  useEffect(() => {
    async function fetchWishlistProducts() {

      const wishlist = session.wishlist || [];

      try {
        const response = await fetch("https://flower.elevateegy.com/api/v1/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        const allProducts: Products[] = data.products;

        const wishlistProducts: any = allProducts.filter((product: Products) =>
          wishlist.includes(product.id)
        );

        console.log(wishlistProducts);

        setProducts(wishlistProducts);
      } catch (err) {
        console.error(err);
        console.log('errr');
      } finally {
        console.log('finish');

      }
    }

    fetchWishlistProducts();
  }, [session]);


  if (products) {

    return (
      <>
        <div className="container">

          <h2 className="text-xl font-bold text-[#0D0140] relative inline-block">
            My Whishlist
            <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-pink-400 rounded-full"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
            {products?.map(product => <Card key={product._id} products={product} />)}
          </div>


        </div>

      </>
    )
  }


  return <h1>fadya</h1>
}
