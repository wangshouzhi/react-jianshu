import { actionTypes } from  './index'
import axios from 'axios'
import { fromJS } from 'immutable'
/** 
 * 本文件用的统一放到顶部
*/
const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
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

export const handleMouse = ()=> ({
    type: actionTypes.HANDEL_MOUSE
})

export const handleLeave = ()=> ({
    type: actionTypes.HANDLE_LEAVE
})

export const handleChangePage = (page)=> ({
    type: actionTypes.CHANGE_PAGE,
    page
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