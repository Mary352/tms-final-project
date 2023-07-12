import Box from '@mui/material/Box';
import { BookShort } from './BookShort';
import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { getNewBooksThunk } from '../store/bookSlice';
import { OneBookShort } from '../types/types';
import { SubscriptionBox } from './SubscriptionBox';
import { BookNotFound } from './BookNotFound';
import { LoadingInfo } from './LoadingInfo';
import { ErrorMessageComp } from './ErrorMessageComp';

export const NewBookList = () => {

   const books = useAppSelector(state => state.books.books)
   const status = useAppSelector(state => state.books.status)
   const dispatch = useAppDispatch()

   useEffect(() => {

      dispatch(getNewBooksThunk())

   }, [])
   // }, [books])

   if (status === 'loading')
      return <LoadingInfo />


   if (books.length === 0 && status === 'fulfilled')
      return <BookNotFound />

   if (status === 'rejected')
      return <ErrorMessageComp />

   return (
      <Box sx={{
         maxWidth: '1200px',
         marginX: 'auto',
         marginY: '0',
         paddingX: { xs: '25px', md: '35px', xl: '40px' }
      }}>
         <Typography
            variant="h1"
            // noWrap
            component="h1"
            sx={{
               // display: { xs: 'none', sm: 'block' } 
               pt: { xs: 14, md: 18 },
               pb: { xs: 9, md: 12 },
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
               my: { xs: '-18px', md: -6 },
               mx: { md: -4 },
            }}
         >
            {books.map((book: OneBookShort) => <BookShort book={book}></BookShort>)}
         </Box>
         <SubscriptionBox />
      </Box>
   );
}