import { getProducts } from "../utils";
import { useEffect, useState } from "react";

// export const useGetProducts = () => {
//     const [products, setProducts] = useState([]);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);
//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 setLoading(true);
//                 const result = await getProducts();
//                 console.log({result});
//                 setProducts(result);
//                 setLoading(false);
//             }
//             catch(error){
//                 setError(`Error: ${error.message}`)
//                 setLoading(false);
//             }
//         };
//         fetchProducts();
//     }, []);
//     return {products,error,loading}
// } 



export const useGetProducts = () => {
  const [firstProducts, setFirstProducts] = useState([]);
  const [secondProducts, setSecondProducts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        // Fetch the first set of products
        const firstResult = await getProducts({ limit: 6 });
        setFirstProducts(firstResult);

        // Fetch the second set of products
        const secondResult = await getProducts({ limit: 4 });
        setSecondProducts(secondResult);

        setLoading(false);
      }
      catch (error) {
        setError(`Error: ${error.message}`);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return { firstProducts, secondProducts, error, loading };
};