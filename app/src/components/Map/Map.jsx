import React, {Component} from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import styles from './Map.module.css';
import { NavLink } from 'react-router-dom';

const mapData = {
  center: [51.9587, 85.9601],
  zoom: 10,
};

const placeMark = {
  geometry: [51.9587, 85.9601],
  properties: {
    hintContent: 'Это хинт',
    balloonContent: ['Лавочка (12.05.2020)<br>Поставьте уже, наконец, лавочку.<br><a href="/initiatives/1">Просмотреть инициативу</a>']

  },
  modules: ['geoObject.addon.balloon', 'geoObject.addon.hint']
};

const coordinates = [
  [55.684758, 37.738521],
  [57.684758, 39.738521]
];

const YMap = () => {
    return (
      <YMaps>
        <Map defaultState={mapData} width='100%' height='380px'>
          <Placemark {...placeMark}/>
        </Map>
      </YMaps>
    )
};

export default YMap;
