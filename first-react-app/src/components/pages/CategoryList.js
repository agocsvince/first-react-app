import React from 'react'
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import Category from './Category';
import {Link} from 'react-router-dom';

const CategoryList = () => {
    return (
        <div>
            <h1>Categories: </h1>
            <h2><Link to='/pizza'>Pizza</Link></h2>
            <h2><Link to='/hamburger'>Hamburger</Link></h2>
            {/* <Route path="/category" component={Category}/> */}
        </div>
    )
}

export default CategoryList
