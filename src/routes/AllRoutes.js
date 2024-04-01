import { Routes, Route } from "react-router-dom";
//import { useState } from "react";

import { Home,Cart,Contact,PageNotFound } from "../pages/index";

export const AllRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='cart' element={ <Cart /> } />
        <Route path='contact' element={ <Contact /> } />
        <Route path='*' element={ <PageNotFound /> } />
      </Routes>
  )
}
