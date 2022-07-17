import { useState } from "react";

export default function SingUp(){

    const [signUP, setSignUp] = useState(false)

    const signUpController = () => {
        setSignUp(!signUP);
    }

    return (
        <div>
            <button onClick={signUpController}>회원가입</button>
            {
                signUP && <ShowSignUp closeSignUp={signUpController}/>
            }
        </div>
    )
}

function ShowSignUp({closeSignUp}){
    return (
        <div className="signUp__container">
            <div className="signUp__content">
                <div>lala</div>
                <button onClick={closeSignUp}>X</button>
            </div>
        </div>
    )
}