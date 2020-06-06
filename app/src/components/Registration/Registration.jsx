import React from "react";
import styles from './Registration.module.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const Registration = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Голосуй за инициативы рядом с тобой</h1>
            <form action="registration" className={styles.form}>
                <input type="email" className={styles.input} placeholder="Введите e-mail"/>
                <input type="password" className={styles.input} placeholder="Введите почту"/>

                <NavLink to="/mypage"
                         className={styles.button}>
                    Зарегистрироваться</NavLink>
            </form>
        </div>
    )
};

export default Registration;