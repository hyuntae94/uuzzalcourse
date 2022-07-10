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
            <div className={styles.sidebar}>
                <SideBar/>
            </div>
            <div className={styles.content}>
                    {children}
            </div>
            <div className={styles.map}></div>
        </div>
    
    </>
    
    )
}