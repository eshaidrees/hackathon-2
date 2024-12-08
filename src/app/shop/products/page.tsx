import React from 'react'
import Image from 'next/image'

export const Products = () => {

const ProductData = [
    {
        id:"1",
        name: "Trenton modular sofa_3",
        price: "25,000.00",
        image: "/images/pro-1.png"
    },
    {
        id:"2",
        name: "Granite dining table with dining chair",
        price: "25,000.00",
        image: "/images/pro-2.png"
    },
    {
        id:"3",
        name: "Outdoor bar table and stool",
        price: "25,000.00",
        image: "/images/pro-3.png"
    },
    {
        id:"4",
        name: "Plain console with teak mirror",
        price: "25,000.00",
        image: "/images/pro-4.png"
    },
    {
        id:"5",
        name: "Grain coffee table",
        price: "15,000.00",
        image: "/images/pro-5.png"
    },
    {
        id:"6",
        name: "Kent coffee table",
        price: "225,000.00",
        image: "/images/pro-6.png"
    },
    {
        id:"7",
        name: "Round coffee table_color 2",
        price: "251,000.00",
        image: "/images/pro-7.png"
    },
    {
        id:"8",
        name: "Reclaimed teak coffee table",
        price: "25,200.00",
        image: "/images/pro-8.png"
    },
    {
        id:"9",
        name: "Plain console_",
        price: "258,000.00",
        image: "/images/pro-9.png"
    },
    {
        id:"10",
        name: "Reclaimed teak Sideboard",
        price: "20,000.00",
        image: "/images/pro-10.png"
    },
    {
        id:"11",
        name: "SJP_0825",
        price: "200,000.00",
        image: "/images/pro-11.png"
    },
    {
        id:"12",
        name: "Bella chair and table",
        price: "100,000.00",
        image: "/images/pro-12.png"
    },
    {
        id:"13",
        name: "Granite square side table",
        price: "258,800.00",
        image: "/images/pro-13.png"
    },
    {
        id:"14",
        name: "Asgaard sofa",
        price: "250,000.00",
        image: "/images/pro-14.png"
    },
    {
        id:"15",
        name: "Maya sofa three seater",
        price: "115,000.00",
        image: "/images/pro-15.png"
    },
    {
        id:"16",
        name: "Outdoor sofa set",
        price: "244,000.00",
        image: "/images/pro-16.png"
    },
]
  return (
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-4">
          {ProductData.map((product) => (
            <div key={product.id} className=" bg-white rounded-lg shadow-md md: flex flex-col items-center h-auto">
              <Image src={product.image} alt='logo' width={300} height={300} /> 
              <p className="text-xl mt-2">{product.name}</p>
              <h2 className="text-blue-600 font-medium mt-2">{product.price}</h2>
            </div>
          ))}
        </div>
  )
}

export default Products