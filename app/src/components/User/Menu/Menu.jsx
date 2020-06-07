import React, {useState} from "react";
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
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

const Menu = (props) => {
    const initialState = [
        {value: 'Мой профиль', id: 1, img: mypage, to: '/users/1'},
        {value: 'Сообщения', id: 2, img: message, to: '/message'},
        {value: 'Инициатива', id: 3, img: inic, to: '/initiatives'},
        {value: 'Мои голоса', id: 4, img: voices, to: '/myvoice'},
        {value: 'Рекомендации', id: 5, img: recommend, to: '/recommend'},
        {value: 'Поиск активистов', id: 6, img: city, to: '/users'},
        {value: 'Уведомления', id: 7, img: mute, to: '/mute'},
        {value: 'Настройки', id: 8, img: setting, to: '/setting'}
    ];

    const [sidebarOpen, setSidebarOpen] = useState(true);


    const [state, setState] = useState(initialState);
    const items = state.map(({ value, id, img, to, key}) => {
       return (
           <NavLink
               key={id}
               to={to}
               exact
               className={styles.menu__item}
               activeClassName={styles['menu__item-active']}
           >
               <img src={img} alt="" className={styles['menu-icon']}/>
               {value}
           </NavLink>
       )
    })

    const moveSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
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
    )

};

export default Menu;


