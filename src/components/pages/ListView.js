import React, { useEffect, useState } from 'react';
import { useParams, Link} from 'react-router-dom';
import axios from 'axios';
import Product from '../Product';



const ListView = props => {
    const [products, setProducts] = useState({
        products: []
    });

    let { page } = useParams();

    useEffect(() => {
        axios.get(`https://world.openfoodfacts.org/search?page=${page}&page_size=52.json`)
            .then(res => {
                setProducts({ products: res.data.products });
            })
    }, [page])

    return (
        <div>
            <div className="grid">
                {products.products.map((product) => (
                    <span key={product.id}>
                        <Product key={product.id} product={product} />
                    </span>))
                }
                
            </div>
            <div className="page-buttons">
                <Link to={`/page/${(page-1)}`}>Prev</Link>
                <Link to={`/page/${parseInt(page) + 1}`}>Next</Link>
            </div>
        </div>
    )
}

export default ListView;