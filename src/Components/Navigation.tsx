import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { NewBookList } from "./NewBooksList";



export const Navigation = () => {

   // const navigate = useNavigate()

   return <>
      {/* <Header clickSearch={onSearchClick} /> */}
      <Routes>
         <Route path="newbooks">
            <Route index element={<NewBookList />} />
            {/* <Route path=":isbn13" element={<OneBookPage />} /> */}
         </Route>

      </Routes>
   </>
}