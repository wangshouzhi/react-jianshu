import { actionTypes } from  './index'
import axios from 'axios'

import { fromJS } from 'immutable'

export const searchFocus = ()=> ({
    type: actionTypes.SEARCH_FOCUS
})
export const searchBlur = ()=> ({
    type: actionTypes.SEARCH_BLUR
})
const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data)
})

export const getAjaxList= ()=> {
    return (dispath)=> {
      console.log("111")
      axios.get('/api/headerList.json').then((res)=> {
         console.log(res)
         dispath(changeList(res.data.data))
      }).catch((error)=> {
         console.log(error)
      })
    }
}