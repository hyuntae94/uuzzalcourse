import { useCallback, useEffect, useState } from 'react';
import styles from '../../styles/SignUp.module.scss';

export default function SignUp1({closeSignUp,nextStage}){

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
                    <input type={'text'} placeholder='이메일 입력' required></input>
                    <button>중복 확인</button>
                </div>
                <div className={styles.signUp__container__content__passwordContainer}>
                    <span>비밀번호</span>
                    <input type={'password'} placeholder='비밀번호 입력' onChange={(e) => {e.preventDefault(); setPassword(e.target.value)}} required/>
                    <input type={'password'} placeholder='비밀번호 확인'onChange={(e) => { e.preventDefault();setPasswordCheck(e.target.value)}} required></input>
                    {
                        passwordError && <check>v</check>
                    }
                </div>
                <div className={styles.signUp__container__content__nicknameContainer}>
                    <span>닉네임</span>
                    <input type={'text'} placeholder='닉네임 입력' required/>
                    <button>중복확인</button>
                </div>
                <div className={styles.signUp__container__content__nextBtn} onClick={nextStage}>
                    <span>다음</span>
                </div>
                <div onClick={closeSignUp} className={styles.signUp__container__content__button}>X</div>
            </div>
        </div>
    )
}