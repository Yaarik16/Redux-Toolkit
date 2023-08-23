import React from 'react'
import { BsFillBookmarkHeartFill } from 'react-icons/bs'
import styles from './header.module.css'
import { useFavorites } from '../../hooks/useFavorites'
import { Link } from 'react-router-dom'
import {AiTwotoneHome} from 'react-icons/ai'

const Header = () => {

    const { favorites } = useFavorites()

    return (
        <header className={styles.header}>
             <Link to='/'><AiTwotoneHome /></Link>
            <div className={styles.count}>
                <Link to='/favorites'><BsFillBookmarkHeartFill /></Link>
            <span>{favorites.length}</span>
            </div>
        </header>
    )
}

export default Header