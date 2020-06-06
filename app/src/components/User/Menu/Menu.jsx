import React, {useState} from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import mypage from './assets/mypage.svg';
import message from './assets/message.svg';
import inic from './assets/inic.svg';
import voices from './assets/voices.svg';
import recommend from './assets/recommend.svg';
import city from './assets/city.svg';
import mute from './assets/mute.svg';
import setting from './assets/setting.svg';

import Search from "../Search";
import MyPage from "../MyPage";
import Message from "../Message";
import Initiative from "../Initiative";
import MyVoice from "../MyVoice";
import Recommend from "../Recommend";
import City from "../City";
import Mute from "../Mute";
import Setting from "../Setting";

import styles from './Menu.module.css';

const Menu = () => {

    const initialState = [
        {value: 'Мой профиль', id: 1, img: mypage, to: '/'},
        {value: 'Сообщения', id: 2, img: message, to: '/message'},
        {value: 'Инициатива', id: 3, img: inic, to: '/initiative'},
        {value: 'Мои голоса', id: 4, img: voices, to: '/myvoice'},
        {value: 'Рекомендации', id: 5, img: recommend, to: '/recommend'},
        {value: 'Выбор города', id: 6, img: city, to: '/city'},
        {value: 'Уведомления', id: 7, img: mute, to: '/mute'},
        {value: 'Настройки', id: 8, img: setting, to: '/setting'}
    ];

    const [state, setState] = useState(initialState);
    const items = state.map(({ value, id, img, to}) => {
       return (
           <NavLink
               key={id}
               to={to}
               exact
               className={styles['menu__item']}
               activeclassName={styles['menu__item-active']}
           >
               <img src={img} alt="" className={styles['menu-icon']}/>
               {value}
           </NavLink>
       )
    })

    return (
        <Router>
            <div className={styles.menu__container}>
                <Search />
                <div className={styles.menu}>
                    {items}
                </div>
            </div>

                <div className={styles.content}>
                    <Route path='/' exact component={MyPage} />
                    <Route path='/message' component={Message} />
                    <Route path='/initiative' component={Initiative} />
                    <Route path='/myvoice' component={MyVoice} />
                    <Route path='/recommend' component={Recommend} />
                    <Route path='/city' component={City} />
                    <Route path='/mute' component={Mute} />
                    <Route path='/setting' component={Setting} />
                </div>

        </Router>

    )

};

export default Menu;

