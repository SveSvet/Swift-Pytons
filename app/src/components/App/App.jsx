import React, {Component} from 'react';
import styles from './App.module.css';
import Header from "../Header";
import Menu from "../Sidebar";
import YMap from "../Map";

export default class App extends Component {

    render() {
        return (
            <>
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

