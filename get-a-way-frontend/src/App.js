"use strict";

import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { StartPageView } from './views/StartPageView';
import { UserLoginView } from "./views/UserLoginView";
import { UserSignupView } from "./views/UserSignupView";
import { AboutPageView } from "./views/AboutPageView";
import { PriorityPageView } from "./views/PriorityPageView";
import { RouteSelectionPageView } from "./views/RouteSelectionPageView";


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Get a way',
            routes: [
                { component: AboutPageView , path: '/about'},
                { component: StartPageView , path: '/', exact: true},
                { component: UserLoginView, path: '/login'},
                { component: UserSignupView, path: '/register'},
                { component: PriorityPageView, path: '/priority'},
                { component: RouteSelectionPageView, path: '/routes'}
            ]
        };
    }

    componentDidMount(){
        document.title = this.state.title;
    }

    render() {
        return(
            <div>
                <Router>
                    <Switch>
                        {this.state.routes.map((route, i) => (<Route key={i} {...route}/>) )}
                    </Switch>
                </Router>
            </div>
        );
    }
}
