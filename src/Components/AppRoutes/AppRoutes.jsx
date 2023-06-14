import React from "react";
import Home from "../Home/Home";
import {Route, Routes} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import SingleProducts from "../Products/SingleProducts";
import SingleCategory from "../Categories/SingleCategory";

const AppRoutes = () => {
    return(

        <Routes>
            <Route index element={<Home />}/>
            <Route path={ROUTES.PRODUCT} element={<SingleProducts />}/>
            <Route path={ROUTES.CATEGORY} element={<SingleCategory />}/>
        </Routes>
    )
}

export default AppRoutes