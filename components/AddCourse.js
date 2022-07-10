import { useState } from "react"
import style from '../styles/AddCourseModal.module.scss';

export default function AddCourse(){
    
    const [modalOpen, setModalOpen] = useState(false);
    const modalClose = () => {
        setModalOpen(!modalOpen);
    }
    return (
        <>
            <button onClick={modalClose}>+</button>
            {modalOpen && <Modal modalClose={modalClose}></Modal>}
        </>
    )
}

function Modal({modalClose}){
    return (
        <>
            <div className={style.modal__container}>
                <div className={style.modal}>
                    <button className={style.modal__button} onClick={modalClose}>X</button>
                    <div>제목부분</div>
                    <div>카테고리부분</div>
                    <div>사진부분</div>
                    <div>위치검색부분</div>
                    <div>해시태크부분</div>
                    <div>장소부분</div>
                    <button>저장</button>
                </div>
            </div>
        </>
    )
}