import React from 'react'
import Image from 'next/image'
import { FaAngleRight } from "react-icons/fa6";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { ProductsData } from '../products/data';

export default function Cart() {
  const productadd = ProductsData.filter((product) => 
    ['1', '2', '3'].includes(product.id)
)
  return (
    <div> 
         <div className='relative w-full h-auto p-6'>
           <div
              className='absolute inset-0 '
              style={{
                backgroundImage: "url('images/bg-2.jpeg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.50,
                
              }}
              >  
            </div>
    
             <div className='relative flex flex-col justify-center items-center max-w-full mx-auto h-[202px] my-[50px]'>
                <Image src="/images/logo.png" alt='logo' width="100" height="100"/> 
                <h1 className='text-5xl font-bold p-2'>Cart</h1>
                <p className='flex gap-1 py-2'>Home <FaAngleRight className='m-1'/> 
                <span className='text-gray-700'>Cart</span></p>
             </div>
        </div> 

      <div className='flex flex-col lg:flex-row justify-between gap-6 p-4'> 
        {/* Product List */}
        <div className="w-full lg:w-2/3 bg-white shadow-md p-4">
          <ul className="flex justify-between gap-4 py-4 text-sm bg-orange-50 p-3">
            <li className="flex-1 text-center">Product</li>
            <li className="flex-1 text-center">Price</li>
            <li className="flex-1 text-center">Quantity</li>
            <li className="flex-1 text-center">Subtotal</li>
          </ul>
            {/* Cart Items*/}
            {productadd.map((product) => (
            <div
             key={product.id}
             className="flex flex-wrap items-center justify-between gap-4 py-4 border-b border-gray-200"
             >            
             <Image src={product.image} alt='logo' width="100" height="100" className='bg-yellow-50 rounded-lg'/> 
             <p className="flex-1 text-center text-sm text-gray-400">
             {product.name}
             </p>
             <p className="flex-1 text-center text-sm text-gray-400">
             {product.price}
              </p>
             <p className="text-center text-sm px-2 border border-gray-300 rounded">
              1
             </p>
             <p className="flex-1 text-center text-sm">Rs.250,000,00</p>
             <RiDeleteBin7Fill className="text-red-500 cursor-pointer" />
            </div>

           ))}
       </div>

          {/* Cart Totals */}
        <div className="w-full lg:w-1/4 h-52 lg:mx-10 px-10 bg-orange-50 shadow-md p-4 rounded-lg">
          <h1 className="text-xl font-bold mb-4">Cart Totals</h1>
          <p className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Subtotal</span>
            <span>Rs.250,000,00</span>
          </p>
          <p className="flex justify-between text-sm text-yellow-500 mb-4">
            <span>Total</span>
            <span>Rs.250,000,00</span>
          </p>
          <button className="w-full text-center bg-black text-white hover:bg-yellow-400 px-4 py-2 rounded-lg">
            Check Out
          </button>
        </div>
        </div>
      </div>
  )
}
