import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useGetProductQuery} from "../../redux/api/apiSlice";
import {ROUTES} from "../../utils/routes";
import Product from "./Product";
import Products from "./Products";
import { useSelector} from "react-redux";
import styles from '../../styles/SingleProduct.module.css'
const SingleProducts = () => {
    const {products: {filtered}} = useSelector((state) => state)
    const {id} = useParams();
    const navigate = useNavigate();
    const {data, isLoading, isFetching, isSuccess} = useGetProductQuery({id})

    useEffect(() => {
        if (!isFetching && !isLoading && !isSuccess) {
            navigate(ROUTES.HOME);
        }
    })

    return !data ? (
        <>
            Loading...
        </>
    ) : (
        <div className={styles.wrap}>
            <Product {...data}/>
            <Products  products={filtered} amount={5} name='gooood'/>
        </div>
    )
}

export default SingleProducts