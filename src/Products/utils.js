const baseUrl = process.env.REACT_APP_BASE_URL;

export const getProducts = async ({limit = 10} = {}) => {
    try{
        const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
        const data = await response.json();
        return data.products;
        // return response.json()
    }
    catch(error){
        throw new Error(error.message)
    }
} 