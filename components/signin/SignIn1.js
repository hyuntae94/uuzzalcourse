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
                    <input type={'text'} placeholder='이메일을 입력하세요' required></input>                    
                </div>
                <div className={styles.SignIn__container__content__passwordContainer}>
                    <input type={'password'} placeholder='비밀번호를 입력하세요' onChange={(e) => {e.preventDefault(); setPassword(e.target.value)}} required/>                    
                </div>
                <div>
                    <input type="checkbox" /> 아이디 저장
                    <button>아이디/비밀번호 찾기</button>   
                </div>
                
                
          
                <div className={styles.SignIn__container__content__nextBtn} onClick={nextStage}>
                    <span>로그인</span>
                </div>
                <div className={styles.SignIn__container__content__completeMessage}>
                    <button>SNS로 간편하게 시작하기</button>   
                    <div>
                        <button>Naver</button> 
                        <button>Kakao</button> 
                        <button>Google</button> 
                        <button>Apple</button> 
                    </div>
                    <span>회원가입</span>                    
                </div>
                
                <div onClick={closeSignIn} className={styles.SignIn__container__content__button}>X</div>
            </div>
        </div>
    )
}