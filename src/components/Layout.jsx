import React, {useEffect, useState, useRef} from "react";
import Card from "./Card";
import './Layout.css';
import WooCommerce from "../providers/wooCommerceProvider";

export default function Layout ()
{
    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(function() {
        if(!isLoading) {
            WooCommerce.get("products?category=50")
            .then((response) => {setProducts(response.data); setIsLoading(true)})
            .catch((error) => {console.log(error.response.data);});
        }
    },
    []
    )    
    if(!isLoading) {
        return (
            <>
                <h1>Loading</h1>
            </>
        )
    }
    return (
        <>
            <div className="main">
                <div className="wrap">
                    <div className="container">
                    <div className="centerBlock">
                        <nav><a href="#">Home</a> / {products[0].categories.name}</nav>
                        <header>calendars</header>
                        <div className="flex">
                            <div className="filter">
                            <button>filter</button>
                            <p>Showing all {} results</p>
                            </div>
                            <form action="">
                                <select name="" id="">
                                    <option value="">Default sorting</option>
                                    <option value="">Sort by popularity</option>
                                    <option value="">Sort by average rating</option>
                                    <option value="">Sort by latest</option>
                                    <option value="">Sort by price: low to high</option>
                                    <option value="">Sort by price: high to low</option>
                                </select>
                            </form>
                        </div>
                        <ul><Card products={products}/></ul>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}