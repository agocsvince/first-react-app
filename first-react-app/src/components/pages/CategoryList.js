import React from 'react'
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import Category from './Category';
import Details from './Details';
import {Link} from 'react-router-dom';

const CategoryList = () => {
    return (
        <div>
            <h1>Categories: </h1>
            <h2><Link to='/categories/pizzas/1'>Pizza</Link></h2>
            <h2><Link to='/categories/hamburgers/1'>Hamburger</Link></h2>

            {/* <Route path='/pizzas/:id' children={<Details/>}/>
            <Route path='/hamburgers/:id' children={<Details/>}/> */}
            
        </div>
    )
}

export default CategoryList
