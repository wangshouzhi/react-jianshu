import React, { Component } from 'react'
import './home.less'
import Banner from './components/Banner'
import Board from './components/board'
import NewList from './components/newList'
import HomeDownloadApp from './components/homeDownloadApp'
import AuthorList from './components/authorList'
import BackTop from './../../components/backTop/backTop'
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
                    <AuthorList></AuthorList>
                </div>
                <BackTop></BackTop>
            </div>
        )
    }
}

export default Home