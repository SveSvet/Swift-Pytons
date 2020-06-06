import React, {Component} from 'react';
import styles from './App.module.css';
import Header from "../Header";
import YMap from "../Map";

import Menu from "../User/Menu";

export default class App extends Component {

    render() {
        return (
            <>
                <Menu />
              <Header child={'Сила голоса'} />
              <YMap/>
              <h2>Голосуй за инициативы рядом с тобой</h2>
              <div className={styles.btn_wrap}>
              <button>Зарегистрироваться</button>
              </div>
            </>
        );
    }

};

