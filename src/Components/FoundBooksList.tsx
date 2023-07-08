import Box, { BoxProps } from '@mui/material/Box';
import { BookShort } from './BookShort';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { getNewBooks } from '../server/getBooks';
import { useAppDispatch, useAppSelector } from '../store/store';
import { getNewBooksThunk, searchBooksThunk, setSearchInput } from '../store/bookSlice';
import { OneBookShort } from '../types/types';
import { useParams } from 'react-router-dom';

export const FoundBooksList = () => {

   const books = useAppSelector(state => state.books.booksFoundByTitle)
   const searchInputValue = useAppSelector(state => state.books.searchInputValue)
   const dispatch = useAppDispatch()

   const { title } = useParams();

   useEffect(() => {


      title && dispatch(searchBooksThunk(title))

      // dispatch(setSearchInput(''))

      // const searchInputValue = localStorage.getItem('searchTitle')

      // if (books.length === 0 && searchInputValue)
      //    dispatch(searchBooksThunk(searchInputValue))

   }, [books])

   useEffect(() => {




      // const searchInputValue = localStorage.getItem('searchTitle')

      // if (books.length === 0 && searchInputValue)
      //    dispatch(searchBooksThunk(searchInputValue))

   }, [searchInputValue])

   if (books.length === 0)
      return <h2>Books not found</h2>

   return (
      <Grid container>
         {books.map((book: OneBookShort) => <BookShort book={book}></BookShort>)}
      </Grid>
   );
}