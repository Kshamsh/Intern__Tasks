import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./SidebarComp.module.scss"

const SidebarComp = ({name,svg,id,active,link}) => {
    return(
        <Link to = {link} className={styles.content}>
        <li className={`${styles.list} ${active === false ? styles.active : ""}`} key={id}>
            <img className={styles.svg} src={svg} alt=""/>
            {name}
        </li>
        </Link>
    )
}

export default SidebarComp