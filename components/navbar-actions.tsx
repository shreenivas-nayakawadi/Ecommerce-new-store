"use client";

import { ShoppingBag } from "lucide-react";
import Button from "./ui/button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2 hover:bg-gray-800 transition-all duration-200 group relative"
      >
        <ShoppingBag size={20} color="white" className="group-hover:scale-110 transition-transform duration-200" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
        {cart.items.length > 0 && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">{cart.items.length}</span>
          </div>
        )}
      </Button>
    </div>
  );
};