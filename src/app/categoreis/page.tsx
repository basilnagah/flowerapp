/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useEffect, useState } from 'react'
// import Sidebar from './_copmonents/sidebar'
import Card from '@/components/common/Card'

export default function Categoreis() {
    const [products, setProducts] = useState(null)
    const [keyword, setKeyword] = useState('')
    const [price, setPrice] = useState(4000); // State to track the range input value

    const handlePriceChange = (e: { target: { value: React.SetStateAction<number> } }) => {
      setPrice(e.target.value); // Update state when the range input changes
    };
    // bey keyword
    const getAllProducts = async (key = '', priceFilter = 4000) => {
        try {
          setProducts(null); // Clear products before fetching new ones
          const response = await fetch(
            `https://flower.elevateegy.com/api/v1/products?keyword=${key}&price[lt]=${priceFilter}`
          );
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };

    useEffect(() => {
        getAllProducts()
    }, [])

    // Debounce the search to avoid excessive API calls
    useEffect(() => {
        const debounce = setTimeout(() => {
            getAllProducts(keyword , price);
        }, 500); // 500ms delay

        return () => clearTimeout(debounce); // Cleanup on unmount or keyword change
    }, [keyword , price]);

    // Handle search input change
    const handleSearch = (e: { target: { value: any } }) => {
        const value = e.target.value;
        setKeyword(value);
    };

    return (
        <div className="min-h-screen container p-4">
            <div className="flex flex-col md:flex-row gap-6">
                <aside className="w-full md:w-64 bg-white rounded-xl shadow p-4 space-y-6 sticky top-4 h-fit">
                    {/* Search */}
                    <div>
                        <h2 className="text-sm font-semibold mb-2">Search</h2>
                        <input
                            type="text"
                            value={keyword}
                            onInput={handleSearch}
                            placeholder="Search by keyword"
                            className="w-full border border-gray-300 rounded p-2 text-sm"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <h2 className="text-sm font-semibold mb-2">Category</h2>
                        {['Home Living', 'Electronics', 'Watches', 'Bags', 'Accessories', 'Others'].map((category) => (
                            <div key={category} className="flex items-center space-x-2 text-sm">
                                <input type="checkbox" className="accent-pink-500" />
                                <label>{category}</label>
                            </div>
                        ))}
                    </div>

                    {/* Brands */}
                    <div>
                        <h2 className="text-sm font-semibold mb-2">Brands</h2>
                        {['Tenda', 'Sony', 'Samsung', 'Gionee', 'Apple', 'Others'].map((brand) => (
                            <div key={brand} className="flex items-center space-x-2 text-sm">
                                <input type="checkbox" className="accent-pink-500" />
                                <label>{brand}</label>
                            </div>
                        ))}
                    </div>

                    {/* Price Rating */}
                    <div>
                        <h2 className="text-sm font-semibold mb-2">Price Rating</h2>
                        <input onInput={handlePriceChange} value={price} type="range" min="0" max="4000" className="w-full accent-pink-500" />
                        <p className="text-xs text-gray-500 mt-1">$0 - ${price}</p>
                    </div>

                    {/* Sales */}
                    <div>
                        <h2 className="text-sm font-semibold mb-2">Sales</h2>
                        {['On Sale', 'In Stock', 'Out of Stock'].map((sale) => (
                            <div key={sale} className="flex items-center space-x-2 text-sm">
                                <input type="checkbox" className="accent-pink-500" />
                                <label>{sale}</label>
                            </div>
                        ))}
                    </div>

                    {/* Ratings */}
                    <div>
                        <h2 className="text-sm font-semibold mb-2">Ratings</h2>
                        {[5, 4, 3, 2, 1].map((star) => (
                            <div key={star} className="flex items-center space-x-1 text-sm">
                                <input type="radio" name="rating" className="accent-pink-500" />
                                <span>{'★'.repeat(star)}{'☆'.repeat(5 - star)}</span>
                            </div>
                        ))}
                    </div>

                    {/* Colors */}
                    <div>
                        <h2 className="text-sm font-semibold mb-2">Colors</h2>
                        <div className="flex space-x-2">
                            {["bg-red-500", "bg-yellow-400", "bg-green-500", "bg-blue-500", "bg-orange-500"].map((color, i) => (
                                <div
                                    key={i}
                                    className={`${color} w-5 h-5 rounded-full cursor-pointer border border-gray-200`}
                                ></div>
                            ))}
                        </div>
                    </div>

                    {/* Sizes */}
                    <div>
                        <h2 className="text-sm font-semibold mb-2">Sizes</h2>
                        {['S', 'M', 'L', 'XL'].map((size) => (
                            <div key={size} className="flex items-center space-x-2 text-sm">
                                <input type="checkbox" className="accent-pink-500" />
                                <label>{size}</label>
                            </div>
                        ))}
                    </div>
                </aside>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
                    {products?.products.map((product: unknown) => <Card key={product._id} products={product} />)}





                </div>
            </div>
        </div>
    )
}
