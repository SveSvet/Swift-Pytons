import React, {Component} from "react";
import styles from './MyPage.module.css';
import Header from "../../Header";
import Menu from "../Menu";
import { NavLink } from 'react-router-dom';


const MyPage = (props) => {
    const index = props.users.findIndex(items => items.id == props.match.params.id);
    const user = props.users[index];
    return (
      <div className={styles.wrapper}>
        <Header child={'Моя страница'}/>
        <Menu/>
        <div className={styles.initiative__wrapper}>
          <NavLink to="/mypage">Назад</NavLink>
          <div>Количество голосов: {user.name}</div>
          <h1>{user.email}</h1>
          <div className={styles.tags}></div>
        </div>
      </div>
    )
};

export default MyPage;
