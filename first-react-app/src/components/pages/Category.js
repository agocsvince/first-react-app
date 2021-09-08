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
            {category.map((product) => (<h4 key={product.id}><Link to={`/products/${product.id}`}>{product.product_name}</Link></h4>))}
            {/* `https://fr-en.openfoodfacts.org/products/${product.id}.json` */}
            {/* <Link to={`/products/${product.id}`}></Link> */}
            {/* <Link to={`products/${product.id}`}></Link> */}

        </div>
    )
}

export default Category