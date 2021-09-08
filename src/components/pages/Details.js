import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom';

const Details = () => {

    let { id } = useParams();


    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(`https://fr-en.openfoodfacts.org/products/${id}.json`).then((response) => {
            console.log(response);
            setProduct(response.data.products);
        })
            .catch(err => { console.log(err); })
    }, [id])

    return (
        <div>
            {product.map((attribute) => (
            <div>
                <h4 key={attribute.id}>ID: {attribute.id}</h4>
                <h4 key={attribute.product_name}>Name: {attribute.product_name}</h4>
                <img key={attribute.image_url} src={attribute.image_url}/>
            </div>))}
        </div>
    )
}

export default Details
