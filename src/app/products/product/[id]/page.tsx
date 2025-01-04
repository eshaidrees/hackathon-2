"use client";

import { useParams } from 'next/navigation';
import { FaFacebookF , FaTwitter , FaLinkedinIn , FaHeart } from "react-icons/fa";
import { ProductsData } from '../../data';

const ProductDetail = () => {
  const params = useParams(); // Use `useParams` to get the dynamic route parameter
  const { id } = params;

  // Find the specific product by ID
  const product = ProductsData.find((item) => item.id === id);

  if (!product) {
    return <div className="text-center p-5 text-red-500">Product not found!</div>;
  }

  return (
      <section className="text-gray-600 body-font overflow-hidden">
       <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
           <img
            alt="ecommerce"
            className="bg-orange-100 lg:w-1/2 w-full lg:h-[500px] h-64 rounded"
            src={product.image}
            
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>
             <h2 className="text-xl title-font text-gray-500 tracking-widest">
              Rs.{product.price}
            </h2>
            <div className="flex mb-4 border-b-2 border-gray-200">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nulla animi consequuntur cumque excepturi vel, alias maiores corrupti,
            quibusdam dolorum dolorem atque soluta repudiandae eaque accusantium, 
            quae aut saepe id at.
            </p>
            <div className="flex flex-col gap-4 mt-6 items-left pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex flex-col">
                <span className="mr-3 mb-2 text-gray-400">Color</span>
                <div className='flex gap-2'>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
              </div>
              </div>
              <div className="flex items-center ">
                <span className="mr-3 text-gray-400">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex  pb-10 border-b-2 border-gray-100 mb-5">
                <span className="flex text-black bg-white border-2 border-gray-300 py-2 px-6 focus:outline-none hover:bg-slate-200 rounded-lg">
                  - 1 +
                </span>
                <button className="flex ml-auto text-black bg-white border-2 border-gray-500 py-2 px-6 focus:outline-none hover:bg-slate-200 rounded-lg">
                  Add To Cart
                </button>
                <button className="rounded-full w-10 h-10 bg-red-100 p-0 border-0 hover:text-red-500 inline-flex items-center justify-center text-red-400 ml-4">
                <FaHeart className='size-5'/>
                </button>
            </div>
            <div className=''>
               <p className='text-gray-400 '>SKU <span className='ml-9'>: SS001</span></p>
               <p className='text-gray-400'>Category <span className='pl-1'>: Sofas</span></p>
               <p className='text-gray-400'>Tags <span className='pl-8'>: Sofas,Chair,Home,Shop</span></p>
               <p className='flex text-gray-400 '>Share <span className='flex mx-8 mt-2  gap-6'>:
               <FaFacebookF />
               <FaTwitter />
               <FaLinkedinIn />
               </span>
               </p>
             </div>
           </div>
         </div>
       </div>
     </section>

  
    );
  
}
export default ProductDetail;


