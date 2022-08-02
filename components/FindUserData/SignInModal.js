import { useState } from "react";

import SignInMain from "./SignInMain.js";

export default function SignInModal(){
    
    const [signIN, setSignIn] = useState(false);
    
    const signInController = () => {
        setSignIn(!signIN);
    }

    return (
        <>
            <button onClick={signInController}>로그인</button>
            {
                signIN && <SignInMain closeSignIn={signInController}/>
            }
        </>
    )
}

