import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AuthorList extends Component {
    render() {
        return(
            <div className='authorlist'>
                <Link to='/' className='advertising'>
                    <img className='authorlist_top_img' src='https://oimageb2.ydstatic.com/image?id=6887620750791615464&product=adpublish&w=1280&h=720&sc=0&rm=2&gsb=0&gsbd=60' alt=''></img>
                    <span className='authorlist_text'>广告</span> 
                </Link>
                <div className='authorlist_content'>
                    <div className='authorlist_title'>
                        <p>推荐作者</p>
                        <span > 换一批</span>
                    </div>
                    <ul className='list'>
                        <li>
                            <img src='//upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' alt=''></img>
                            <div className='list_content'>
                                <div className='authors'>
                                    <p>卢璐说</p>
                                    <span>关注</span>
                                </div>
                                <p>写了1187.3k字 · 25k喜欢</p>
                            </div>
                        </li>
                    </ul>
                    <Link to='/'>查看全部</Link>
                </div>
                <Link to='/' className='advertising'>
                    <img className='authorlist_bottom_img' src='https://oimagea6.ydstatic.com/image?id=2900704660974169353&product=adpublish&w=1280&h=720&sc=0&rm=2&gsb=0&gsbd=60' alt=''></img>
                    <span className='authorlist_text'>广告</span>
                </Link>
            </div>
        )
    }
}

export default AuthorList