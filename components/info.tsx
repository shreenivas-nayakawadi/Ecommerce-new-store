"use client";

import { Product } from "@/types";
import Currency from "./ui/currency";
import Button from "./ui/button";
import { ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>{data.category.name}</span>
          <span>•</span>
          <span>SKU: {data.id.slice(0, 8).toUpperCase()}</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
          {data.name}
        </h1>
        <div className="flex items-center gap-4">
          <Currency value={data.price} />
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm text-gray-600 ml-2">(4.8)</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900">Size</h3>
            <div className="flex items-center gap-2">
              <div className="px-4 py-2 bg-gray-100 rounded-lg font-medium">
                {data?.size?.name}
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900">Color</h3>
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full border-2 border-gray-300 shadow-sm"
                style={{ backgroundColor: data?.color?.value }}
              />
              <span className="font-medium text-gray-700">{data?.color?.name}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            onClick={onAddToCart}
            className="flex-1 bg-black hover:bg-gray-800 text-white"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
          <Button className="px-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
            <Heart className="w-4 h-4" />
          </Button>
          <Button className="px-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-4 pt-6 border-t border-gray-200">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Truck className="w-5 h-5 text-green-600" />
            <span>Free shipping on orders over $50</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Shield className="w-5 h-5 text-blue-600" />
            <span>2-year warranty included</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <RotateCcw className="w-5 h-5 text-purple-600" />
            <span>30-day return policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;