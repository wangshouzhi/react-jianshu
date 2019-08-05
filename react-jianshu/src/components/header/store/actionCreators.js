import { actionTypes } from  './index'
import axios from 'axios'
import { fromJS } from 'immutable'
/** 
 * 本文件用的统一放到顶部
*/
const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data)
})

/**
 * 导出用的 (export)
 */
export const searchFocus = ()=> ({
    type: actionTypes.SEARCH_FOCUS
})
export const searchBlur = ()=> ({
    type: actionTypes.SEARCH_BLUR
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