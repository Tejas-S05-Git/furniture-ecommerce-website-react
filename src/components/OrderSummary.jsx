import React from "react";
import { useCart } from "../context/CartContext";

const OrderSummary = () => {
  const { cartItems, cartSubtotal } =
    useCart();

  const shipping = 0;
  const tax = 0;
  const discount = 100;

  const total =
    cartSubtotal + shipping + tax - discount;

  return (
    <div
      className="border border-zinc-200 rounded-[24px] p-8 sticky top-24"
      data-aos="fade-left"
    >
      <h2 className="text-2xl font-bold mb-6">
        Order Summary
      </h2>

      <div className="space-y-4 text-lg">
        <div className="flex justify-between">
          <span>Items</span>
          <span>{cartItems.length}</span>
        </div>

        <div className="flex justify-between">
          <span>Sub Total</span>
          <span>${cartSubtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>$0.00</span>
        </div>

        <div className="flex justify-between">
          <span>Taxes</span>
          <span>$0.00</span>
        </div>

        <div className="flex justify-between">
          <span>Coupon Discount</span>
          <span>-${discount}</span>
        </div>
      </div>

      <div className="border-t mt-6 pt-6 flex justify-between text-2xl font-bold">
        <span>Total</span>
        <span>${total}</span>
      </div>

      <button className="w-full mt-8 h-14 rounded-full bg-primary text-white font-semibold">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default OrderSummary;