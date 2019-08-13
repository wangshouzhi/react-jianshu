import React, { Component } from 'react'
import './../home.less'

class Banner extends Component {
    render() {
        return(
            <div className='banner_container'>
                <img className='banner_img' src='http://upload.jianshu.io/admin_banners/web_images/4686/b205842c3dd6736c233b052411fe1211f164fcaf.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt=''></img>
            </div>
        )
    }
}

export default Banner