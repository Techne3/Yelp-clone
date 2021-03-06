import React from 'react'
import logo from '../assets/logo.png'
import styles from './Navbar.module.css'
import SearchBar from '../searchBar/SearchBar'

function Navbar() {
    return (
        <div className={styles['nav-bar']}>
            <img src={logo} alt='belp logo' className={styles.logo}/>
            <SearchBar small/>
            <button className={`button ${styles['nav-button']}`}>Sign In</button>
            <button className={`button ${styles['nav-button']}`}>Register</button>
        </div>
    )
}

export default Navbar
