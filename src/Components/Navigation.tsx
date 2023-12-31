import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { NewBookList } from "./NewBooksList";
import { OneBookPage } from "./OneBookPage";
import { Header } from "./Header";
import { FoundBooksList } from "./FoundBooksList";
import { Box } from "@mui/material";
import { Footer } from "./Footer";



export const Navigation = () => {

   // const navigate = useNavigate()

   return <Box sx={{boxSizing: 'border-box'}}>
      <Header />
      <Routes>
         <Route path="/">
            <Route index element={<NewBookList />} />
            {/* <Route path=":isbn13" element={<OneBookPage />} /> */}
         </Route>
         <Route path="/books">
            {/* <Route index element={<SearchBooksList />} /> */}
            <Route path=":isbn13" element={<OneBookPage />} />
         </Route>

         <Route path="/search">
            {/* <Route index element={<NewBookList />} /> */}
            <Route path=":title" element={<FoundBooksList />} />
         </Route>

      </Routes>
      <Footer />
   </Box>
}