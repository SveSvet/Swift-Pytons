import React from "react";
import styles from './Registration.module.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

import gmail from "./assets/gmail.svg";
import vk from "./assets/vk.svg";
import facebook from "./assets/facebook.svg";
import gosuslugi from "./assets/gosuslugi.svg";

const Registration = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Голосуй за инициативы рядом с тобой</h1>
            <form action="registration" className={styles.form}>
                <input type="email" className={styles.input} placeholder="Введите e-mail"/>
                <input type="password" className={styles.input} placeholder="Введите почту"/>

                <NavLink to="/users/1"
                         className={styles.button}>
                    Зарегистрироваться</NavLink>
                <div className={styles.social}>
                    <NavLink to="/users/1">
                        <img src={gmail} alt="" className={styles['social-icon']}/>
                    </NavLink>
                    <NavLink to="/users/1">
                        <img src={vk} alt="" className={styles['social-icon']}/>
                    </NavLink>
                    <NavLink to="/users/1">
                        <img src={facebook} alt="" className={styles['social-icon']}/>
                    </NavLink>
                    <NavLink to="/users/1">
                        <img src={gosuslugi} alt="" className={styles['social-icon']}/>
                    </NavLink>
                </div>

            </form>
        </div>
    )
};

export default Registration;