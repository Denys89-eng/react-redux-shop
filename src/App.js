import './App.css';
import React, {useEffect} from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import AppRoutes from "./Components/AppRoutes/AppRoutes";
import Footer from "./Components/Footer/Footer";
import {useDispatch} from "react-redux";
import {getCategories} from "./redux/categories/categoriesSlice";
import {getProducts} from "./redux/products/productsSlice";


const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
        dispatch(getCategories())
    }, [dispatch])

    return (
        <div className="App">
            <Header/>
            <div className="container">
                <Sidebar/>
                <AppRoutes/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
