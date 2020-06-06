import React, {Component} from "react";
import styles from './Initiative.module.css';
import Header from "../../Header";
import Menu from "../Menu";
import { NavLink } from 'react-router-dom';


const Initiative = (props) => {
    const index = props.state.initiatives.findIndex(items => items.id == props.match.params.id)
    const initiative = props.state.initiatives[index];
    const tagstring = initiative.tags.map(x => "#"+x+" ")
  function vote (id, type) {
    /*
    let index = props.state.initiatives.findIndex(items => items.id == id);
    let newdata = props.state.initiatives;
    type === 0 ? newdata[index].num_of_supporters-- : newdata[index].num_of_supporters++;
    this.setState({initiatives: newdata});
    */
    fetch('http://leadersofdigital.pythonanywhere.com/api/v1/initiative_likes/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"initiative": id, "user": props.state.userid, "type": type})
    }).then(function (response) {
      return response.json();
    }).then((data) => {
      console.log(data);
    });

  }
  function VoteButton() {
    const supporters = initiative.supporters.map(x => x.id)
    if (!supporters.includes(props.state.userid)) {
      return <div onClick={vote(props.match.params.id, 1)} className={styles.vote}>Проголосовать</div>
    }
    return <div onClick={vote(props.match.params.id, 0)} className={styles.voted}>Отозвать голос</div>
  }
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
          <VoteButton/>
          <div>{initiative.text}</div>
        </div>
      </div>
    )
};

export default Initiative;
