import Box from '@mui/material/Box';
import { BookShort } from './BookShort';
import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { getNewBooksThunk } from '../store/bookSlice';
import { OneBookShort } from '../types/types';

export const NewBookList = () => {

   const books = useAppSelector(state => state.books.books)
   const status = useAppSelector(state => state.books.status)
   const dispatch = useAppDispatch()

   useEffect(() => {

      dispatch(getNewBooksThunk())

   }, [])
   // }, [books])

   if (books.length === 0 && status !== 'loading')
      return <Typography variant="h1" component='h1'>Books not found</Typography>

   return (
      <Box sx={{
         maxWidth: '1200px',
         marginX: 'auto',
         marginY: '0',
         paddingX: '40px'
      }}>
         <Typography
            variant="h1"
            // noWrap
            component="h1"
            sx={{
               // display: { xs: 'none', sm: 'block' } 
               pt: 18,
               pb: 12,
               // pb: 6,
               textTransform: 'uppercase'
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
               my: -6,
               mx: -4,
            }}
         >
            {books.map((book: OneBookShort) => <BookShort book={book}></BookShort>)}
         </Box>
      </Box>
   );
}