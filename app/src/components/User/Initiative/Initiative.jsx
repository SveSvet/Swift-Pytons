import React, {Component} from "react";
import classnames from 'classnames';
import styles from './Initiative.module.css';
import Header from "../../Header";
import Menu from "../Menu";
import { NavLink } from 'react-router-dom';
import tick from "./assets/tick.svg";


const Initiative = (props) => {
console.log(props)
if (props.state.initiatives.length > 0) {
  let index = props.state.initiatives.findIndex(items => items.id == props.match.params.id)
  let initiative = props.state.initiatives[index];
  let tagstring = initiative.tags.map(x => "#" + x + " ")

  const VoteButton = () => {
    let supporters = initiative.supporters.map(x => x.id);
    if (!supporters.includes(props.state.userid)) {
      return <div onClick={() => props.vote(props.match.params.id, 1)} className={styles.vote}>Проголосовать</div>
    } else {
      return <div onClick={() => props.vote(props.match.params.id, 0)} className={styles.voted}>Отозвать голос</div>
    }
  }


    return (
      <div className={styles.wrapper}>
        <Header child={'Инициатива'}/>
        <Menu/>
        <div className={styles.initiative__wrapper}>
          <NavLink to="/initiatives">Назад</NavLink>
          <h1>{initiative.title}</h1>
          <div className={styles.tags}>{tagstring}</div>
          <div>{initiative.created.split('T')[0]}</div>
          <img className={styles.background} src="https://via.placeholder.com/335x200.png"/>
          <div className={styles['voice-count-wrap']}>

            <div className={styles['voice-count']}>
              <img src={tick} alt="" className={styles.tick}/>
              Количество голосов: {initiative.num_of_supporters}
            </div>

            <VoteButton/>
          </div>
          <div className={styles.desk}>{initiative.text}</div>
        </div>
      </div>
    )
}
else return (<div className={styles.loading}>Загрузка...</div>);
};

export default Initiative;
