import React, {useState} from "react";
import {useGetProductsQuery} from "../../redux/api/apiSlice";
import styles from '../../styles/Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    const [searchValue, setSearchValue] = useState('')


    const {data, isLoading} = useGetProductsQuery({title: searchValue})
    console.log(data)
    const handleSearch = ({target: {value}}) => {
        setSearchValue(value)
   }

    return(
        <header className={styles.header}>

            <form className={styles.form}>
                <input
                    className={styles.input}
                    type="search"
                    name='search'
                    placeholder='Search for anything...'
                    autoComplete='off'
                    onChange={handleSearch}
                    value={searchValue}
                />
                {searchValue.length > 2 && <div className={styles.box}>
                    {isLoading ? 'Loading...' : !data.length ? 'No results' : (
                        data.map(({title, id, images}) => (
                            <Link className={styles.link} to={`/products/${id}`}>
                                <div
                                    className={styles.image}
                                    style={{background: `url(${images[0]}) center center/cover no-repeat`}}/>
                                <div>{title}</div>
                            </Link>
                        ))
                    )}
                </div>}
            </form>



        </header>
    )
}

export default Header