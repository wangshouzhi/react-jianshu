import React, { Component } from 'react'
import '../home.less'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from '../store'

class HomeDownloadApp extends Component {
    render() {
        const { downAppShow, downAppFocus, downAppBlur } = this.props;
        return(
            <div className='home_download_app clearfix' onMouseEnter = {() => downAppFocus() } onMouseLeave = {() => downAppBlur()}>
                <Link to='/pages/downloadapp' >
                    <img className='img' src='//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' alt=''></img>
                    <div className="info">
                        <div className="title">下载简书手机App<i className="iconfont ic-link"></i></div>
                        <div className="description">随时随地发现和创作内容</div>
                    </div>
                </Link>
                <div className={ downAppShow ? 'down_app_mock ' : 'down_app_mock down_mock' } onClick={ ()=> this.props.aaa() }>
                    <img className='mock_img' src='//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' alt=''></img>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        downAppShow: state.getIn(['home', 'downAppShow'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        downAppFocus() {
            console.log('aaa');
            
            dispatch(actionCreators.downAppFocus())
        },
        downAppBlur() {
            console.log("bbb");
            
            dispatch(actionCreators.downAppBlur())
        }
    }
    
        
    
}

export default connect (mapStateToProps, mapDispatchToProps) (HomeDownloadApp) 