"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { FaAngleRight } from "react-icons/fa6";
import { RiDeleteBin7Fill } from "react-icons/ri";
import Features from "@/components/Features";
import { useRouter } from "next/navigation";

export const CartPage = () => {
  const router = useRouter();
  const { cart, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRemove = (id: string) => {
    removeFromCart(id);
    alert("Item removed from cart!");
  };

  const handleCheckout = () => {
    const cartData = cart.map((item) => ({
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
          <Image src="/images/logo.png" alt="logo" width={100} height={100} />
          <h1 className="text-5xl font-bold p-2">Cart</h1>
          <p className="flex gap-1 py-2">
            Home <FaAngleRight className="m-1" />
            <span className="text-gray-700">Cart</span>
          </p>
        </div>
      </div>

      {/* Cart Content */}
      <div className="container mx-auto pb-10">
        {cart.length === 0 ? (
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
                <ul className="flex justify-between gap-4 py-4 text-sm bg-orange-50 p-3">
                  <li className="flex-1 text-center">Product</li>
                  <li className="flex-1 text-center">Price</li>
                  <li className="flex-1 text-center">Quantity</li>
                  <li className="flex-1 text-center">Subtotal</li>
                </ul>
                {/* Cart Items */}
                {cart.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-wrap items-center justify-between gap-4 py-4 border-b border-gray-200"
                  >
                    <Image
                      src={product.image}
                      alt="product image"
                      width={100}
                      height={100}
                      className="bg-yellow-50 rounded-lg"
                    />
                    <p className="flex-1 text-center text-sm text-gray-400">{product.name}</p>
                    <p className="flex-1 text-center text-sm text-gray-400">Rs.{product.price}</p>
                    <p className="text-center text-sm px-2 border border-gray-300 rounded">{product.quantity}</p>
                    <p className="flex-1 text-center text-sm">
                      Rs.{product.price * product.quantity}
                    </p>
                    <button onClick={() => handleRemove(product.id)}>
                      <RiDeleteBin7Fill className="text-red-500 cursor-pointer" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Cart Totals */}
              <div className="w-full lg:w-1/4 h-52 lg:mx-10 px-10 bg-orange-50 shadow-md p-4 rounded-lg">
                <h1 className="text-xl font-bold mb-4">Cart Totals</h1>
                <p className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Subtotal</span>
                  <span>Rs.{calculateTotal()}</span>
                </p>
                <p className="flex justify-between text-sm text-yellow-500 mb-4">
                  <span>Total</span>
                  <span>Rs.{calculateTotal()}</span>
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
