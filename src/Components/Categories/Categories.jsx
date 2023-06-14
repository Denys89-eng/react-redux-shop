import React from "react";
import {Link} from "react-router-dom";
import styles from '../../styles/Categories.module.css'
const Categories = ({products = [], amount, name}) => {
    const list = products.filter((_, i) => i < amount)

    return(
        <section className={styles.section}>

                {list.map(({id, name}) => (
                    <Link
                        className={styles.item}
                        to={`/categories/${id}`}>

                        <div className={styles.title}>
                            {name}
                        </div>

                    </Link>
                ))}
        </section>
    )
}

export default Categories