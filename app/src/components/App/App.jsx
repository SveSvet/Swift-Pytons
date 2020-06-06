import React, {Component} from 'react';
import StartPage from "../StartPage";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Menu from "../User/Menu";
import UserPage from "../User/UserPage";
import Registration from "../Registration";

export default class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={StartPage} />
                    <Route path="/registration" component={Registration} />
                    <Route path="/menu" component={Menu} />
                </div>
            </Router>
        );
    }

};

