import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../css/product.css';
import { FavoriteContext } from './FavoriteContext';

const Product = props => {
    const {favorites, setFavorites} = useContext(FavoriteContext);

    let product = props.product;
    let url = "/products/" + product.id
    let name = product.generic_name === "" ? product.brands.split(',', 1) : product.generic_name

    const onClick = (product) => {
        setFavorites(prevFavorites => [...favorites, product])
    }

    return (
        <div className="product">
            <button onClick={() => onClick(product)}>favorite</button>
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