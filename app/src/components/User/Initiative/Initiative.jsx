import React, {Component} from "react";
import styles from './Initiative.module.css';
import Header from "../../Header";
import Menu from "../Menu";
import { NavLink } from 'react-router-dom';


const Initiative = (props) => {
    const index = props.initiatives.findIndex(items => items.id == props.match.params.id)
    const initiative = props.initiatives[index];
    const tagstring = initiative.tags.map(x => "#"+x+" ")
    return (
      <div className={styles.wrapper}>
        <Header child={'Инициатива'}/>
        <Menu/>
        <div className={styles.initiative__wrapper}>
          <NavLink to="/initiatives">Назад</NavLink>
          <div>Количество голосов: {initiative.num_of_supporters}</div>
          <h1>{initiative.title}</h1>
          <div className={styles.tags}>{tagstring}</div>
          <div>{initiative.created.split('T')[0]}</div>
          <img src="https://via.placeholder.com/335x200.png"/>
          <div>{initiative.text}</div>
        </div>
      </div>
    )
};

export default Initiative;
