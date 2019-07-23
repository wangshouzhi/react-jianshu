import React, { Component} from 'react'
import './header.less'
import navImg from './../../assets/images/nav-logo.png'
class Header extends Component {
    render() {
        return(
            <div className="header_container">
               <div className='header_content'>
                    <a href='/'><img className='header_navimg' src={navImg} alt=""/></a>
                    <div className='container'>
                        <a href='/' className='nav_menu nav_menu_left'>首页</a>
                        <a href='/' className='nav_menu nav_menu_left'> app下载</a>
                        <input type='text' placeholder='搜索' className='header_search'/>
                        <a href='/' className='nav_menu nav_menu_right'> deta</a>
                        <a href='/' className='nav_menu nav_menu_right'>Aa</a>
                    </div>
                    <div className='header_right'>
                        <a href='/' className='header_article'>写文章 </a>
                        <a href='/' className='header_register'>注册 </a>
                        <a href='/' className='header_login'>登录 </a>
                    </div>
                    
               </div>
            </div>
        )
    }
}

export default Header
