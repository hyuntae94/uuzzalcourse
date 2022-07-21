import styles from '../../styles/SignIn.module.scss';

export default function SignIn3({closeSignIn}){
    
    return (    
        <div className={styles.SignIn__container}>
            <div className={styles.SignIn__container__content}>
                <div className={styles.SignIn__container__content__top}>회원가입</div>
                <div className={styles.SignIn__container__content__top__section}>
                    <div className={styles.SignIn__container__content__top__section__one}>
                        <div className={styles.SignIn__container__content__top__section__one__number}>
                            <span>1</span>
                        </div>
                        <span className={styles.SignIn__container__content__top__section__one__title}>회원가입</span>
                    </div>
                    <div className={styles.SignIn__container__content__top__section__two}>
                        <span className={styles.SignIn__container__content__top__section__two__number} style={{backgroundColor:'rgb(253,73,12)'}}>2</span>
                        <span>본인인증</span>
                    </div>
                    <div className={styles.SignIn__container__content__top__section__three}>
                        <span className={styles.SignIn__container__content__top__section__three__number}  style={{backgroundColor:'rgb(253,73,12)'}}>3</span>
                        <span>완료</span>
                    </div>
                </div>


                <div className={styles.SignIn__container__content__completeMessage}>
                    <span>회원가입이 완료되었습니다.</span>
                    <span>로그인 후 이용가능합니다.</span>
                </div>
                

                <div className={styles.SignIn__container__content__nextBtn}>
                    <span>로그인 하기</span>
                </div>
                <div onClick={closeSignIn} className={styles.SignIn__container__content__button}>X</div>
            </div>
        </div>
    )
}