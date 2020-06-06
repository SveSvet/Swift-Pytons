import React, {Component} from 'react';
import StartPage from "../StartPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "../User/Users";
import Registration from "../Registration";
import Message from "../User/Message";
import Initiative from "../User/Initiative";
import Initiatives from "../User/Initiatives";
import MyVoice from "../User/MyVoice";
import Recommend from "../User/Recommend";
import City from "../User/City";
import Mute from "../User/Mute";
import Setting from "../User/Setting";
import MyPage from "../User/MyPage";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggle: true,
            userid: 1,
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
        fetch('https://leadersofdigital.pythonanywhere.com/api/v1/initiatives/')
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
                <Switch>
                    <Route exact path="/" component={StartPage} />
                    <Route path="/registration" component={Registration} />
                    <Route path='/users/:id' render={(props) => <MyPage {...props} state={this.state}/>}/>
                    <Route exact path='/users' render={(props) => <Users {...props} state={this.state}/>}/>
                    <Route path='/message' component={Message} />
                    <Route exact path='/initiatives' render={(props) => <Initiatives {...props} state={this.state}/>}/>
                    <Route path='/initiatives/:id' render={(props) => <Initiative {...props} state={this.state}/>} />
                    <Route path='/myvoice' component={MyVoice} />
                    <Route path='/recommend' component={Recommend} />
                    <Route path='/city' component={City} />
                    <Route path='/mute' component={Mute} />
                    <Route path='/setting' component={Setting} />
                </Switch>
                </div>
            </Router>
        );
    }

};

