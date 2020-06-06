import React from "react";
import styles from './Initiatives.module.css';
import Header from "../../Header";
import YMap from "../../Map";
import Menu from "../Menu";
import {NavLink} from "react-router-dom";

const data = [{
  title: "Поставьте наконец лавочку",
  text: "Нет лавочки по адресу \"Улица Черняховского 9\"",
  annotation: "Лавочка",
  author: {
    id: 1,
    name: "Василий Петрович Мышкин"
  },
  longitude: 37.534945,
  latitude: 55.805013,
  photo: null,
  tags: [
    "благоустройство",
    "условия",
    "заявление",
    "петиция"
  ],
  num_of_supporters: 4,
  created: "2020-06-06T03:55:31.398977+03:00",
  modified: "2020-06-06T15:58:32.436497+03:00",
  id: 1
},{
    title: "Нет прохода к озеру",
    text: "Не могу пройти с детьми к озеру",
    annotation: "Озеро",
    author: {
      id: 2,
      name: "Михаил Александрович Берсенев"
    },
    longitude: 37.527314,
    latitude: 55.806539,
    photo: null,
    tags: [
      "проход",
      "грязно",
      "петиция"
    ],
    num_of_supporters: 3,
    created: "2020-06-06T03:55:31.409170+03:00",
    modified: "2020-06-06T15:58:32.468314+03:00",
    id: 2
  },
  {
    title: "Чапаевский парк закрыт",
    text: "Когда наконец откроете Чапаевский парк?",
    annotation: "Чапаевский парк",
    author: {
      id: 2,
      name: "Михаил Александрович Берсенев"
    },
    longitude: 37.521752,
    latitude: 55.801228,
    photo: null,
    tags: [
      "проход",
      "состояние",
      "грязно",
      "жалоба"
    ],
    num_of_supporters: 3,
    created: "2020-06-06T03:55:31.421510+03:00",
    modified: "2020-06-06T15:58:32.504278+03:00",
    id: 3
  },
  {
    title: "Нет детской площадки",
    text: "Детям негде играть возле дома! Приходится идти в соседние дворы!!! Устанвоите площадку.",
    annotation: "Детская площадка",
    author: {
      id: 3,
      name: "Валерия Викторовна Федорова"
    },
    longitude: 37.536758,
    latitude: 55.80804,
    photo: null,
    tags: [
      "благоустройство",
      "состояние",
      "жалоба"
    ],
    num_of_supporters: 1,
    created: "2020-06-06T03:55:31.431739+03:00",
    modified: "2020-06-06T15:58:32.536279+03:00",
    id: 4
  }]

const items = data.map(({ id, img, title, num_of_supporters}) => {
  return (
    <div className={styles.initiative}>
      <img src="https://via.placeholder.com/140x100.png"/>
      <NavLink to={"initiatives/"+id}>{title}</NavLink>
      <div>Голосов: {num_of_supporters}</div>
    </div>
  )
})

const Initiatives = () => {
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
