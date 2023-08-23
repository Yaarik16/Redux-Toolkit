import React from 'react'
import { useFavorites } from '../../hooks/useFavorites'
import fav from './favorites.module.css'

const Favorites = () => {
    const { favorites } = useFavorites()
    return (
        <div>
            <p>Your favorites items</p>
            {favorites.map(item => (
                <div className={fav.item}>
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Favorites