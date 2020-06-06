import React, {useState} from "react";
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Sidebar from "react-sidebar";
import classnames from 'classnames';

import mypage from './assets/mypage.svg';
import message from './assets/message.svg';
import inic from './assets/inic.svg';
import voices from './assets/voices.svg';
import recommend from './assets/recommend.svg';
import city from './assets/city.svg';
import mute from './assets/mute.svg';
import setting from './assets/setting.svg';
import arrow from './assets/arrow.svg';

import Search from "../Search";

import styles from './Menu.module.css';

const Menu = () => {
    const initialState = [
        {value: 'Мой профиль', id: 1, img: mypage, to: '/mypage'},
        {value: 'Сообщения', id: 2, img: message, to: '/message'},
        {value: 'Инициатива', id: 3, img: inic, to: '/initiative'},
        {value: 'Мои голоса', id: 4, img: voices, to: '/myvoice'},
        {value: 'Рекомендации', id: 5, img: recommend, to: '/recommend'},
        {value: 'Выбор города', id: 6, img: city, to: '/city'},
        {value: 'Уведомления', id: 7, img: mute, to: '/mute'},
        {value: 'Настройки', id: 8, img: setting, to: '/setting'}
    ];

    const [sidebarOpen, setSidebarOpen] = useState(false);


    const [state, setState] = useState(initialState);
    const items = state.map(({ value, id, img, to}) => {
       return (
           <NavLink
               key={id}
               to={to}
               exact
               className={classnames({[styles.menu__item]: true,
                   [styles.itemClose]: sidebarOpen})}
               activeclassName={styles['menu__item-active']}
           >
               <img src={img} alt="" className={styles['menu-icon']}/>
               {value}
           </NavLink>
       )
    })

    const moveSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        console.log('hello')
    };

    return (
        <Router>
            <div className={classnames({[styles.menu__container]: true,
                [styles.menuClose]: sidebarOpen})}>

                <Search />
                <div className={styles.menu}>
                    {items}
                </div>
                <button className={styles.arrow} onClick={moveSidebar}>
                    <img src={arrow} alt="#" className={classnames({[styles.arrow]: true,
                                             [styles.arrowClose]: sidebarOpen})}/>
                </button>
            </div>
        </Router>
    )

};

export default Menu;


