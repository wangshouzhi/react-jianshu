import React,{ Component } from 'react';
import './App.css';
import GlobalStyle from './style'
import Header from './components/header/header'

class App extends Component {
    render() {
        return(
            <div className='App'>
                <GlobalStyle />
                <Header></Header>
            </div>
        )
    }
}


export default App;
