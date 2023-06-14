import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useGetProductsQuery} from "../../redux/api/apiSlice";
import styles from '../../styles/Category.module.css';
import Products from "../Products/Products";
import {useSelector} from "react-redux";
import {Button} from "react-bootstrap";

const Category = () => {
    const {id} = useParams();
    const {list}  = useSelector(({categories}) => categories)

    const defaultValues = {
        title: '',
        price_min: 0,
        price_max: 0,
    }

    const defaultParams = {
        categoryId: id,
        ...defaultValues,
    };

    const [cat, setCat] = useState('')
    const [values, setValues] = useState(defaultValues)
    const [params, setParams] = useState(defaultParams)

    useEffect(() => {
        if (!id) return;
        setParams({...defaultParams, categoryId: id})
    }, [id])

    const {data, isLoading, isSuccess} = useGetProductsQuery(params)

    const handleChange = ({target: {value, name}}) => {
        setValues({...values, [name]: value})
    }

    useEffect(() => {
        if (!id || !list.length) return;
        const {name} = list.find((item) => item.id === id * 1)
        setCat(name)
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()

        setParams({ ...defaultParams, ...values})
    }

    return (
        <section className={styles.wrapper}>
            <h1>{cat}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        name='title'
                        placeholder='Product name'
                        onChange={handleChange}
                        type="text"
                        value={values.title}
                    />
                </div>
                <div>
                    <input
                        name='price_max'
                        placeholder='0'
                        onChange={handleChange}
                        type="text"
                        value={values.price_min}
                    />
                </div>
                <div>
                    <input
                        name='price_min'
                        placeholder='0'
                        onChange={handleChange}
                        type="text"
                        value={values.price_max}
                    />
                </div>


                <div>
                    <Button
                        type={"submit"}
                        onClick={handleSubmit}
                    >
                        Search
                    </Button>
                </div>
            </form>

            {isLoading ? (
                <div>Loading...</div>
            ) : !isSuccess || !data.length ? (
                <div>
                    <span>No result</span>
                    <button>Reset</button>
                </div>
            ) : (
                <Products title='' products={data} amount={5}
                />
            )}
        </section>
    )
}


export default Category