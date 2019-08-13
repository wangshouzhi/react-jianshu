import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Club from './../../mobile/club/club'
import Books from './../../mobile/books/books'
import Publication from '../../mobile/publication/publication'
import School from './../../mobile/school/school'
class Board extends Component {
    render() {
        return(
            <div className='board_container'>
                <Router>
                    <ul className='board_list'>
                        <li>
                            <Link to ='/mobile/club'>
                                <img src='//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'></img>
                            </Link>
                        </li>
                        <li>
                            <Link to ='/mobile/books'>
                                <img src='//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'></img>
                            </Link>
                        </li>
                        <li>
                            <Link to ='/mobile/publications'>
                                <img src='//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'></img>
                            </Link>
                        </li>
                        <li>
                            <Link to ='/mobile/school'>
                                <img src='//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'></img>
                            </Link>
                        </li>
                    </ul>
                    {/* <Route path="/mobile/club" component={ Club }/>
                    <Route path="/mobile/books" component={ Books }/>
                    <Route path="/mobile/publications" component={ Publication }/>
                    <Route path="/mobile/school" component={ School }/> */}
                </Router>
            </div>
        )
    }
}

export default Board