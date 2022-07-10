import { configureStore, createSlice } from "@reduxjs/toolkit";


const CORS = createSlice({
    name : 'CORS',
    initialState : [
        {
            corsId: 0,
            title : '홍대 나만 알고 싶은 코스',
            content:'점심식사 후 디저트까지 완벽한 조합',
            star : 5,
            viewCnt : 100,
            category : ['친구들과 함께','ENTP가 좋아하 만한 코스'],
            select : 15,
        },
        {
            corsId: 1,
            title : '홍대 나만 알고 싶은 코스',
            content:'점심식사 후 디저트까지 완벽한 조합',
            star : 5,
            viewCnt : 100,
            category : ['친구들과 함께','ENTP가 좋아하 만한 코스'],
            select : 15,
        },
        {
            corsId: 2,
            title : '홍대 나만 알고 싶은 코스',
            content:'점심식사 후 디저트까지 완벽한 조합',
            star : 5,
            viewCnt : 100,
            category : ['친구들과 함께','ENTP가 좋아하 만한 코스'],
            select : 15,
        },
        {
            corsId: 3,
            title : '홍대 나만 알고 싶은 코스',
            content:'점심식사 후 디저트까지 완벽한 조합',
            star : 5,
            viewCnt : 100,
            category : ['친구들과 함께','ENTP가 좋아하 만한 코스'],
            select : 15,
        },
        {
            corsId: 4,
            title : '홍대 나만 알고 싶은 코스',
            content:'점심식사 후 디저트까지 완벽한 조합',
            star : 5,
            viewCnt : 100,
            category : ['친구들과 함께','ENTP가 좋아하 만한 코스'],
            select : 15,
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