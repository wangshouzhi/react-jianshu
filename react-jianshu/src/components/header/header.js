import React, { Component} from 'react'
import './header.less'
import navImg from './../../assets/images/nav-logo.png'
import { CSSTransition } from 'react-transition-group';
class Header extends Component {
    constructor(props) {
        super(props)
        this.state= {
            focused: false
        }
    }
    render() {
        return(
            <div className="header_container">
               <div className='header_content'>
                    <a href='/'><img className='header_navimg' src={navImg} alt=""/></a>
                    <div className='container'>
                        <a href='/' className='nav_menu nav_menu_left menu_active'><i className='iconfont'>&#xe613;</i>首页</a>
                        <a href='/' className='nav_menu nav_menu_left menu_app'><i className='iconfont'>&#xe608;</i> app下载</a>
                       
                        <div className='header_search'> 
                            <CSSTransition
                                timeout={200}
                                in={this.state.focused}
                                classNames="slide"
                            >
                                <div>
                                <input type='text' 
                                        placeholder='搜索' 
                                        className={ this.state.focused ? "focused header_search_input": "header_search_input"}
                                        onFocus={ ()=> this.searchFocus() }
                                        onBlur={ ()=> this.searchBlur() }/>
                                <i className={this.state.focused ? "focused_icon iconfont":  'iconfont'}>&#xe637;</i>
                                </div>

                            </CSSTransition>
                            
                        </div>
                       
                        <a href='/' className='nav_menu nav_menu_right menu_active'><i className='iconfont'>&#xe604;</i> deta</a>
                        <a href='/' className='nav_menu nav_menu_right'><i className='iconfont'>&#xe636;</i></a>
                    </div>
                    <div className='header_right'>
                        <a href='/' className='header_article'><i className='iconfont'>&#xe62d;</i>写文章 </a>
                        <a href='/' className='header_register'>注册 </a>
                        <a href='/' className='header_login'>登录 </a>
                    </div>
                    
               </div>
            </div>
        )
    }

    searchFocus() {
        console.log("ss")
        this.setState(()=> {
            return{
                focused:true
            }
        })
    }
    searchBlur() {
        this.setState(()=> {
            return {
                focused: false
            }
        })
    }
}

export default Header
