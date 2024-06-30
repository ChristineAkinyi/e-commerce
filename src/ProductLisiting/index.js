import { FaArrowDown } from "react-icons/fa";
import React from "react";
import { useGetProducts } from "../Products/hooks/useGetProducts";
import './index.css';
import ProductCard from "../Atoms/UserCard";


export function Listings(){
    const { products, error, loading} = useGetProducts(2.4);
    console.log('Fetched products:', products);

    return(
        <div className="listings-container">
            <FaArrowDown/>
            <h3>HAPPY MOTHERS DAY!</h3>
            <button>Gift Card</button>

            <div className="additional-products-section">
                <h3 id="populer">Most Populer</h3>
                {loading && <p>Loading more products...</p>}
                {error && <p>Error: {error}</p>}
                {!loading && !error && products.length === 0 && <p>No more products found</p>}
                {products.length > 0 && (
                    <div className="additional-products-grid">
                        {products.map((product) => (
                            <ProductCard
                            key ={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            category={product.category}
                            />
                        ))}
                        </div>
                )}
        
            </div>
            <h3>GET 10% OFF YOUR FIRST ORDER</h3>
            <p>SUbscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <input type="text" placeholder="Enter your email"  />
            <button>SUBSCRIBE</button>
        </div>
    );
}