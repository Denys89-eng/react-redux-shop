import React from "react";
import {Link} from "react-router-dom";
import styles from '../../styles/Products.module.css'

const Products = ({products = [], amount, name}) => {
    const list = products.filter((_, i) => i < amount)

    return (
        <section className={styles.section}>
            <h2>{name}</h2>

            <div className={styles.products}>
                {list.map(({id, title, price}) => (
                            <Link to={`/products/${id}`} className={styles.link} key={id} >
                                <div className={styles.wrap}>
                                  <h1>
                                      {title}
                                  </h1>
                                  <h2>{price}</h2>
                                </div>
                            </Link>
                 ))}
            </div>

        </section>
    )
}


export default Products