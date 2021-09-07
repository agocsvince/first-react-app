import React from 'react'
import { Link } from 'react-router-dom'
import '../css/product.css';

const Product = props => {
    let product = props.product;
    let url = "/details/" + product.id
    console.log(product)

    let name = product.generic_name === "" ? product.brands.split(',', 1) : product.generic_name
    return (
        <div className="product">
            <Link to={url}>
                {name}
                <img src={product.image_front_small_url} alt=""/>
            </Link>
        </div>
    )
}

export default Product;