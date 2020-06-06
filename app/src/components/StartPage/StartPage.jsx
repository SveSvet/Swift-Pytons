import React, {Component} from 'react';

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
                <a
                    href="http://localhost:3000/registration"
                    className={styles.button}> Зарегистрироваться </a>
                <a
                    href="http://localhost:3000/"
                    className={styles.button}> Назад</a>
            </div>
        </div>
        );
    }

};

