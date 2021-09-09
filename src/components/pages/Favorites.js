import React, { useState, useContext } from 'react';
import Product from '../Product';
import { FavoriteContext } from '../FavoriteContext';


const Favorites = props => {
   const {favorites, setFavorites} = useContext(FavoriteContext);

    return (
        <div>
            {favorites.map((fav) => (
                <Product key={fav.id} product={fav}/>
            ))}
        </div>
    )
}


export default Favorites;