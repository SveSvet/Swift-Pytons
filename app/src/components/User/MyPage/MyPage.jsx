import React, {Component} from "react";
import styles from './MyPage.module.css';
import Menu from "../Menu";
import { NavLink } from 'react-router-dom';
import avatar from "./assets/avatar.png";
import tick from "./assets/tick.svg";
import Initiatives from "../Initiatives";
import YMap from "../../Map";


const MyPage = (props) => {
    if (props.state.users.length > 0) {
        const isMyPage = props.match.params.id == props.state.userid;
        const index = props.state.users.findIndex(items => items.id == props.match.params.id);
        const user = props.state.users[index];
        let statusstr;
        if (user.status == 'activist') statusstr = "Активист";
        if (user.status == 'governor') statusstr = "Губернатор";
        if (user.status == 'enterpreneur') statusstr = "Предприниматель";
        function GovernorMap() {
        console.log(user.status);
            if (isMyPage) {
                return <div>
                    <input type="checkbox" className={styles.user__tags2} id="tab-btn-2"/>
                    <label htmlFor="tab-btn-2" className={styles['user__tags-label']}>Инициативы по региону</label>
                    <div id="content-2" className={styles['user__content-tags2']}>
                        <YMap/>
                    </div>
                </div>
            }
            else return null
        }

        return (
          <div className={styles.wrapper}>

              <div className={styles.header}>
                  <span className={styles.title}>Сила голоса</span>
                  <span className={styles.pagetitle}>{user.name}</span>
              </div>

              <Menu/>
              <div className={styles.user__wrapper}>
                  <NavLink to="/users" className={styles.back}>К списку пользователей</NavLink>
                  <div className={styles.user__avatar}>
                      <img src={avatar} alt="#"/>
                      <p>{user.city}</p>
                      <p className={styles.status}>Статус: {statusstr}
                      </p>
                  </div>
                  <div className={styles.user__bio}>
                      <p className={styles['desc-of-user']}>E-mail: {user.email}</p>
                      <p className={styles['desc-of-user']}>Телефон: {user.phone}</p>
                      <p className={styles['desc-of-user']}>Дата рождения: {user.date_of_birth}</p>
                      <p className={styles['desc-of-user']}>
                          <img src={tick} alt="" className={styles.tick}/>
                          Голосов: {user.num_of_votes} (поддержавших: { user.supporters.length })
                      </p>
                  </div>
                  <div className={styles.user__content}>
                      <span className={styles['user__content-title']}>Рейтинг на портале: {user.num_of_liking}</span>
                      <input type="checkbox" className={styles.user__tags1} id="tab-btn-1"/>
                      <label htmlFor="tab-btn-1" className={styles['user__tags-label']}>
                          Предложенные инициативы
                      </label>
                      <div className={styles['user__content-tags1']}>
                          Инициативы
                      </div>
                      <GovernorMap/>

                      <input type="checkbox" className={styles.user__tags3} id="tab-btn-3"/>
                      <label htmlFor="tab-btn-3" className={styles['user__tags-label']}>
                          Одобренные инициативы
                      </label>
                      <div id="content-3" className={styles['user__content-tags3']}>
                          Одобренное
                      </div>

                      <input type="checkbox" className={styles.user__tags4} id="tab-btn-4"/>
                      <label htmlFor="tab-btn-4" className={styles['user__tags-label']}>
                          Помогаю проектам
                      </label>
                      <div id="content-4" className={styles['user__content-tags4']}>
                          Помощь проектам
                      </div>

                  </div>
              </div>
          </div>
        )
    }
    else return (<div className={styles.loading}>Загрузка...</div>);
};

export default MyPage;
