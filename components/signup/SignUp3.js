import styles from '../../styles/SignUp.module.scss';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function SignUp3({closeSignUp,nextStage,info}){

    const data = JSON.stringify(info);
    getPost({data});

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
                        <span className={styles.signUp__container__content__top__section__two__number} style={{backgroundColor:'rgb(253,73,12)'}}>2</span>
                        <span>본인인증</span>
                    </div>
                    <div className={styles.signUp__container__content__top__section__three}>
                        <span className={styles.signUp__container__content__top__section__three__number}  style={{backgroundColor:'rgb(253,73,12)'}}>3</span>
                        <span>완료</span>
                    </div>
                </div>


                <div className={styles.signUp__container__content__completeMessage}>
                    <span>회원가입이 완료되었습니다.</span>
                    <span>로그인 후 이용가능합니다.</span>
                </div>
                

                <div className={styles.signUp__container__content__nextBtn} onClick={nextStage} >
                    <span>로그인 하기</span>
                </div>
                <div onClick={closeSignUp} className={styles.signUp__container__content__button}>X</div>
            </div>
        </div>
    )
}

const getPost = async ({data}) => {

    const router = useRouter();

    let res;
    try {
      res = await axios.post(process.env.NEXT_PUBLIC_API_URL+'users/signup', data);
      console.log(res);
    } catch(err){
        console.log(res);
    }
}
