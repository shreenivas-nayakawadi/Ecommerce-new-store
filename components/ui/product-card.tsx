"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

import { MouseEventHandler } from "react";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();

  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-2xl border border-gray-100 p-4 space-y-4 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
    >
      <div className="aspect-square rounded-xl bg-gray-50 relative overflow-hidden">
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt="Image"
          className="aspect-square object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
        />
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="flex gap-x-4">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
              className="bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-110 transition-all duration-200"
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
              className="bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-110 transition-all duration-200"
            />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <p className="font-semibold text-lg text-gray-900 group-hover:text-black transition-colors duration-200">
          {data.name}
        </p>
        <p className="text-gray-500 text-sm font-medium">
          {data.category?.name}
        </p>
      </div>
      <div className="flex items-center justify-between pt-2">
        <Currency value={data?.price} />
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-full border-2 border-gray-200 shadow-sm"
            style={{ backgroundColor: data?.color?.value }}
          />
          <span className="text-xs text-gray-500 font-medium">{data?.size?.name}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;