import React, {useState, createContext} from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = (props) => {
    const [favorites, setFavorites] = useState([])

    // const [favorite, setFavorite] = useState(favorites[0])

    return(
        // {themes:themes, setThemes:setThemes, ... if the name is the same, : is not needed}
        <FavoriteContext.Provider value={{favorites, setFavorites}}>
            {props.children}
        </FavoriteContext.Provider>
    );
}