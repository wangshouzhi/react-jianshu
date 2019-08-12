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
    
    getSearchMock () {
        const { focused, mockList, page, totalPage, mouseIn, handleMouse, handleLeave, handleChangePage} = this.props;
        const newList = mockList.toJS();
        const pageList = [];
        if(newList.length){
            for (let i = (page-1)*10; i< page * 10; i++){
                pageList.push(
                    <li key={newList[i]}><a href='/'>{ newList[i] }</a></li>
                )
            }
        }
        
        if(focused || mouseIn){
            return(
                <div className= "search_mock" onMouseEnter= {()=> handleMouse() } onMouseLeave= { (()=> handleLeave()) } >
                    <div className="search_title clearfix">
                        <span className='search_hot'>热门搜索</span>
                        <span className='search_batch' onClick= { ()=> handleChangePage(page, totalPage) }><i className='iconfont'>&#xe604;</i>换一批</span> 
                    </div>
                    <ul className='search_list'>
                        {/* {                            
                            mockList.map((item)=> {
                                return <li key={item}><a href='/'>{ item }</a></li>
                            })
                        } */}
                        {pageList}
                    </ul>
                </div>
            )
        }else{
            return null;
        }
     }

    render() {
        const { focused, searchFocus, searchBlur, mockList } = this.props
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
                                in={focused}
                                classNames="slide"
                            >
                                <div>
                                    <input type='text' 
                                            placeholder='搜索' 
                                            className={focused ? "focused header_search_input": "header_search_input"}
                                            onFocus={ ()=> searchFocus(mockList) }
                                            onBlur={ ()=> searchBlur() }/>
                                    <i className={focused ? "focused_icon iconfont zoom":  'iconfont zoom'}>&#xe637;</i>
                                </div>
                     
                            </CSSTransition>
                            { this.getSearchMock(focused)  }
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
        mockList: state.get('header').get('mockList'),
        page: state.get('header').get('page'),
        mouseIn: state.get('header').get('mouseIn'),
        totalPage: state.get('header').get('totalPage')
    }
}

const mapDispathToProps = (dispatch)=> {
    return {
        searchFocus(mockList) {
            if (mockList.size === 0) {
                dispatch(actionCreators.getAjaxList())
            }
            dispatch( actionCreators.searchFocus() )
        },
        searchBlur() {
            dispatch( actionCreators.searchBlur() )
        },
        handleMouse() {
            dispatch(actionCreators.handleMouse() )
        },
        handleLeave() {
            dispatch(actionCreators.handleLeave())
        },
        handleChangePage(page,totalPage) {
            console.log(page,totalPage)
            if(page< totalPage){
                dispatch(actionCreators.handleChangePage(page + 1))

            }else{
                dispatch(actionCreators.handleChangePage(1))
            }
            
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)
