import { useSelector } from "react-redux"
import { useState } from "react"


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
    </div>
  )
}
