import { useState } from "react";

import SingUpMain from "./SignUpMain.js";

export default function SingUpModal(){

    const [signUP, setSignUp] = useState(false);
    
    const signUpController = () => {
        setSignUp(!signUP);
    }

    return (
        <>
            <button onClick={signUpController}>회원가입</button>
            {
                signUP && <SingUpMain closeSignUp={signUpController}/>
            }
        </>
    )
}

