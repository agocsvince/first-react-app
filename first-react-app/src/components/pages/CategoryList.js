import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const CategoryList  = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://fr-en.openfoodfacts.org/category/pizzas/1.json').then((response) => {
            console.log(response);
            setCategories(response.data.products);
        })
            .catch(err => { console.log(err); })
    }, [])

    return (
        <div>
            {categories.map((product) => (<h4 key={product.product_name}>{product.product_name}</h4>))}
        </div>
    )
}

export default CategoryList