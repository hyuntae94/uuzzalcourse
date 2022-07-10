import styles from '../styles/SideBar.module.scss';
import Link from 'next/link';

export default function SideBar(){
    return (
        <>
            <div className={styles.logoContainer}>
                <div className={styles.logo}></div>
            </div>
            <div className={styles.iconContainer}>
                <Link href='/'>
                    <div className={styles.iconHome}>Home</div>
                </Link>
            </div>
            <div className={styles.optionContainer}>
                <Link href='/bucket'>
                    <div className={styles.option_busket}></div>
                </Link>
                <Link href='/alarm'>
                    <div className={styles.option_alarm}></div>
                </Link>
                <Link href='/profile'>
                    <div className={styles.optin_profile}>
                        프로필
                    </div>
                </Link>
            </div>
        </>
    )
}