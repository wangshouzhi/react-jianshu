import React, { PureComponent } from 'react'
import './backTop.less'
class BackTop extends PureComponent {
    render() {
        return(
            <div className='back_top' onClick={ ()=> this.handleScrollTop() }>
                <p>返回顶部</p> 
            </div>
        )
    }
    handleScrollTop() {
        console.log('11')
        window.scrollTo(0,0)
    }
}

export default BackTop