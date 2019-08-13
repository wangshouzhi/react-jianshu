import React, { Component } from 'react'
import './home.less'
import Banner from './components/Banner'
import Board from './components/board'

class Home extends Component {
    render() {
        return(
            <div className='home_container'>
                <div className='home_left'>
                    <Banner></Banner>
                </div>
                <div className='home_right'>
                    <Board></Board>
                </div>
            </div>
        )
    }
}

export default Home