import { useState } from "react"
import style from '../styles/AddCourseModal.module.scss';
import AddCourse from "./AddCourse.js";

export default function Login(){

    
    const [modalOpen, setModalOpen] = useState(false);
    const modalClose = () => {
        setModalOpen(!modalOpen);
    }
    return (
        <div>            
            {modalOpen && <Modal modalClose={modalClose}></Modal>}
            <button onClick={modalClose}>로그인</button>            
        </div>  
    )
}

function Modal({modalClose}){

    const modal__container__close = (e) => {
        if (e.target === e.currentTarget){
            modalClose();
        }
    }

    return (
        <>
            <div className={style.modal__container} onClick={modal__container__close}>
                <div className={style.modal}>
                    <button className={style.modal__button} onClick={modalClose}>X</button>
                    <div>로그인 및 회원가입 후 이용해주세요.</div>
                    <button>로그인 및 회원가입</button>
                </div>
            </div>
        </>
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