import { useSelector } from "react-redux"
import { useState } from "react"
import styled from "styled-components";

import AddCourse from "../components/AddCourse.js";

export default function Home() {

  let {CORS} = useSelector(state => state);
  
  //22-07-10 HJW HELLO
  return (
    <div>
      {
        CORS.map(el => {
          return (
            <div id={el.id}>
              <div>제목 : {el.title}</div>
              <div>내용 : {el.content}</div>
              <div>
                <span>조회수 : {el.viewCnt}</span>
                <span>찜 : {el.select}</span>
              </div>
            </div>
          )
        })
      }
    <AddCourse/>
    </div>
  )
}

const ButtonWrap = styled.div`
width: 100px;
display: flex;
justify-content: space-between;
align-items: center;
margin: 50px auto;
`;