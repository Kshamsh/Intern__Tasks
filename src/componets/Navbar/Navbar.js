import React from 'react'
import styles from "./Navbar.module.scss"

const Navbar = ({active,setActive}) => {
    return(
        <div className={styles.navbar}>
            <img src="../assets/hamburger-menu.svg" alt="" className={`${styles.burger} ${active === false ? styles.active : ""}`} 
            onClick={() => setActive(!active)}/>
        </div>
    )
}

export default Navbar