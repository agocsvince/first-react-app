import React from 'react'
import { Link } from 'react-router-dom'
import '../css/product.css';

const Product = props => {
    return (
        <div>
            <Link to="/">{props.id}</Link>
            <h1>{props.id}</h1>
        </div>
    )
}

export default Product;