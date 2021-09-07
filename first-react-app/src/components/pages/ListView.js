import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../Product';

const ListView = props => {
    const [products, setProducts] = useState({
        products: []
    });

    useEffect(() => {
        axios.get('https://world.openfoodfacts.org/products.json')
            .then(res => setProducts({ products: res.data.products }))
    }, [])

    return products.products.map((product) => 
    <Product key={product.id} product={product} />)
}

export default ListView;