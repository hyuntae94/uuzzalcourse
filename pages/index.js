import styled from "styled-components";

import AddCourse from "../components/AddCourse.js";
import ShowCourse from "../components/showCourse.js";
import Login from "../components/login.js";

export default function Home() {

    return (
    <>
      <ShowCourse/>
      <AddCourse/>
      <Login/>
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