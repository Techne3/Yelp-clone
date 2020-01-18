import React from 'react'
import styles from './SearchSuggestions.module.css'

function SearchSuggestions() {
    return (
        <div className={styles.suggestions}>
              <span className={`icons is small ${styles['search-icon']}`}> <i className="fas fa-utensils"></i> 
              <span className={styles.suggestion}>Restaurant </span> </span>

              <span className={`icons is small ${styles['search-icon']}`}> <i className="fas fa-cocktail"></i> 
              <span className={styles.suggestion}>Nightlife </span> </span>

              <span className={`icons is small ${styles['search-icon']}`}> <i className="fas fa-concierge-bell"></i> 
              <span className={styles.suggestion}>Services </span> </span>

              <span className={`icons is small ${styles['search-icon']}`}> <i className="fas fa-truck"></i> 
              <span className={styles.suggestion}>Delivery Services </span> </span>
        </div>
    )
}

export default SearchSuggestions
