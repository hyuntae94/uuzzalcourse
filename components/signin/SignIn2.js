import styles from '../../styles/SignIn.module.scss';

export default function SignIn2({closeSignIn,nextStage}) {
    
    return (    
        <div className={styles.SignIn__container}>
            <div className={styles.SignIn__container__content}>
                <div className={styles.SignIn__container__content__top}>회원가입</div>
                <div className={styles.SignIn__container__content__top__section}>
                    <div className={styles.SignIn__container__content__top__section__one}>
                        <span className={styles.SignIn__container__content__top__section__one__number}>1</span>
                        <span>회원가입</span>
                    </div>
                    <div className={styles.SignIn__container__content__top__section__two}>
                        <span className={styles.SignIn__container__content__top__section__two__number} style={{backgroundColor:'rgb(253,73,12)'}} >2</span>
                        <span>본인인증</span>
                    </div>
                    <div className={styles.SignIn__container__content__top__section__three}>
                        <span className={styles.SignIn__container__content__top__section__three__number}>3</span>
                        <span>완료</span>
                    </div>
                </div>

                <div className={styles.SignIn__container__content__nameContainer}>
                    <span>이름</span>
                    <input type={'text'}  placeholder='이름 입력'></input>
                </div>

                <div className={styles.SignIn__container__content__identifyContainer}>
                    <span>주민등록번호</span>
                    <div className={styles.SignIn__container__content__identifyContainer__identify}>
                        <input type={'text'} placeholder='주민등록번호 앞 6자리'></input>
                        <span>-</span>
                        <input type={'text'}></input>
                        <span>●●●●●●</span>
                    </div>
                </div>

                <div className={styles.SignIn__container__content__phoneContainer}>
                    <span>휴대폰 인증</span>
                    <div>
                        <input placeholder='휴대폰 번호 인증'></input>
                        <button>인증요청</button>
                    </div>
                    <div>
                        <input placeholder='인증번호 입력'></input>
                        <button>확인</button>
                    </div>
                </div>

                <div className={styles.SignIn__container__content__nextBtn} onClick={nextStage}>
                    <span>다음</span>
                </div>
                <div onClick={closeSignIn} className={styles.SignIn__container__content__button}>X</div>
            </div>
        </div>
    )
}