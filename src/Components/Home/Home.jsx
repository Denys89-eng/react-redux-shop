import React, {useEffect} from "react";
import Products from "../Products/Products";
import {useDispatch, useSelector} from "react-redux";
import Categories from "../Categories/Categories";
import {filterByPrice} from "../../redux/products/productsSlice";
import Poster from "../Poster/Poster";
import styles from '../../styles/Home.module.css'

const Home = () => {
    const dispatch = useDispatch()
    const {products: {list, filtered}, categories} = useSelector((state) => state)





    useEffect(() => {
        if (!list.length) return;
        dispatch(filterByPrice(100));
    }, [dispatch, list.length])

    return (
        <div className={styles.home}>
            <Poster />
            <Products products={list} amount={5}  name='Trending'/>
            <Categories products={categories.list} amount={5} name='Categories'/>
            <Products products={filtered} amount={5} name='gooood'/>
        </div>
    )
}

export default Home
