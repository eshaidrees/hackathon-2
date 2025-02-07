"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Features from "@/components/Features";
import { FaAngleRight } from "react-icons/fa6";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import { useState, useEffect } from "react";
import { getCartItems, updateCartQuantity, removeFromCart } from "./AddToCart";
import { Product } from "../../types/products";

export const CartPage = () => {

  const router = useRouter();
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    removeFromCart(id);
    setCartItems(getCartItems());
    alert("Item removed from cart.");
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.quantity + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.quantity > 1) {
      handleQuantityChange(id, product.quantity - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    const cartData = cartItems.map((item) => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));
    const encodedCartData = encodeURIComponent(JSON.stringify(cartData));
    router.push(`/checkout?cart=${encodedCartData}`);
  };

  return (
    <div className="w-full h-auto">
      {/* Header */}
      <div className="relative w-full h-auto p-6">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('images/bg-2.jpeg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
          }}
        />
        <div className="relative flex flex-col justify-center items-center max-w-full mx-auto h-[202px] my-[50px]">
          <Image src="/images/logo.png" alt="logo" width={90} height={90} />
          <h1 className="text-5xl font-bold p-2">Cart</h1>
          <p className="flex gap-1 py-2">
            Home <FaAngleRight className="m-1" />
            <span className="text-gray-700">Cart</span>
          </p>
        </div>
      </div>

      {/* Cart Content */}
      <div className="container mx-auto pb-10">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600 p-6">
            Your cart is empty. <br />
            <Link href="/products" className="text-blue-500 underline hover:text-blue-600">
              Shop now
            </Link>
          </p>
        ) : (
          <>
            <div className="flex flex-col lg:flex-row justify-between gap-6 p-4">
  {/* Product List */}
  <div className="w-full lg:w-2/3 bg-white shadow-md p-4">
    {/* Table Header */}
    <ul className="grid grid-cols-5 text-sm bg-orange-50 p-3 font-bold">
      <li className="text-center">Product</li>
      <li className="text-center">Price</li>
      <li className="text-center">Quantity</li>
      <li className="text-center">Subtotal</li>
    </ul>

    {/* Cart Items */}
    {cartItems.map((product) => (
      <div
        key={product._id}
        className="grid grid-cols-5 items-center py-4 border-b border-gray-200 text-sm"
      >
        {/* Product Image */}
        <div className="flex gap-4 items-center justify-center">
          {product.image && (
            <Image
              alt={product.name}
              className="bg-orange-100"
              src={urlFor(product.image).url()}
              width={60}
              height={60}
            />
          )}
          <p className="text-sm text-gray-500">{product.name}</p>
        </div>
        {/* Price */}
        <p className="text-center text-gray-400">Rs. ${product.price}</p>

       {/* Quantity */}
        <div className="flex justify-center items-center gap-2">
                    <button
                      onClick={() => handleDecrement(product._id)}
                      className="px-2 py-1 rounded-md hover:text-gray-400"
                    >
                      -
                    </button>
                    <p className="text-center text-gray-400">{product.quantity}</p>
                    <button
                      onClick={() => handleIncrement(product._id)}
                      className="px-2 py-1  rounded-md hover:text-gray-400"
                    >
                      +
                    </button>
            </div>

        {/* Subtotal */}
        <p className="text-center font-medium">
          Rs. ${product.price * product.quantity}
        </p>

        {/* Delete Button */}
        <button
          onClick={() => handleRemove(product._id)}
          className="text-red-500 flex justify-center"
        >
          <RiDeleteBin7Fill className="cursor-pointer text-lg" />
        </button>
      </div>
    ))}
  </div>

              {/* Cart Totals */}
              <div className="w-full lg:w-1/4 h-52 lg:mx-10 px-10 bg-orange-50 shadow-md p-4 rounded-lg">
                <h1 className="text-xl font-bold mb-4">Cart Totals</h1>
                <p className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Subtotal</span>
                  <span>Rs. ${calculateTotal()}</span>
                </p>
                <p className="flex justify-between text-sm text-yellow-500 mb-4">
                  <span>Total</span>
                  <span>Rs. ${calculateTotal()}</span>
                </p>
                <button
                  onClick={handleCheckout}
                  className="w-full text-center bg-black text-white hover:bg-yellow-400 px-4 py-2 rounded-lg"
                >
                  Check Out
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <Features />
    </div>
  );
};

export default CartPage;
