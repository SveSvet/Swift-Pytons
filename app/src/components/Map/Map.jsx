import React, {Component} from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import styles from './Map.module.css';
import { NavLink } from 'react-router-dom';

const mapData = {
  center: [51.9587, 85.9601],
  zoom: 10,
};

const YMap = ({ initiatives, selector, select }) => {
  let placeMarks;
  if (initiatives) {
      placeMarks = initiatives.map(({ annotation, text, title, longitude, latitude, created, num_of_supporters}) => {
      let hint = title+'('+created.split("T")[0]+')';
      let placeMark = {
        geometry: [latitude, longitude],
        properties: {
          hintContent: title,
          balloonContent: [annotation+' ('+created.split("T")[0]+')<br>'+text+'<br>Поддержавших: ' + num_of_supporters + '<br><a href="/initiatives/1">Просмотреть инициативу</a>']
        },
        modules: ['geoObject.addon.balloon', 'geoObject.addon.hint']
      };
      return (
        <Placemark {...placeMark}/>
      )
    });
  }

  function selectorFunction(event) {
    if (selector) {
      select(event.get("coords"))
    }
  }
  return (
    <YMaps>
      <Map onClick={e => selectorFunction(e)} defaultState={mapData} width='100%' height='380px'>
        {placeMarks}
      </Map>
    </YMaps>
  )
};

export default YMap;
