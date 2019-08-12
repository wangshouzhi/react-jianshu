import React,{ Component } from 'react';
import './App.css';
import GlobalStyle from './style'
import Icon from './assets/iconfont/iconfont'
import Header from './components/header/header'
import Router from  './routers/router'

class App extends Component {
    render() {
        return(
            <div className='App'>
                <GlobalStyle />
                <Icon ></Icon>
                <Header></Header>
                <Router></Router>
            </div>
        )
    }
}


export default App;
