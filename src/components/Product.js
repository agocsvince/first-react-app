import React from 'react'
import { Link } from 'react-router-dom'
import '../css/product.css';

const Product = props => {
    let product = props.product;
    let url = "/products/" + product.id

    let name = product.generic_name === "" ? product.brands.split(',', 1) : product.generic_name
    return (
        <div className="product">
            <Link to={url}>
                <div className="product-img">
                    <img src={product.image_front_small_url} alt={name} />
                </div>
                <p className="product-title">{name}</p>
            </Link>
        </div>
    )
}

export default Product;