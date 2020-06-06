import React from "react";
import styles from './Initiatives.module.css';
import Header from "../../Header";
import YMap from "../../Map";
import Menu from "../Menu";
import {NavLink} from "react-router-dom";


const Initiatives = (props) => {
  const items = props.initiatives.map(({ id, img, title, num_of_supporters}) => {
    return (
      <div key={id} className={styles.initiative}>
        <img src="https://via.placeholder.com/140x100.png"/>
        <NavLink to={"initiatives/"+id}>{title}</NavLink>
        <div>Голосов: {num_of_supporters}</div>
      </div>
    )
  })
    return (
        <div className={styles.wrapper}>
            <Header child={'Инициативы'}/>
            <Menu/>
            <YMap/>
            <div className={styles.initiatives__wrapper}>
                {items}
            </div>

        </div>
    )
};

export default Initiatives;
