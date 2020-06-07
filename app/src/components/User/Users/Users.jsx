import React from "react";
import styles from './Users.module.css';
import Menu from "../Menu";
import {NavLink} from "react-router-dom";
import Header from "../../Header";
import YMap from "../../Map";
import tick from "../MyPage/assets/tick.svg";

const Users = (props) => {
    const items = props.state.users.map(({ id, name, status, email, phone, date_of_birth, city, img, title, num_of_liking}) => {
        return (
            <div key={id} className={styles.users}>
                <NavLink to={"users/"+id} className={styles['user-name']}>{name}</NavLink>
                <div className={styles['user-info__wrapper']}>
                    <img src="https://via.placeholder.com/140x100.png"/>
                    <div className={styles['user-info__desc__wrapper']}>
                        <p className={styles['desk-of-user']}>{city}</p>
                        <p className={styles['desk-of-user']}>Статус: {status}</p>
                        <p className={styles['desk-of-user']}>E-mail: {email}</p>
                        <p className={styles['desk-of-user']}>Телефон: {phone}</p>
                        <p className={styles['desk-of-user']}>Дата Рождения: {date_of_birth}</p>
                    </div>
                </div>
                <p className={styles['desc-of-user-voice']}>
                    <img src={tick} alt="" className={styles.tick}/>
                    Голосов: {num_of_liking}
                </p>
            </div>
        )
    })
    return (
        <div className={styles.wrapper}>
            <Header child={'Пользователи'}/>
            <Menu/>
            <div className={styles.user__wrapper}>
                {items}
            </div>
            <p className={styles.subtitle}>Карта инициатив в вашем регионе:</p>
            <YMap/>
        </div>
    )
};

export default Users;
