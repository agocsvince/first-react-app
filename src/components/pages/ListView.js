import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../Product';


const ListView = props => {
    const [products, setProducts] = useState({
        products: []
    });

    console.log(props.page)

    useEffect(() => {
        axios.get(`https://world.openfoodfacts.org/search?page=${props.page}&page_size=100.json`)
            .then(res => {
                console.log(res)
                setProducts({ products: res.data.products });
            })
    }, [props.page])

    return products.products.map((product) => 
    <Product key={product.id} product={product} />)
}

export default ListView;