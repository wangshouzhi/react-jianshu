import React, { Component } from 'react'
import './header.less'
import {connect } from 'react-redux'
import navImg from './../../assets/images/nav-logo.png'
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store'



class Header extends Component {
    // constructor(props){
    //     super(props)
    // }
    
    getSearchMock (show) {
        if(show){
            return(
                <div className= "search_mock">
                    <div className="search_title clearfix">
                        <span className='search_hot'>热门搜索</span>
                        <span className='search_batch'>换一批</span> 
                    </div>
                    <ul className='search_list'>
                    {
                        this.props.mockList.map((item)=> {
                            return <li key={item}><a>{ item }</a></li>
                        })

                    }
                        
                    </ul>
                </div>
            )
        }else{
            return null;
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
                                in={this.props.focused}
                                classNames="slide"
                            >
                                <div>
                                    <input type='text' 
                                            placeholder='搜索' 
                                            className={ this.props.focused ? "focused header_search_input": "header_search_input"}
                                            onFocus={ ()=> this.props.searchFocus() }
                                            onBlur={ ()=> this.props.searchBlur() }/>
                                    <i className={this.props.focused ? "focused_icon iconfont":  'iconfont'}>&#xe637;</i>
                                </div>
                     
                            </CSSTransition>
                            { this.getSearchMock(this.props.focused)  }
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
}

const mapStateToProps = (state)=> {
    return {
        focused: state.get('header').get("focused"),
            //  state.getIn(['deader', 'focused'])
            // 这两种写法是一样的
            // state.get('header').get("focused")
        mockList: state.get('header').get('mockList')    
    }
}

const mapDispathToProps = (dispatch)=> {
    return {
        searchFocus() {
            dispatch(actionCreators.getAjaxList())
            dispatch( actionCreators.searchFocus() )
        },
        searchBlur() {
           
            dispatch( actionCreators.searchBlur() )
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)
