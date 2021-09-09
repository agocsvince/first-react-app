import React from 'react'
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import Category from './Category';
import Details from './Details';
import {Link} from 'react-router-dom';

const CategoryList = () => {
    return (
        <div className="m-2">
            <h1>Categories: </h1>
            <span><Link to='/categories/meals/1'>Meals</Link> </span>
            <span><Link to='/categories/pizzas/1'>Pizzas</Link> </span>
            <span><Link to='/categories/hamburgers/1'>Hamburgers</Link> </span>
            <span><Link to='/categories/sauces/1'>Sauces</Link> </span>
            <span><Link to='/categories/pastas/1'>Pastas</Link> </span>
            <span><Link to='/categories/legumes/1'>Legumes</Link> </span>
            <span><Link to='/categories/nuts/1'>Nuts</Link> </span>
            <span><Link to='/categories/fruits/1'>Fruits</Link> </span>
        </div>
    )
}

export default CategoryList
