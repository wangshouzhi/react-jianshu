import {  fromJS } from 'immutable'
import { actionTypes } from './index'
import imgList from '../../../assets/images/list.jpg'

const defaultState = fromJS({
    acticleList: [{
        id:1,
        title: '我一个中专生的逆袭人生',
        contentText: '我从XX省电力学校毕业后，同大多数同学一样，顺理成章地进入工厂上班。没有高等学历，没有关系背景的优势，我从学员到班长的晋升路上，走了整整十年的...',
        imgUrl: imgList
    },
    {
        id:2,
        title: '我一个中专生的逆袭人生',
        contentText: '我从XX省电力学校毕业后，同大多数同学一样，顺理成章地进入工厂上班。没有高等学历，没有关系背景的优势，我从学员到班长的晋升路上，走了整整十年的...',
        imgUrl: imgList
    },
    {
        id:3,
        title: '我一个中专生的逆袭人生',
        contentText: '我从XX省电力学校毕业后，同大多数同学一样，顺理成章地进入工厂上班。没有高等学历，没有关系背景的优势，我从学员到班长的晋升路上，走了整整十年的...',
        imgUrl: imgList
    },
    {
        id:4,
        title: '我一个中专生的逆袭人生',
        contentText: '我从XX省电力学校毕业后，同大多数同学一样，顺理成章地进入工厂上班。没有高等学历，没有关系背景的优势，我从学员到班长的晋升路上，走了整整十年的...',
        imgUrl: imgList
    }],
    downAppShow: false
})

export const reducerName = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.DOWN_APP_FOCUS:
            return state.set("downAppShow", true);
        case actionTypes.DOWN_APP_BLUR:
            return state.set("downAppShow", false);
        default:
            return state
    }
}
export  default reducerName