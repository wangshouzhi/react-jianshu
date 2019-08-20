import React, { Component } from 'react'
import './downloadApp.less'
import topLogo from './../../assets/images/applogo.png'
import backgroudLogo from './../../assets/images/misc-background.png'
import phoneLogo from './../../assets/images/misc-phone.png'
import appLogo from './../../assets/images/download-indexf.png'
class DownloadApp extends Component {
    render() {
        return(
            <div className='container top-part'>
                <span className='top_logo'>
                    <img className='logo' src={ topLogo } alt=''></img>
                    <div className='text'>
                        <span>创作你的创作</span>
                        <p>一个优质创作社区</p>
                    </div>
                </span>
                <img className='app_backgroud' src={ backgroudLogo } alt=''></img>
                <span className='app_qucode'>
                    <img className='phone' src={ phoneLogo } alt=''></img>
                    <div className='code_right'>
                        <img src={ appLogo } alt=''></img>
                        <p>扫码下载简书App</p>
                        <span>随时随地发现和创作内容</span>
                    </div>
                </span>
            </div>
        )
    }
}
export default DownloadApp