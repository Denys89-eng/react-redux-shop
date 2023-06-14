import React, {useEffect, useState} from "react";
import styles from '../../styles/SingleProduct.module.css'
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";

const sizes = ['4', '5', '5.5']

const Product = ({title, description, price, images}) => {
    const [currentImage, setCurrentImage] = useState()
    const [currentSize, setCurrentSize] = useState()

    useEffect(() => {
        if (!images.length) return;
        setCurrentImage(images[0])
    }, [images])

    return (
        <section className={styles.product}>
            <Link to={ROUTES.HOME}>Return to store</Link>

            <div className={styles.images}>
                <div
                    className={styles.current}
                    style={{background: `url(${currentImage}) center/cover`}}
                />

                <div className={styles['image-list']}>
                    {images.map((image, i) => (
                        <div
                            key={i}
                            className={styles.image}
                            style={{background: `url(${image}) center/cover`}}
                            onClick={() => setCurrentImage(image)}
                        />
                    ))}
                </div>
            </div>
            <div>
                {sizes.map((elem, id) => (
                    <button
                        onClick={() => setCurrentSize(elem)}
                        className={`${styles.size} ${currentSize === elem ? styles.active : ''}`}
                        key={id}
                        value={elem}
                    >{elem}
                    </button>
                ))}
            </div>
            <h2>{title}</h2>
            <i>{description}</i>
            <h3>{price} <i>$</i></h3>
            <button disabled={!currentSize}>Add in Cart</button>
            <button>Add in favourite</button>
        </section>
    )
}

export default Product