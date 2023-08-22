import React from 'react'
import { BsFillBookmarkHeartFill } from 'react-icons/bs'
import styles from './header.module.css'
import { useFavorites } from '../../hooks/useFavorites'


const Header = () => {

    const { favorites } = useFavorites()

    return (
        <header className={styles.header}>
            <div>
                <BsFillBookmarkHeartFill/>
            </div>
            <span>{favorites.length}</span>
        </header>
    )
}

export default Header