import React from 'react';
import SidebarComp from '../SidebarComp/SidebarComp'
import styles from "./Sidebar.module.scss"


const Sidebar = ({items, active }) => {
    
    return(
            <div className={styles.list}>
                {items.map(item => (<SidebarComp 
                    name = {item.name}
                    svg = {item.svg}
                    key = {item.id}
                    active ={active}
                    link = {item.link}
                />))}
            </div>
    )
}

export default Sidebar