"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoFilterOutline } from "react-icons/io5";
import Search from "./Search";
import { allProducts } from "@/sanity/lib/query";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../types/products";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");

  // Fetch product data from Sanity CMS
  
        useEffect(() => {
    
            async function fetchProducts() {
                const fetchedProducts: Product[] = await client.fetch(allProducts);
                setProducts(fetchedProducts);
                
            }
            fetchProducts();
        },[]);
  // Filter products based on the search input
  const filteredProducts = products.filter(({ name, description, category }) =>
    [name, description ?? "", category].some((field) =>
      field.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Sort products based on the selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "Low to High Prices") return a.price - b.price;
    if (sortOption === "High To Low Prices") return b.price - a.price;
    if (sortOption === "category") return a.category.localeCompare(b.category);
    return 0;
  });


return (
  <div className="w-full px-4 sm:px-6 py-4">
    {/* Header with filter and sorting options */}
    <div className="flex flex-col lg:flex-row justify-between items-center w-full bg-[#FAF4F4] px-3 sm:px-4 md:px-10 py-3 sm:py-4 md:py-6 gap-2 min-h-[90px] sm:min-h-[100px] md:min-h-[120px]">
      
      {/* Filter Button and Results Count */}
      <div className="flex gap-2 items-center">
        <button className="flex items-center p-3 sm:p-4 my-2 bg-purple-50 text-gray-600 rounded-md shadow hover:bg-purple-100 hover:text-gray-800">
          <IoFilterOutline className="m-1" /> Filter
        </button>
        <p className="text-gray-600 text-sm sm:text-base p-2 sm:p-6">
          Showing {sortedProducts.length} results
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center sm:w-[300px]">
        <Search onSearch={setSearchQuery} />
      </div>

      {/* Sorting Options */}
      <div className="flex items-center gap-2 sm:gap-4">
        <p className="text-gray-600 text-sm sm:text-base flex items-center">
          Show 
          <span className="bg-white px-3 py-1 ml-2 text-gray-600 rounded-md shadow-sm border border-gray-300">
            {sortedProducts.length}
          </span>
        </p>
        <p>Sort By</p>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none"
        >
          <option value="default">Default</option>
          <option value="Low to High Prices">Low to High Prices</option>
          <option value="High To Low Prices">High To Low Prices</option>
          <option value="category">Category</option>
        </select>
      </div>

    </div>



    {/* Product Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 m-2 sm:m-4">
      {sortedProducts.map(({ _id, name, description, price, image }) => (
        <Link href={`/products/${_id}`} key={_id}>
          <div className="bg-white rounded-lg shadow-md flex flex-col items-center h-full transition-transform transform hover:scale-105 hover:shadow-lg p-4 sm:p-6">
            {/* Product Image */}
            {image && (
              <Image src={urlFor(image).url()}  width={250} height={250} alt={name} className="object-cover w-full h-[200px] sm:h-[250px]" />
            )}
              {/* Product Details */}
            <h2 className="text-gray-800 text-lg font-semibold mt-2 sm:mt-4 text-center">{name}</h2>
            <p className="text-gray-500 text-sm my-1 sm:my-2 text-center">{description}</p>
            <h3 className="font-bold text-xl text-black">${price}</h3>
          </div>
        </Link>
      ))}
    </div>
  </div>
);
}