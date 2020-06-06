import React from "react";
import styles from './Users.module.css';
import Menu from "../Menu";
import {NavLink} from "react-router-dom";
import Header from "../../Header";
import YMap from "../../Map";

const Users = (props) => {
    const items = props.users.map(({ id, name, status, email, phone, date_of_birth, city, img, title, num_of_liking}) => {
        return (
            <div key={id} className={styles.user}>
                <p className={styles['user-name']}>{name}</p>
                <img src={img}/>
                <p className={styles['user-city']}>{city}</p>
                <p className={styles['user-status']}>{status}</p>
                <p className={styles['user-email']}>{email}</p>
                <p className={styles['user-phone']}>{phone}</p>
                <p className={styles['user-date_of_birth']}>{date_of_birth}</p>
                <NavLink to={"mypage/"+id}>{name}</NavLink>
                <div>Голосов: {num_of_liking}</div>
            </div>
        )
    })
    return (
        <div className={styles.wrapper}>
            <Header child={'Моя страница'}/>
            <Menu/>
            <div className={styles.user__wrapper}>
                {items}
            </div>
            <YMap/>
        </div>
    )
};

export default Users;