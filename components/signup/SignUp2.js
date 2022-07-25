import { useCallback, useState } from 'react';
import styles from '../../styles/SignUp.module.scss';

export default function SignUp2({closeSignUp,nextStage}) {
    
    const [name, setName] = useState('');
    const [rrn, setRrn] = useState();
    const [backRrn, setBackRrn] = useState();
    const [phone, setPhone] = useState();

    const changeName = useCallback((e)=>{
        setName(e.target.value)
    },[name])

    const changeRrn = useCallback((e)=>{
        setRrn(e.target.value)
    },[rrn])

    const changeBackRrn = useCallback((e)=>{
        setBackRrn(e.target.value);
    },[backRrn])

    const changePhone = useCallback((e)=>{
        setPhone(e.target.value);
    },[phone])

    return (    
        <div className={styles.signUp__container}>
            <div className={styles.signUp__container__content}>
                <div className={styles.signUp__container__content__top}>회원가입</div>
                <div className={styles.signUp__container__content__top__section}>
                    <div className={styles.signUp__container__content__top__section__one}>
                        <span className={styles.signUp__container__content__top__section__one__number}>1</span>
                        <span>회원가입</span>
                    </div>
                    <div className={styles.signUp__container__content__top__section__two}>
                        <span className={styles.signUp__container__content__top__section__two__number} style={{backgroundColor:'rgb(253,73,12)'}} >2</span>
                        <span>본인인증</span>
                    </div>
                    <div className={styles.signUp__container__content__top__section__three}>
                        <span className={styles.signUp__container__content__top__section__three__number}>3</span>
                        <span>완료</span>
                    </div>
                </div>

                <div className={styles.signUp__container__content__nameContainer}>
                    <span>이름</span>
                    <NameInput changeName={changeName}/>
                </div>

                <div className={styles.signUp__container__content__identifyContainer}>
                    <span>주민등록번호</span>
                    <div className={styles.signUp__container__content__identifyContainer__identify}>
                        <RrnInput changeRrn={changeRrn}/>
                        <span>-</span>
                        <BackRrnInput changeBackRrn={changeBackRrn}/>
                        <span>●●●●●●</span>
                    </div>
                </div>

                <div className={styles.signUp__container__content__phoneContainer}>
                    <span>휴대폰 번호 입력</span>
                    <div>
                        <PhoneInput changePhone={changePhone}/>
                    </div>
                </div>

                <div className={styles.signUp__container__content__nextBtn} onClick={nextStage}>
                    <span>다음</span>
                </div>
                <div onClick={closeSignUp} className={styles.signUp__container__content__button}>X</div>
            </div>
        </div>
    )
}

function NameInput({changeName}){
    return <input type={'text'}  placeholder='이름 입력' onChange={changeName} required/>
}

function RrnInput({changeRrn}){
    return <input type={'text'} placeholder='주민등록번호 앞 6자리' onChange={changeRrn}  required/>
}

function BackRrnInput({changeBackRrn}){
    return <input type={'text'} onChange={changeBackRrn} required/>
}

function PhoneInput({changePhone}){
    return  <input placeholder='휴대폰 번호 입력' onChange={changePhone} required/>
}
