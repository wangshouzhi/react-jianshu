import React, { Component } from 'react'
import './../home.less'
import { connect } from 'react-redux'

class NewList extends Component {
    render() {
        const { acticleList } =this.props;
        return(
            <div className='newlist'>
                <ul className='newlist_ul'>
                    {
                        acticleList.map((item) => {
                            return (
                                <li key={item.get('id')}>
                                    <div className='newlist_content'>
                                        <h1>{item.get('title')}</h1>
                                        <p>{item.get('contentText')}</p>
                                        <div className='newlist_meta'>28</div>
                                    </div>
                                    <img className='newlist_img' src={item.get('imgUrl')} alt=''></img>
                                </li>

                            )
                        })
                    }
                    
                </ul>
            </div>
        )
    }
}
const mapState = (state) => ({
    acticleList: state.getIn(['home', 'acticleList'])
})

export default connect( mapState ) (NewList) 