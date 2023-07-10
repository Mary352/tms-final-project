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
      <div style={{ width: '100%' }}>
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
         {/* <Grid container sx={{}}>
            {books.map((book: OneBookShort) => <BookShort book={book}></BookShort>)}
         </Grid> */}
         <Box
            sx={{
               display: 'flex',
               flexWrap: 'wrap',
               // bgcolor: '#ff0000',

               // alignContent: 'flex-start',
               // p: 1,
               // m: 1,
               // maxWidth: 380,
               // height: 500,
               // borderRadius: 1,
            }}
         >
            {books.map((book: OneBookShort) => <BookShort book={book}></BookShort>)}
         </Box>
      </div>
   );
}