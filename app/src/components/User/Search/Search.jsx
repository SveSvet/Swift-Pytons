import React from "react";
import styles from './Search.module.css';
import search from './assets/search.svg';

const Search = () => {
    return (
        <div className={styles.wrapper}>
            <img src={search} alt="Search" className={styles['search-icon']}/>
            <input type="search" value='Поиск' className={styles.input}/>
        </div>
    )
};

export default Search;