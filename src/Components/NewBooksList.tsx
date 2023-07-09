import Box, { BoxProps } from '@mui/material/Box';
import { BookShort } from './BookShort';
import { Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { getNewBooks } from '../server/getBooks';
import { useAppDispatch, useAppSelector } from '../store/store';
import { getNewBooksThunk } from '../store/bookSlice';
import { OneBookShort } from '../types/types';

export const NewBookList = () => {

   const books = useAppSelector(state => state.books.books)
   const dispatch = useAppDispatch()

   useEffect(() => {

      dispatch(getNewBooksThunk())

   }, [])
   // }, [books])

   if (books.length === 0)
      return <h2>Books not found</h2>

   return (
      <>
         <Typography
            variant="h1"
            noWrap
            component="h1"
            sx={{
               // display: { xs: 'none', sm: 'block' } 
               p: '10px'
            }}
         >
            New Releases Books
         </Typography>
         <Grid container>
            {books.map((book: OneBookShort) => <BookShort book={book}></BookShort>)}
         </Grid>
      </>
   );
}