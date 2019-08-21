import React, { Component } from 'react'
import './downloadApp.less'
import topLogo from './../../assets/images/applogo.png'
import backgroudLogo from './../../assets/images/misc-background.png'
import phoneLogo from './../../assets/images/misc-phone.png'
import appLogo from './../../assets/images/download-indexf.png'
import musicLogo from './../../assets/images/misc-pic.png'
class DownloadApp extends Component {
    render() {
        return(
            <div>
                <div className='download_app'>
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
                    <div className='download_app_bottom'></div>
                </div>
                <div className='download_app'>
                    <div className='container middle_part'>
                        <div className='text'>
                            <h3>轻松创作精美图文</h3>
                            <p>简单优雅的设计，可以一次上传多张图片、实时保存、多端同步，使创作分享更方便快捷</p>
                        </div>
                        <img className='logo' src={ musicLogo } alt=''></img>
                    </div>
                </div>
                <div className='download_app'>
                    <div className='container middle_part'>
                        <img className='logo_left' src='//cdn2.jianshu.io/assets/web/misc-pic2-378196f0f0c87fee66210c957722605c.png' alt=''></img>
                        <div className= 'text_left'>
                            <h3>多元化的创作社区</h3>
                            <h6>一篇短文、一首诗、一幅画，在这里，你的创作将得到全世界的赞赏</h6>
                        </div>
                    </div>
                </div>
                <div className='download_app'>
                    <div className='container middle_part'>
                        <span className= 'text_right'>
                            <h3>多元化的创作社区</h3>
                            <h6>一篇短文、一首诗、一幅画，在这里，你的创作将得到全世界的赞赏</h6>
                        </span>
                        <img className='logo_right' src='//cdn2.jianshu.io/assets/web/misc-pic2-378196f0f0c87fee66210c957722605c.png' alt=''></img>
                        
                    </div>
                </div>
            </div>
            
        )
    }
}
export default DownloadApp