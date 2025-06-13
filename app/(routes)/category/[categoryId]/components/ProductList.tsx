"use client";

import { Product, Color, Size } from "@/types";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ui/product-card";
import NoResults from "@/components/ui/no-result";
import MobileFilters from "./mobile-filter";
import Filter from "./filter";

interface ProductListProps {
  initialProducts: Product[];
  sizes: Size[];
  colors: Color[];
}

const ProductList: React.FC<ProductListProps> = ({
  initialProducts,
  sizes,
  colors,
}) => {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [activeFilters, setActiveFilters] = useState({
    sizeId: "",
    colorId: "",
  });

  useEffect(() => {
    let products = [...initialProducts];
    
    if (activeFilters.sizeId) {
      products = products.filter(product => 
        product.size.id === activeFilters.sizeId
      );
    }
    
    if (activeFilters.colorId) {
      products = products.filter(product => 
        product.color.id === activeFilters.colorId
      );
    }

    setFilteredProducts(products);
  }, [activeFilters, initialProducts]);

  const handleFilterChange = (type: string, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [type]: prev[type as keyof typeof prev] === value ? "" : value
    }));
  };

  return (
    <>
      <MobileFilters 
        sizes={sizes} 
        colors={colors} 
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
      />
      
      <div className="hidden lg:block">
        <Filter 
          valueKey="sizeId" 
          name="Sizes" 
          data={sizes} 
          activeFilter={activeFilters.sizeId}
          onFilterChange={(type, value) => handleFilterChange(type, value)}
        />
        <Filter 
          valueKey="colorId" 
          name="Colors" 
          data={colors} 
          activeFilter={activeFilters.colorId}
          onFilterChange={(type, value) => handleFilterChange(type, value)}
        />
      </div>
      
      <div className="mt-6 lg:col-span-4 lg:mt-0">
        {filteredProducts.length === 0 ? (
          <NoResults />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;