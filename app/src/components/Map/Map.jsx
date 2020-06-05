import React, {Component} from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import styles from './Map.module.css';

const mapData = {
  center: [55.751574, 37.573856],
  zoom: 5,
};

const coordinates = [
  [55.684758, 37.738521],
  [57.684758, 39.738521]
];

export default class YMap extends Component {

  render() {
    return (
      <YMaps>
        <Map defaultState={mapData} width='100%' height='380px'>
          {coordinates.map(coordinate => <Placemark geometry={coordinate}/>)}
        </Map>
      </YMaps>
    )
  }
};
