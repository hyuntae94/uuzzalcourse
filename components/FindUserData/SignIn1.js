import { useCallback, useEffect, useState } from 'react';
import styles from '../../styles/SignIn.module.scss';

export default function SignIn1({closeSignIn,nextStage}){

    const [password,setPassword] = useState('');
    const [passwordCheck,setPasswordCheck] = useState();

    const [passwordError, setPasswordError] = useState(false);

    const checkPasswordError = () => {
        if(password === passwordCheck) setPasswordError(true);
        else setPasswordError(false);
    }

    useEffect(()=>{
        checkPasswordError();
    },[passwordCheck])

    return (    
        <div className={styles.SignIn__container}>
            <div className={styles.SignIn__container__content}>
                <div className={styles.SignIn__container__content__top}>로그인</div>               
                <div className={styles.SignIn__container__content__emailContainer}>
                    <EmailInput/>

                </div>
                <div className={styles.SignIn__container__content__passwordContainer}>
                    <PwInput/>
                </div>
                
                <MethodDiv/>
                
                
          
                <div className={styles.SignIn__container__content__nextBtn} >
                    <span>로그인</span>
                </div>
               
                <div className={styles.SignIn__container__content__loginContainer}>
                    <span>SNS로 간편하게 시작하기</span>   
                    <div>
                        <span>네이버 </span>
                        <span>카카오 </span>
                        <span>구글 </span>
                        <span>애플 </span>                        
                    </div>
                    
                </div>
                <div className={styles.SignIn__container__content__signInBtn} onClick={nextStage} >
                        <span>회원가입</span>
                </div>
              
                
                <div onClick={closeSignIn} className={styles.SignIn__container__content__button}>X</div>
            </div>
        </div>
    )
}

function PwInput(){
    return (
        <input type={'password'} placeholder='비밀번호 입력' required/>
    )
}

function EmailInput() {
    return (
        <input type={'text'} placeholder='abcd@example.com' required />
    )
}

function MethodDiv() {
    return (
        //CSS 도통 ㅎㅎ..
        <div className={styles.signUp__container__content}>
            <input type="checkbox" /> 아이디 저장
            <button>아이디/비밀번호 찾기</button>   
        </div>    
    )
}

