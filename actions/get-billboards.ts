import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async (id: string): Promise<Billboard> => {
  try {
    const response = await fetch(`${URL}/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const text = await response.text();
    
    // Check if response is valid JSON
    try {
      return JSON.parse(text);
    } catch (jsonError) {
      console.error('Invalid JSON response from billboards API:', text);
      throw new Error('Invalid JSON response from API');
    }
  } catch (error) {
    console.error('Error fetching billboard:', error);
    // Return a default billboard object to prevent app crash
    return {
      id: '',
      label: 'Welcome to our store',
      imageUrl: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    };
  }
};

export default getBillboards;