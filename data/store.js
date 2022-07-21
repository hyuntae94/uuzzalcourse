import { configureStore, createSlice } from "@reduxjs/toolkit";


const CORS = createSlice({
    name : 'CORS',
    initialState : [
        {
            corsId: 0,
            title : '홍대 나만 알고 싶은 코스0',
            content:'점심식사 후 디저트까지 완벽한 조합',
            star : 5,
            viewCnt : 100,
            category : ['친구들과 함께','ENTP가 좋아하 만한 코스'],
            select : 15,
            hashTag : ['데이트','홍대','홍대입구역'],

        },
        {
            corsId: 1,
            title : '홍대 나만 알고 싶은 코스1',
            content:'점심식사 후 디저트까지 완벽한 조합',
            star : 5,
            viewCnt : 100,
            category : ['친구들과 함께','ENTP가 좋아하 만한 코스'],
            select : 15,
            hashTag : ['데이트','홍대','홍대입구역'],

        },
        {
            corsId: 2,
            title : '홍대 나만 알고 싶은 코스2',
            content:'점심식사 후 디저트까지 완벽한 조합',
            star : 5,
            viewCnt : 100,
            category : ['친구들과 함께','ENTP가 좋아하 만한 코스'],
            select : 15,
            hashTag : ['데이트','홍대','홍대입구역'],            img : '../pages/images/ex_pic.png',

        },
        {
            corsId: 3,
            title : '홍대 나만 알고 싶은 코스3',
            content:'점심식사 후 디저트까지 완벽한 조합',
            star : 5,
            viewCnt : 100,
            category : ['친구들과 함께','ENTP가 좋아하 만한 코스'],
            select : 15,
            hashTag : ['데이트','홍대','홍대입구역'],
        },
        {
            corsId: 4,
            title : '홍대 나만 알고 싶은 코스4',
            content:'점심식사 후 디저트까지 완벽한 조합',
            star : 5,
            viewCnt : 100,
            category : ['친구들과 함께','ENTP가 좋아하 만한 코스'],
            select : 15,
            hashTag : ['데이트','홍대','홍대입구역'],
        },
        {
            corsId: 5,
            title : '홍대 나만 알고 싶은 코스5',
            content:'점심식사 후 디저트까지 완벽한 조합',
            star : 5,
            viewCnt : 100,
            category : ['친구들과 함께','ENTP가 좋아하 만한 코스'],
            select : 15,
            hashTag : ['데이트','홍대','홍대입구역'],
        },
        {
            corsId: 6,
            title : '홍대 나만 알고 싶은 코스6',
            content:'점심식사 후 디저트까지 완벽한 조합',
            star : 5,
            viewCnt : 100,
            category : ['친구들과 함께','ENTP가 좋아하 만한 코스'],
            select : 15,
            hashTag : ['데이트','홍대','홍대입구역'],
        },
        {
            corsId: 7,
            title : '홍대 나만 알고 싶은 코스7',
            content:'점심식사 후 디저트까지 완벽한 조합',
            star : 5,
            viewCnt : 100,
            category : ['친구들과 함께','ENTP가 좋아하 만한 코스'],
            select : 15,
            hashTag : ['데이트','홍대','홍대입구역'],
        }
    ],
    reducers : {

    }
})


export default configureStore({
    reducer : {
        CORS : CORS.reducer,
    }
})