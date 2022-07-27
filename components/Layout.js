import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Main.module.scss";
import SideBar from "./SideBar.js";
import SearchBar from "./SearchBar.js";

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.main}>
        
        <div className={styles.sidebar}>
          <SideBar />
        </div>

        <div className={styles.content}>{children}</div>
        
        <div className={styles.map}></div>

      </div>
    </>
  );
}
