import React, { Component } from 'react'
import '../home.less'
import { Link } from 'react-router-dom'

class HomeDownloadApp extends Component {
    render() {
        return(
            <div className='home_download_app clearfix'>
                <Link to='/pages/downloadapp'>
                    <img className='img' src='//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' alt=''></img>
                    <div className="info">
                        <div className="title">下载简书手机App<i className="iconfont ic-link"></i></div>
                        <div className="description">随时随地发现和创作内容</div>
                    </div>
                </Link>
                <div className='down_app_mock'>
                    <img className='mock_img' src='//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' alt=''></img>
                </div>
            </div>
        )
    }
}

export default HomeDownloadApp