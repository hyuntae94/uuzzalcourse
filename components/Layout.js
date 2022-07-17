import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Main.module.scss';
import SideBar from './SideBar.js';


export default function Layout({children}){
    return (
    <>
        <Head>
            <title>어쩔코스</title>
        </Head>
        
        <div className={styles.main}>
            
            <div className={styles.sidebar} >
                <SideBar/>
            </div>
            
            <div className={styles.content}>
            <input className={styles.input} placeholder="검색어를 입력하세요"></input>
            <nav className={styles.filter}>
                <button>
                    <i className={styles.filter__item}>
                        필터아이템
                    </i>
                    
                </button>
            </nav>
                {children}
            </div>
            <div className={styles.map}></div>
        </div>
    
    </>
    
    )
}