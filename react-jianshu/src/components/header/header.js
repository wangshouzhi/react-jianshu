import React, { Component} from 'react'
import './header.less'
import navImg from './../../assets/images/nav-logo.png'
class Header extends Component {
    render() {
        return(
            <div className="header_container">
               <div className='header_content'>
                    <a href='/'><img className='header_navimg' src={navImg} alt=""/></a>
                    <div className='container'></div>
               </div>
            </div>
        )
    }
}

export default Header
