"use client";

import Image from "next/image";
import React, { useEffect , useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../types/products";
import { eightProducts } from "@/sanity/lib/query";


export const SanityProduct = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        async function fetchProducts() {
            const fetchedProducts: Product[] = await client.fetch(eightProducts);
            setProducts(fetchedProducts);
            
        }
        fetchProducts();
    },[]);

    return(
        <div className=" w-full mx-auto h-auto px-4 py-8">
            <h1 className="text-3xl text-center mb-6">Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-4">
            {products.map((product) => (
                    <div  key= {product._id} className="text-center " >
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
                ))
                }
            </div>
        </div>
    )
}
