import React from "react";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import styles from '../../styles/Sidebar.module.css'

const Sidebar = () => {
    const {list} = useSelector(({categories}) => categories)

    return (
        <section className={styles.section}>
            <ul className={styles.ul}>

                {
                    list.map(({id, name}) => (
                        <li className={styles.li}
                            key={id}>
                            <NavLink className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}` } to={`/categories/${id} ? `}>{name}</NavLink>
                        </li>
                    ))

                }

            </ul>
        </section>
    )
}

export default Sidebar