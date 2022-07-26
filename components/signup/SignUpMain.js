import { useState } from "react"

import SignUp1 from "./SignUp1.js";
import SignUp2 from "./SignUp2.js";
import SignUp3 from "./SignUp3.js";

import SignIn1 from "../signin/SignIn1.js"

export default function SingUpMain({closeSignUp}){
    
    const [stage, setStage] = useState(1);

    const nextStage = () => {
        if (stage === 1) setStage(2);
        else if (stage === 2) setStage(3);
        else if (stage === 3) setStage(4);
    }

    const [info,setInfo] = useState({
        username:'',
        password:'',
        passwordCheck:'',
        nickname:'',
        phoneNumber:'',
        gender:'',
    })

    const changeEmail = (e) =>{
        setInfo({...info, username: e.target.value});
    }

    const changePW = (e) =>{
        setInfo({...info, password: e.target.value});
    }

    const changePWCheck = (e) =>{
        setInfo({...info, passwordCheck: e.target.value});
    }

    const changeNickname = (e)=>{
        setInfo({...info, nickname: e.target.value});
    }

    const changeBackRrn = (e)=>{
        if (Number(e.target.value) === 1 || Number(e.target.value) === 3){
            setInfo({...info, gender: 'male'});
        } else if (Number(e.target.value) === 2 || Number(e.target.value) === 4){
            setInfo({...info, gender: 'female'});
        }
    }

    const changePhone = (e)=>{
        setInfo({...info, phoneNumber: e.target.value});
    }
    
    if(stage === 1) return <SignUp1 
        closeSignUp={closeSignUp} 
        nextStage={nextStage} 
        info={info} 
        changeEmail={changeEmail}
        changePW={changePW}
        changePWCheck={changePWCheck}
        changeNickname={changeNickname}/>
    
    else if (stage === 2) return <SignUp2 
        closeSignUp={closeSignUp} 
        nextStage={nextStage}
        changeBackRrn={changeBackRrn}
        changePhone={changePhone}
        />
    else if (stage === 3) return <SignUp3 
        closeSignUp={closeSignUp} 
        info={info}
        nextStage={nextStage}/>
    else if (stage === 4) return <SignIn1 closeSignIn={closeSignUp}/>
}