import React from 'react';

import Home from '../pages/home/home';
import HomeAdm from '../pages/homeAdm/home';

import Login from '../pages/login/login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function Logado() {

    let token = localStorage.getItem('token');

    if (token != null)
        return (
            <>
            <Route path="/" exact={true} component={HomeAdm} ></Route>
            </>
    );
    else
        return (
            <>
            <Route path="/" exact={true} component={Home} ></Route>
            <Route path="/Entrar" component={Login} ></Route>
            </>   
        );

}