const baseUrl = process.env.REACT_APP_BASE_URL;

export const getProducts = async (page =1, limit = 6) => {
    try{
        const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}&offset=${(page - 1) * limit}`);
        const data = await response.json();
        console.log(`API response:`, data);
        return data;
    }
    catch(error){
        console.error('Fetch error:', error);
        throw error;
    }
} 