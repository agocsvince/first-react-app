import React, { useState, useContext } from 'react';
import Product from '../Product';
import { FavoriteContext } from '../FavoriteContext';


const Favorites = props => {
    const {favorites, setFavorites} = useContext(FavoriteContext);

    console.log(favorites)
    
    return (
        <div>
            <h1>Favorites</h1>
            {favorites.map((fav) => (
                <Product key={fav.id} product={fav}/>
            ))}
        </div>
    )
}


export default Favorites;