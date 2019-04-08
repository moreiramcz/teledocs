import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';


import Login from './pages/Login';
import Home from './pages/Home';
import CadNewUser from './pages/CadNewUser';
import LoginUser from './pages/LoginUser';

export default class Routes extends Component{
    render(){
        return(
            <Router>
            <Scene key="root">
              <Scene key="login" hideNavBar component={Login} title="Login" initial={true}/>
              <Scene key="home" hideNavBar component={Home} title="Home"/>
              <Scene key="cadnewuser" hideNavBar component={CadNewUser} title="CadNewUser"/>
              <Scene key="loginuser" hideNavBar component={LoginUser} title="LoginUser"/>
            </Scene>
           </Router>

          
        )
    }
}