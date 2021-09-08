import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import {Link, useParams} from 'react-router-dom';

const Category  = () => {
    const [category, setCategory] = useState([]);

    let { id } = useParams();
    let { categoryURL } = useParams();

    useEffect(() => {
        axios.get(`https://fr-en.openfoodfacts.org/category/${categoryURL}/${id}.json`).then((response) => {
            console.log(response);
            setCategory(response.data.products);
        })
            .catch(err => { console.log(err); })
    }, [categoryURL, id])

    return (
        <div>
            {category.map((product) => (<h4 key={product.id}><a href={`https://fr-en.openfoodfacts.org/products/${product.id}.json`}>{product.product_name}</a></h4>))}
        </div>
    )
}

export default Category