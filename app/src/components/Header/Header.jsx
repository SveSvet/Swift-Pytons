import React from 'react';
import styles from './Header.module.css';

const Header = ({ child }) => {
    return (
    <div className={styles.header}>
        <span className={styles.title}>{child}</span>
    </div>
    )
};

export default Header;
