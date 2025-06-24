"use client";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

import { X } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex py-6 first:pt-0 last:pb-0">
      <div className="relative h-24 w-24 rounded-xl overflow-hidden sm:h-32 sm:w-32 flex-shrink-0">
        <Image
          fill
          src={data.images[0].url}
          alt={data.name}
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between">
        <div className="absolute z-10 right-0 top-0">
          <IconButton
            onClick={onRemove}
            icon={<X size={16} />}
            className="bg-red-50 hover:bg-red-100 border-red-200 text-red-600 w-8 h-8"
          />
        </div>
        <div className="relative pr-12 sm:pr-16">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
              {data.name}
            </h3>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span>Color:</span>
                <div
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: data.color.value }}
                />
                <span className="font-medium">{data.color.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Size:</span>
                <span className="font-medium">{data.size.name}</span>
              </div>
            </div>
            <div className="mt-4">
              <Currency value={data.price} />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;