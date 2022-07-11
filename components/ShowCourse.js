import { useSelector } from "react-redux";

export default function ShowCourse() {
  const { CORS } = useSelector((state) => state);

  return (
    <div>
      {CORS.map((el) => {
        return (
          <div id={el.id}>
            <div>제목 : {el.title}</div>
            <div>내용 : {el.content}</div>
            <div>
              <span>조회수 : {el.viewCnt}</span>
              <span>찜 : {el.select}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}