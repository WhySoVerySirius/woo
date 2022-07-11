import React from "react";
import './Card.css';
import Ratings from './Ratings';

export default function Card ({products})
{
    return (
        <>
        {products.map(function(product) {
            return (<li>
                <div className="thumbNail">
                    <img src={product.images[0].src} alt="" />
                </div>
                <div className="summary">
                    <span className="productCategory">{product.categories[0].name}</span>
                    <a href="#" className="productLink">{product.name}</a>
                    <div className="rating">{Ratings(product.average_rating)}</div>
                    <span className="price">{parseInt(product.price).toFixed(2)} $</span>
                </div>
            </li>)
        })}
        </>
    )
}