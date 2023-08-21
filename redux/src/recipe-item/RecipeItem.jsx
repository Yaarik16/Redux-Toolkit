import React from 'react'
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../store/favorites/favorite.slice'

const RecipeItem = ({ recipe }) => {

    const favorites = useSelector(state => state.favorites)

    const dispatch = useDispatch()

    //Condition exists

    console.log(favorites)

    return (
        <div className={styles.item}>
            <h3>{recipe.name}</h3>
            <button onClick={() => dispatch(actions.toggleFavorites(recipe))}>Add to favorites</button>
        </div>
    )
}

export default RecipeItem