import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProductsData } from './data'

export default function Products () {
  return (
        
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-4">
    {ProductsData.map((product) => (
      <Link href={`/products/product/${product.id}`} key={product.id}>
        <div className="bg-white rounded-lg shadow-md flex flex-col items-center h-auto">
          <Image src={product.image} alt="logo" width={300} height={300} />
          <p className="text-xl mt-2">{product.name}</p>
          <h2 className="text-blue-600 font-medium mt-2">{product.price}</h2>
        </div>
      </Link>
    ))}
  </div>
  )
}

