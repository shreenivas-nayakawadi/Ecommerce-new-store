import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  try {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        colorId: query.colorId,
        categoryId: query.categoryId,
        sizeId: query.sizeId,
        isFeatured: query.isFeatured,
      },
    });

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const text = await response.text();
    
    // Check if response is valid JSON
    try {
      return JSON.parse(text);
    } catch (jsonError) {
      console.error('Invalid JSON response from products API:', text);
      throw new Error('Invalid JSON response from API');
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    // Return empty array to prevent app crash
    return [];
  }
};

export default getProducts;