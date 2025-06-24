import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import Image from "next/image";

interface GalleryTabProps {
  image: ImageType;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-xl bg-white focus:outline-none">
      {({ selected }) => (
        <div className="w-full h-full">
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-xl">
            <Image
              fill
              src={image.url}
              alt="Product thumbnail"
              className="object-cover object-center hover:scale-105 transition-transform duration-200"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-xl ring-2 ring-offset-2 transition-all duration-200",
              selected ? "ring-black shadow-lg" : "ring-transparent hover:ring-gray-300"
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;