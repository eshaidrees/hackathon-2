"use client";

import Image from "next/image";
import React, { useEffect , useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../types/products";
import { fourProducts } from "@/sanity/lib/query";


export const SanityProduct = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        async function fetchProducts() {
            const fetchedProducts: Product[] = await client.fetch(fourProducts);
            setProducts(fetchedProducts);
            
        }
        fetchProducts();
    },[]);

    return(
        <div className=" w-full mx-auto h-auto px-4 py-8">
            <div className="w-full bg-[#FFFFFF] px-4 lg:px-20 py-10">
        <div className="text-center">
          <h1 className="text-xl lg:text-2xl font-semibold pb-4">Top Picks For You</h1>
          <p className="px-2 text-gray-400">
            Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
          </p>
        </div>
      </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-4">

            {products.map((product) => (
                  <Link key={product._id} href={`/products/product/${product._id}`}>

                    <div className="text-center " >
                       {product.image && (
                        <Image
                           src={urlFor(product.image).url()}
                           alt={product.name}
                           width={200}
                           height={200}
                           className="w-full h-48"
                           />
                       )}
                       <h2 className="p-2">{product.name}</h2>
                       <p>{product.price}</p>
                    </div>
                  </Link>
                ))
                }
            </div>
            <div className="text-center mt-10 mb-4">
          <Link href="/products">
          <button className="underline underline-offset-[15px]">View More</button>
          </Link>
        </div>
        </div>
    )
}
