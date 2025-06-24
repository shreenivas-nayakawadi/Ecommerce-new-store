import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch(URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const text = await response.text();
    
    // Check if response is valid JSON
    try {
      return JSON.parse(text);
    } catch (jsonError) {
      console.error('Invalid JSON response from categories API:', text);
      throw new Error('Invalid JSON response from API');
    }
  } catch (error) {
    console.error('Error fetching categories:', error);
    // Return empty array to prevent app crash
    return [];
  }
};

export default getCategories;