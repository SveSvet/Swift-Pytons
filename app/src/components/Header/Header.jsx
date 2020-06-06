import React from 'react';
import styles from './Header.module.css';

const Header = ({ child }) => {
    return (
    <div className={styles.header}>
        <span className={styles.title}>Сила голоса</span>
        <span className={styles.pagetitle}>{child}</span>
    </div>
    )
};

export default Header;
