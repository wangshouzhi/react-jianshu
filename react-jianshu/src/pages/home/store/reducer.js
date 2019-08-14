import {  fromJS } from 'immutable'

const defaultState = fromJS({
    acticleList: [{
        id:1,
        title: '我一个中专生的逆袭人生',
        contentText: '我从XX省电力学校毕业后，同大多数同学一样，顺理成章地进入工厂上班。没有高等学历，没有关系背景的优势，我从学员到班长的晋升路上，走了整整十年的...',
        imgUrl: '//upload-images.jianshu.io/upload_images/9049116-80fa9320d67310bb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
        id:2,
        title: '我一个中专生的逆袭人生',
        contentText: '我从XX省电力学校毕业后，同大多数同学一样，顺理成章地进入工厂上班。没有高等学历，没有关系背景的优势，我从学员到班长的晋升路上，走了整整十年的...',
        imgUrl: '//upload-images.jianshu.io/upload_images/9049116-80fa9320d67310bb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
        id:3,
        title: '我一个中专生的逆袭人生',
        contentText: '我从XX省电力学校毕业后，同大多数同学一样，顺理成章地进入工厂上班。没有高等学历，没有关系背景的优势，我从学员到班长的晋升路上，走了整整十年的...',
        imgUrl: '//upload-images.jianshu.io/upload_images/9049116-80fa9320d67310bb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
        id:4,
        title: '我一个中专生的逆袭人生',
        contentText: '我从XX省电力学校毕业后，同大多数同学一样，顺理成章地进入工厂上班。没有高等学历，没有关系背景的优势，我从学员到班长的晋升路上，走了整整十年的...',
        imgUrl: '//upload-images.jianshu.io/upload_images/9049116-80fa9320d67310bb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }
    ]
})

export const reducerName = (state = defaultState, action) => {
    switch (action.type) {
        // case 'ACTION_TYPE':
        //     return 
        default:
            return state
    }
}
export  default reducerName