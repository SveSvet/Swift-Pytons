import React, {Component} from 'react';
import StartPage from "../StartPage";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import UserPage from "../User/UserPage";
import Registration from "../Registration";
import Message from "../User/Message";
import Initiative from "../User/Initiative";
import Initiatives from "../User/Initiatives";
import MyVoice from "../User/MyVoice";
import Recommend from "../User/Recommend";
import City from "../User/City";
import Mute from "../User/Mute";
import Setting from "../User/Setting";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggle: true,
            users: [],
            initiatives: []
        };
    }
    componentDidMount() {
        fetch('http://leadersofdigital.pythonanywhere.com/api/v1/users/')
          .then(response => response.json())
          .then(
            (response) => {
                console.log(response.results)
                this.setState({users: response.results});
            },
            (error) => {
                this.setState({error});
            })
        fetch('http://leadersofdigital.pythonanywhere.com/api/v1/initiatives/')
          .then(response => response.json())
          .then(
            (response) => {
                console.log(response.results)
                this.setState({initiatives: response.results});
            },
            (error) => {
                this.setState({error});
            })
    }
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={StartPage} />
                    <Route path="/registration" component={Registration} />
                    <Route path='/mypage' exact component={UserPage} />
                    <Route path='/message' component={Message} />
                    <Route exact path='/initiatives' render={(props) => <Initiatives {...props} initiatives={this.state.initiatives}/>}/>
                    <Route path='/initiatives/:id' render={(props) => <Initiative {...props} initiatives={this.state.initiatives}/>} />
                    <Route path='/myvoice' component={MyVoice} />
                    <Route path='/recommend' component={Recommend} />
                    <Route path='/city' component={City} />
                    <Route path='/mute' component={Mute} />
                    <Route path='/setting' component={Setting} />
                </div>
            </Router>
        );
    }

};

