import { useParams } from "react-router-dom";
import { OneBookPageProps } from "../types/types";
import { useAppSelector, useAppDispatch } from "../store/store";
import { useEffect } from "react";
import { getBookByISBNThunk } from "../store/bookSlice";

export const OneBookPage = () => {
   const { isbn13 } = useParams();

   const book = useAppSelector((state) => state.books.bookDetailed)
   const dispatch = useAppDispatch()

   useEffect(() => {
      isbn13 && dispatch(getBookByISBNThunk(isbn13))

   }, [isbn13])

   if (!book.title) return (<h2>Book not found</h2>)

   return (<>
      <p>{book.isbn13}</p>
      <p>{book.title}</p>
      <p>{book.authors}</p>
   </>)
}
