import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';

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
            {category.map((product) => (<h4 key={product.id}>{product.product_name}</h4>))}
        </div>
    )
}

export default Category