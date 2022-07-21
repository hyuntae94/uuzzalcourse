import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Main.module.scss';
import SideBar from './SideBar.js';
import SearchBar from './SearchBar.js';


export default function Layout({children}){
    return (
    <>
        <Head>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>어쩔코스</title>
        </Head>
        
        <div className={styles.main}>
            
            <div className={styles.sidebar} >
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