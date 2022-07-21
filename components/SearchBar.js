import styles from '../styles/Main.module.scss';

export default function SearchBar(){
    return (
    <>            
        <div className={styles.content}>
            <input className={styles.input} placeholder="검색어를 입력하세요"></input>
            <nav className={styles.filter}>
                <button>
                    <i className={styles.filter__item}>
                        필터아이템
                    </i>
                    
                </button>
            </nav>
        </div>    
    </>    
    )
}