/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { authOptions } from "@/auth";
import Card from "@/components/common/Card";
import HomeCard from "@/components/common/home-card";
import { addProductToCart } from "@/lib/actions/auth.action";
import { Car, CheckCircle, Gem, Gift, Headset, House, LampDesk, RotateCcw, ShoppingCart, Star, WalletCards } from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

export default async function Home() {

  const response = await fetch(`https://flower.elevateegy.com/api/v1/products`)
  const products: productResponse = await response.json()

  const testimonials = Array(4).fill({
    name: 'Ahmed Mohamed',
    role: 'Customer',
    text: 'Ab voluptatum voluptate rerum, tempora accusantium voluptas illum. Libero nostrum blanditiis eveniet.',
    avatar: '/images/avatar.jpg',
    rating: 5,
  });

  const logos = ['images/logo1.png', 'images/logo1.png ', 'images/logo1.png', 'images/logo1.png'];




  return <>

    <div className="container mx-auto">

      <section className="px-6 py-3">

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4 px-4 py-6">

          <HomeCard icon={Gift} title="Gifts Box" items={30} />
          <HomeCard icon={House} title="Gifts Box" items={30} />
          <HomeCard icon={LampDesk} title="Gifts Box" items={30} />
          <HomeCard icon={Gift} title="Gifts Box" items={30} />
          <HomeCard icon={Gem} title="Gifts Box" items={30} />



        </div>

        <div className="px-4 py-8  mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            {/* Left: Side Promo Card */}
            <div className="md:col-span-1 rounded-xl p-6 flex flex-col justify-end text-left bg-[url('https://s3-alpha-sig.figma.com/img/bde1/fd51/eb6f2b4d50473bb6f676ef277945cb01?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YCiogrjHo8EySCSuGHlrHXxFR2b-WhK00y~Imuo8k1EL-R-oq1zJfTmm3~ta5UBUjfIFUtJ-BV77kpj5ZsfXQx2yoWw3ZpRTE5q8AUARLctT7BHmVkEZusaw4jrVlKRhRQBu~7CKibkBu2yePhj4jZe4pBNheEijw3kXy1YBQH8xFbplGEHJ1FEejgcw-8yF8fGVzSSTIn~0OI-YZjz4tbn9RadR-r8~sE8kz47Pdp3hJCjLnJ4dcVIke7ticT37Gz-kZLAKCnODXRRw0qc1Y0CpeSj49lOIRynUnqhPOdEy-gRMg2W-WTJI9pYZHIGk9AknIvcNnSr1InylMh7Zhg__')] h-80 bg-cover bg-center">
              <div>
                <p className="text-pink-600 font-semibold text-sm">START $10.99</p>
                <h3 className="text-lg font-bold text-gray-800 mt-2 leading-snug">
                  Special Gifts Box For Your Love
                </h3>
              </div>
              <button className="mt-4 bg-pink-500 text-white text-sm font-medium px-4 py-2 rounded-full w-fit">
                Shop Now →
              </button>
            </div>

            {/* Middle: Hero Section */}
            <div className="md:col-span-3 bg-[url('https://s3-alpha-sig.figma.com/img/755e/bb93/54ecab0a89816c4c74c1d62e25cc61cc?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lrJgXzz4l-MjUBGPVGUuHBaDEE5UZd2XC8MBpcCfWo~kAqGHQOXx~jSXWJJDkyFVSfGuUM9cp9XzKwBvXO~W6Ga7oOz1ITIeHGKFfdNnT~6NLSQpcNP9KDemvCA9GX4X8oWjzwF8i7BTW5fFnd2fQQt8aSZcVZ6YGkFx5Np9O5YJqFfBB2pjd5YMVv3~M-Je8ZQeCDVL4XD0jJnIliEtZSys~u9sxSCPUM-2183e0zTz1NTYHXGdYxAqXfKgXCQ3DqqhC~ZdN4R6P7H7wmDzCEKsV2x3dQynZ1Uzjsc9zpG-1ozusrTf5O1NX6C5izx2O4UnAN31p8oD~BZnDP4ysg__')] h-80 bg-cover bg-center rounded-xl p-6 relative overflow-hidden flex flex-col justify-between">
              <p className="text-pink-600 font-semibold text-sm">BEST GIFT SHOP</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                Choose Perfect <span className="text-pink-600">Gifts</span> From Us
              </h2>
              <p className="text-sm text-gray-600 mt-2 mb-4">
                Culpa ducimus nesciunt aliquam non rerum esse recusandae omnis. Rerum optio dolores et.
              </p>
              <button className="bg-pink-500 text-white px-4 py-2 text-sm rounded-full w-fit">
                Shop Now →
              </button>

              {/* Dots and arrows */}
              <div className="absolute bottom-4 right-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                <span className="w-2 h-2 bg-white rounded-full opacity-60"></span>
                <span className="w-2 h-2 bg-white rounded-full opacity-60"></span>
                <div className="ml-4 flex gap-2">
                  <button className="bg-white w-8 h-8 rounded-full flex items-center justify-center">←</button>
                  <button className="bg-white w-8 h-8 rounded-full flex items-center justify-center">→</button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

            <div className="flex flex-col items-end justify-center bg-blue-50 p-4 rounded-xl bg-[url('https://s3-alpha-sig.figma.com/img/8997/06ed/82ceed301b5a02612b87848524d393fd?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rMP5ozDyMpPBDSVYSSOgADS90AGyM~L3VAVo20lCWgPNkSbZp-2yxVmFl0oSZ5K71vJsxzMumSw0ylVzJyIctZMdJP4pEwDP-HGHz4XD66fkX02umn6kfsSVSOPa1uXrR-3DJpzcsOFxhCFJNQ~N4CQV1FFqHc5N2OH9NgSAXi2UhC6ChSMWlNmwvKfHfFx4zuVXnKyppMdiWvyuQw9tOpn0XgskRLcuSROLdp6jsCoBWlR1KGVK~4s4HJHwF5cjtGXNTV1hsPF-sM46wZnuwqjPQZkutJAeaLT2vFEzJh4nLmvjfXPAYyAo2R5fwo8ARi9BVzYmaLCNUWeAlBaguQ__')] h-64 bg-cover bg-center ">
              <p className="text-sm text-pink-600 font-medium">Gifts Box</p>
              <h4 className="font-semibold text-lg mt-1 mb-2">Awesome Gifts Box Collections</h4>
              <button className="bg-pink-500 text-white px-4 py-2 text-sm rounded-full">Shop Now →</button>
            </div>

            <div className="bg-purple-100 p-4 rounded-xl bg-[url('https://s3-alpha-sig.figma.com/img/4920/fb42/e4fe5d3c111dd3d9d9b48a9137953a2f?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mROHwxDrKAAUk5SJo9HRBW2AgEkQA7kMTjf0a0-LEIcxQtcAz63tEaoivr0mfomP2uEC4s0YEBi3wq-D4V9ewgrMbJllvQhIvRvbTsjQSFtrsIUCed4wKw14QHa6CvFoLWIrfUVGsgrVIO8NPyqkigKS6NIxxY7N20SzgOIJFWnMD13fDfwwB2hHBc3dXnrQ~WpkzPacKWjs~SKK-wvxci~AuxIR-7LjI6ODXoBlOTIvZvJ-qR6g1gPe5EIyqI784g3Dnm9DZLiPw9sddx73zTqEAOF7OtRc0e1wsd0C2Ym1I1MWP91QGF4HRz7jz-3aMY6dNzTLKyotZajuGtZsJw__')] h-64 bg-cover bg-center ">
              <p className="text-sm text-pink-600 font-medium">Occasion Gifts</p>
              <h4 className="font-semibold text-lg mt-1 mb-2">Best Occasion Gifts Collections</h4>
              <button className="bg-pink-500 text-white px-4 py-2 text-sm rounded-full">Discover Now →</button>
            </div>

            <div className="bg-orange-100 p-4 rounded-xl bg-[url('https://s3-alpha-sig.figma.com/img/b9e5/dc6c/6c5867a0bc35f0a8a0cae91d9dbecb87?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i57ISVEdZXmmH4A7XjnaJqf3b2ki1DVeh9mTX746K2-xtg94qtsps2TYTeqf5-QrgFc6hjDylR6AJvU-qjX3RUPrg~JE33cv3B3Qj4VkpL0MHXfl3lHMTOJkWxlLhpu1glkRIpVbyjs4C-9uRKJitxjsmwNVhYMBi4TZt-SLnKhuo-hhNbM0VLkdxI~yA9ZJzAK~JMbjH2iZei8R8plyt1eld8Y1r~LQqbvbvEMGWg2R73NbLYXTMp~07b7z~E-qrGuAllNDoKoqAP13EU6Df0qBuox5CFPOnAMQdSyTu3g5SQ1DZhRaqy~t1RHFS62L7abAkMHKnXPg3oA2hr21HA__')] h-64 bg-cover bg-center ">
              <p className="text-sm text-pink-600 font-medium">Occasion Gifts</p>
              <h4 className="font-semibold text-lg mt-1 mb-2">Combo Sets Gift Box Up To 50% Off</h4>
              <button className="bg-pink-500 text-white px-4 py-2 text-sm rounded-full">Discover Now →</button>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-6">

          <HomeCard icon={Car} title="Free Delivery" items={'orders over 120$'} />
          <HomeCard icon={RotateCcw} title="Get Refund" items={'within 30 days return'} />
          <HomeCard icon={WalletCards} title="Safe Payment" items={'100% secure payment'} />
          <HomeCard icon={Headset} title="24/7 Support" items={'feel free to call us'} />
        </div>

        <div className="grid  grid-cols-2 md:grid-cols-4 gap-6 my-10">

          <div className="space-y-4 max-w-sm">
            <p className="text-pink-500 font-semibold uppercase text-sm tracking-wider">Premium Gifts</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0D0140] leading-tight">
              Pest <span className="text-pink-500">Seller Gifts</span> And Products
            </h2>
            <p className="text-gray-500 text-sm">
              Recusandae tempora aut laborum molestias veniam. A commodi sequi accusantium ullam cupiditate. Neque quidem qui et autem dolor dicta necessitatibus ut ad.
            </p>
            <button className="bg-pink-500 text-white px-5 py-2 rounded-lg shadow-md text-sm font-medium hover:bg-pink-600 transition duration-300">
              Explore More →
            </button>
          </div>

          {/* <Card />
          <Card />
          <Card /> */}

        </div>

        <h2 className="text-xl font-bold text-[#0D0140] relative inline-block">
          Popular Items
          <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-pink-400 rounded-full"></span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
          {products.products.map(product => <Card key={product._id} products={product} />)}





        </div>

        <div className="flex flex-col md:flex-row items-center justify-between py-12 px-6 bg-white">
          <div className="relative w-full md:w-1/2 flex justify-center items-center">

            <div className="relative z-10 m-3">
              <img src="/images/home2.png" alt="Gift Box" className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <div className="">
                <img src="/images/home1.png" alt="Small Image 1" className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
                />
              </div>
              <div className="">
                <img src="/images/home3.png" alt="Small Image 2" className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
            <p className="text-pink-500 text-sm uppercase tracking-wider">About Us</p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              We Provide Best And Quality Gifts Box Product For You
            </h2>

            <p className="text-gray-500 mt-4 text-sm md:text-base">
              Recusandae temporibus laborum molestias veniam, a commodi sequi accusantium
              ullam cupiditate. Neque laborum qui et autem dolor dicta necessitatibus ad.
            </p>

            <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full flex items-center justify-center mx-auto md:mx-0 hover:bg-pink-600 transition">
              Discover More
              <span className="ml-2">→</span>
            </button>

            {/* List */}
            <ul className="mt-6 space-y-3 text-gray-600 text-sm md:text-base">
              <li className="flex items-center">
                <span className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                  <CheckCircle className="w-6 h-6 text-purple-500" />
                </span>
                Streamlined Shipping Experience
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                  <CheckCircle className="w-6 h-6 text-purple-500" />
                </span>
                Competitive Price & Easy To Shop
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                  <CheckCircle className="w-6 h-6 text-purple-500" />
                </span>
                Affordable Modern Design
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                  <CheckCircle className="w-6 h-6 text-purple-500" />
                </span>
                We Made Awesome Products
              </li>
            </ul>
          </div>
        </div>

        <div className="py-12 px-6 bg-white">
          <div className="text-center">
            <p className="text-pink-500 text-sm uppercase tracking-wider">Our Gallery</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Lets Check Our Photo Gallery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="col-span-1">
              <img
                src="/images/gallery1.png"
                alt="Gallery Image 1"
                className="w-full h-48 md:h-64 object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/images/gallery2.png"
                alt="Gallery Image 2"
                className="w-full h-48 md:h-64 object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/images/gallery3.jpeg"
                alt="Gallery Image 3"
                className="w-full h-48 md:h-64 object-cover rounded-lg"
              />
            </div>

            {/* Row 2 */}
            <div className="col-span-2">
              <img
                src="/images/gallery4.png"
                alt="Gallery Image 4"
                className="w-full h-48 md:h-64 object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/images/gallery5.png"
                alt="Gallery Image 5"
                className="w-full h-48 md:h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-pink-200 py-10 px-4">
          <div className="flex overflow-x-auto gap-6 pb-4">
            {testimonials.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 min-w-[250px] max-w-sm">
                <div className="flex items-center gap-3 mb-4">
                  <img src='images/test1.jpeg' alt="" className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm text-pink-500">{item.role}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">{item.text}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-yellow-400">{'★'.repeat(item.rating)}</div>
                  <span className="text-pink-400 text-xl">💬</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white py-8 px-4 text-center">
          <p className="text-gray-800 font-bold mb-4">
            Trusted By Over <span className="text-pink-500">4.5k+</span> Companies
          </p>
          <div className="flex justify-center flex-wrap gap-6 grayscale opacity-75">
            {logos.map((src, i) => (
              <img key={i} src={src} alt="Logo" className="h-10 object-contain" />
            ))}
          </div>
        </div>


      </section>
    </div>


  </>;
}


