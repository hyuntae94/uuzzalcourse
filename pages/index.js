import styled from "styled-components";

import AddCourse from "../components/AddCourse.js";
import ShowCourse from "../components/showCourse.js";

export default function Home() {

  //22-07-10 HJW HELLO

    return (
    <>
      <ShowCourse/>
      <AddCourse/>
    </>
  )
}

const ButtonWrap = styled.div`
width: 100px;
display: flex;
justify-content: space-between;
align-items: center;
margin: 50px auto;
`;