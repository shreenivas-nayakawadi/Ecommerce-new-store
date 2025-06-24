"use client";

import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
  activeFilter: string;
  onFilterChange: (type: string, value: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  data,
  name,
  valueKey,
  activeFilter,
  onFilterChange,
}) => {
  return (
    <div className="mb-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{name}</h3>
      <div className="flex flex-wrap gap-3">
        {data.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(valueKey, filter.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
              activeFilter === filter.id
                ? "bg-black text-white border-black shadow-lg"
                : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-md"
            )}
          >
            {filter.name}
            {valueKey === 'colorId' && (
              <div
                className="w-3 h-3 rounded-full ml-2 inline-block border border-gray-300"
                style={{ backgroundColor: (filter as Color).value }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;