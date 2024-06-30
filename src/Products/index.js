import React from "react";
import { useGetProducts } from "./hooks/useGetProducts";
import ProductCard from "../Atoms/UserCard";
import './index.css';



export const Products =() => {
    const { products, error, loading} = useGetProducts(1, 6);
    console.log({products});
    return(
        <div className="products-container">
              {loading && <h2>Loading products ...</h2>}
            {error && <h2>{error}</h2>} 
            {!loading && error && products.length === 0 && <h2>No products found</h2>}
            {products.length > 0 && (
              <div className="products-grid">
                {products.map((product) => (
                  <ProductCard
                  key = {product.id}
                  image = {product.image}
                  category = {product.category}
                  />
                ))}
              </div>
            )}
    </div>
    );
};












// const Products = () => {
//     const { firstProducts, secondProducts, error, loading } = useGetProducts();
  
//     if (loading) {
//       return <div>Loading...</div>;
//     }
  
//     if (error) {
//       return <div>Error: {error}</div>;
//     }
  
//     return (
//       <div>
//         <h2>First Set of Products</h2>
//         {firstProducts.length > 0 ? (
//           <div>
//             {firstProducts.map(product => (
//                 <ProductCard
//                 key={product.id}
//                 image = {product.image}
//                title = {product.title}
//                 price = {product.price}
//                /> 
//             ))}
//           </div>
//         ) : (
//           ! loading && <h2>No products found</h2>
//         )}
  
//         <h2>Second Set of Products</h2>
//         {secondProducts.length > 0 ? (
//             <div>
//                 {secondProducts.map(product => (
//                 <ProductCard
//                 key={product.id}
//                 image = {product.image}
//                 title = {product.title}
//                 price= {product.price}
//                 />
//             ))}
//             </div>
//           )  : (
//             !loading && <h2>No products found</h2>
//           )}
      
//         </div>
//           );
//           };
    

  export default Products;
