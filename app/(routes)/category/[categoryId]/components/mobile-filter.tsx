"use client";

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Color, Size } from "@/types";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Filter as FilterIcon, X } from "lucide-react";
import { useState } from "react";
import Filter from "./filter";

interface MobileFilterProps {
  sizes: Size[];
  colors: Color[];
  activeFilters: {
    sizeId: string;
    colorId: string;
  };
  onFilterChange: (type: string, value: string) => void;
}

const MobileFilters: React.FC<MobileFilterProps> = ({
  sizes,
  colors,
  activeFilters,
  onFilterChange,
}) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button 
        onClick={onOpen} 
        className="flex items-center gap-x-2 lg:hidden mb-6 bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"
      >
        <FilterIcon size={20} />
        Filters
      </Button>
      <Dialog
        open={open}
        as="div"
        className="relative z-50 lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex">
          <DialogPanel className="relative ml-auto flex h-full w-full max-w-sm flex-col overflow-y-auto bg-white shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              <IconButton 
                icon={<X size={20} />} 
                onClick={onClose}
                className="bg-gray-100 hover:bg-gray-200"
              />
            </div>
            <div className="p-6 space-y-6">
              <Filter
                valueKey="sizeId"
                name="Sizes"
                data={sizes}
                activeFilter={activeFilters.sizeId}
                onFilterChange={onFilterChange}
              />
              <Filter
                valueKey="colorId"
                name="Colors"
                data={colors}
                activeFilter={activeFilters.colorId}
                onFilterChange={onFilterChange}
              />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;