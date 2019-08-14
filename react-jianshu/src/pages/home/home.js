import React, { Component } from 'react'
import './home.less'
import Banner from './components/Banner'
import Board from './components/board'
import NewList from './components/newList'
import HomeDownloadApp from './components/homeDownloadApp' 

class Home extends Component {
    render() {
        return(
            <div className='home_container'>
                <div className='home_left'>
                    <Banner></Banner>
                    <NewList></NewList>
                </div>
                <div className='home_right'>
                    <Board></Board>
                    <HomeDownloadApp></HomeDownloadApp>
                </div>
            </div>
        )
    }
}

export default Home