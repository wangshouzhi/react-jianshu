import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Home from './../pages/home/home'
import Detail from './../pages/detail/detail'

const  basicRouter = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/detail" component={Detail}/>
        </Switch>
    </HashRouter>
);

export default basicRouter