import React, {Component} from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

import styles from './StartPage.module.css';
import Header from "../Header";
import YMap from "../Map";


export default class StartPage extends Component {

    render() {
        return (
        <div>
            <Header child={'Сила голоса'} />
            <YMap/>
            <h2>Голосуй за инициативы рядом с тобой</h2>
            <div className={styles.btn_wrap}>
                <NavLink
                    to='/registration'
                    className={styles.button}> Зарегистрироваться </NavLink>
            </div>
        </div>
        );
    }

};

