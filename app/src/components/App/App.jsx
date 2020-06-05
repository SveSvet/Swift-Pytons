import React, {Component} from 'react';
import styles from './App.module.css';
import Header from "../Header";

export default class App extends Component {

    render() {
        return (
            <>
                <Header child={'Lets\'go to React!'} />
            </>
        );
    }

};

