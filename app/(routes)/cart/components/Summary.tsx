"use client";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { CreditCard, Shield, Truck } from "lucide-react";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const handledRef = useRef(false);

  const success = searchParams.get("success");
  const cancelled = searchParams.get("cancelled");

  useEffect(() => {
    if (handledRef.current) return;

    if (success) {
      toast.success("Payment completed.");
      removeAll();
      handledRef.current = true;
    } else if (cancelled) {
      toast.error("Something went wrong.");
      handledRef.current = true;
    }
  }, [success, cancelled, removeAll]);

  const totalPrice = items.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      { productIds: items.map((item) => item.id) }
    );
    window.location = response.data.url;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 sticky top-24">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Order Summary
      </h2>
      
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-2">
            <span className="text-gray-600 truncate pr-4">{item.name}</span>
            <Currency value={item.price} />
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex items-center justify-between text-lg font-semibold text-gray-900">
          <span>Total</span>
          <Currency value={totalPrice} />
        </div>
      </div>
      
      <Button
        disabled={items.length === 0}
        className="w-full mb-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        onClick={onCheckout}
      >
        <CreditCard className="w-4 h-4 mr-2" />
        Proceed to Checkout
      </Button>
      
      <div className="space-y-3 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-green-600" />
          <span>Secure checkout with SSL encryption</span>
        </div>
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-blue-600" />
          <span>Free shipping on orders over $50</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;