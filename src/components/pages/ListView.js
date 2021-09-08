import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import Product from '../Product';


const ListView = props => {
    const [products, setProducts] = useState({
        products: []
    });

    let { page } = useParams();

    console.log(page)

    useEffect(() => {
        axios.get(`https://world.openfoodfacts.org/search?page=${page}&page_size=10.json`)
            .then(res => {
                console.log(res)
                setProducts({ products: res.data.products });
            })
    }, [page])

    return products.products.map((product) => 
    <Product key={product.id} product={product} />)
}

export default ListView;