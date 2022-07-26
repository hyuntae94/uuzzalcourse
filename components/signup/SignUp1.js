import axios from 'axios';
import React ,{ useCallback, useEffect, useState } from 'react';
import styles from '../../styles/SignUp.module.scss';

export default function SignUp1({closeSignUp,nextStage,info,changeEmail,changePW,changePWCheck,changeNickname}){

    const {username,password,passwordCheck,nickname} = info;


    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [nickNameError, setNicknameError] = useState(false);

    const validateEmail = async () => {
        const data = {
            username : username,
            nickname : nickname
        }
       
        try{
            const res = await axios.get('http://54.180.30.117:8080/ping',data)
            if (res.status === 200) setEmailError(true);
        } catch(error){
            console.error(error);
            alert('중복된 이메일 입니다.')
        }
    }
    
    const checkPasswordError = () => {
        if(password === passwordCheck && password && passwordCheck) setPasswordError(true);
        else setPasswordError(false);
    }

    const checkNicknameError = () => {
        if(!nickname) alert('닉네임을 입력해주세요!');
        else setNicknameError(true);
     }

    const checkNextStage = () => {
        emailError && passwordError && nickNameError
        ? nextStage()
        : alert('모든 항목을 올바르게 입력해주세요!')
    }

    useEffect(()=>{
        checkPasswordError();
    },[passwordCheck])

    return (    
        <div className={styles.signUp__container}>
            <div className={styles.signUp__container__content}>
                <div className={styles.signUp__container__content__top}>회원가입</div>
                <div className={styles.signUp__container__content__top__section}>
                    <div className={styles.signUp__container__content__top__section__one}>
                        <div className={styles.signUp__container__content__top__section__one__number}>
                            <span>1</span>
                        </div>
                        <span className={styles.signUp__container__content__top__section__one__title}>회원가입</span>
                    </div>
                    <div className={styles.signUp__container__content__top__section__two}>
                        <span className={styles.signUp__container__content__top__section__two__number}>2</span>
                        <span>본인인증</span>
                    </div>
                    <div className={styles.signUp__container__content__top__section__three}>
                        <span className={styles.signUp__container__content__top__section__three__number}>3</span>
                        <span>완료</span>
                    </div>
                </div>
                <div className={styles.signUp__container__content__emailContainer}>
                        <span>아이디(이메일)</span>
                        <EmailInput changeEmail={changeEmail}/>
                        <button onClick={validateEmail}>중복 확인</button>
                        {
                            emailError && <div style={{'color':'rgb(103,214,140)','fontSize':'8px'}}>사용가능한 이메일입니다.</div>
                        }
                </div>
                <div className={styles.signUp__container__content__passwordContainer}>
                    <span>비밀번호</span>
                    <PwInput changePW={changePW} />
                    <PwCheckInput changePWCheck={changePWCheck} />
                    {
                        passwordError && <check>v</check>
                    }
                </div>
                <div className={styles.signUp__container__content__nicknameContainer}>
                    <span>닉네임</span>
                    <NickNameInput changeNickname={changeNickname}/>
                    <button onClick={checkNicknameError}>중복확인</button>
                    {
                            nickNameError && <div style={{'color':'rgb(103,214,140)','fontSize':'8px'}}>사용가능한 닉네임입니다.</div>
                    }
                </div>
                <div className={styles.signUp__container__content__nextBtn} onClick={checkNextStage}>
                    <span>다음</span>
                </div>
                <div onClick={closeSignUp} className={styles.signUp__container__content__button}>X</div>
            </div>
        </div>
    )
}

function EmailInput({changeEmail}) {
    return (
        <input type={'text'} placeholder='abcd@example.com' onChange={changeEmail} required />
    )
}
function PwInput({changePW}){
    return (
        <input type={'password'} placeholder='비밀번호 입력' onChange={changePW} required/>
    )
}

function PwCheckInput({changePWCheck}){
    return (
        <input type={'password'} placeholder='비밀번호 확인'onChange={changePWCheck} required  />
    )
}
function NickNameInput({changeNickname}){
    return (
        <input type={'text'} placeholder='닉네임 입력' onChange={changeNickname} required/>
    )
}

