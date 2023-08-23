import styles from './recipe.module.css'
import { useActions } from '../../hooks/useActions'
import { useFavorites } from '../../hooks/useFavorites'



const RecipeItem = ({ recipe }) => {
    
    const { favorites } = useFavorites()

    const { toggleFavorites } = useActions()

    const ifExists = favorites.some(rec => rec.id === recipe.id)


    return (
        <div className={styles.item}>
            {}
            <h3>{recipe.name}</h3>
            <button onClick={() => toggleFavorites(recipe)}>{ifExists ? 'Delete from favorites' : 'Add to favorites'}</button>
        </div>
    )
}

export default RecipeItem