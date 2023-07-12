import Box, { BoxProps } from '@mui/material/Box';
import { BookShort } from './BookShort';
import { Grid, Pagination, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { searchBooksThunk, setPage } from '../store/bookSlice';
import { OneBookShort } from '../types/types';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/system';
import { BookNotFound } from './BookNotFound';
import { LoadingInfo } from './LoadingInfo';
import { ErrorMessageComp } from './ErrorMessageComp';

// import {createBrowserHistory} from "history";

export const FoundBooksList = () => {
   // console.log("🚀 ~ file: FoundBooksList.tsx:13 ~ FoundBooksList ~ props:", props)


   const books = useAppSelector(state => state.books.booksFoundByTitle)
   const total = useAppSelector(state => state.books.total)
   const status = useAppSelector(state => state.books.status)
   const searchInputValue = useAppSelector(state => state.books.searchInputValue)
   const page = useAppSelector(state => state.books.page)
   const pageQty = useAppSelector(state => state.books.pageQty)

   // const [page, setPage] = useState(1)
   // const [pageQty, setPageQty] = useState(0)
   const dispatch = useAppDispatch()

   const { title } = useParams();

   useEffect(() => {

      const searchTitlePrev = localStorage.getItem('searchTitle')

      if (searchTitlePrev !== title)
         dispatch(setPage(1))

      title && page && dispatch(searchBooksThunk({ title, page }))

      // dispatch(setSearchInput(''))

      // const searchInputValue = localStorage.getItem('searchTitle')

      // if (books.length === 0 && searchInputValue)
      //    dispatch(searchBooksThunk(searchInputValue))

   }, [title, page])

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
         paddingX: { xs: '25px', md: '35px', xl: '40px' },
         display: 'flex',
         flexDirection: 'column',
         // alignContent: 'center'
      }}
      >
         <Box
            sx={{
               // display: { xs: 'none', sm: 'block' } 
               pt: { xs: 14, md: 18 },
               pb: { xs: 9, md: 12 },
               // pb: 6,
               // textTransform: 'uppercase'
            }}
         >
            <Typography
               variant="h1"
               // noWrap
               component="h1"
               sx={{
                  // display: { xs: 'none', sm: 'block' }
                  pb: 4,
                  textTransform: 'uppercase'
               }}
            >
               '{title}' Search results
            </Typography>
            <Typography
               variant="body1"
               // noWrap
               component="p"
               sx={{
                  color: 'system.light'
               }}
            >
               Found {total} books
            </Typography>
         </Box>

         {/* <Grid container>
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
         <Pagination
            count={pageQty}
            page={page}
            onChange={(_, num) => {
               dispatch(setPage(num))
            }}
            showFirstButton
            showLastButton
            sx={{
               // marginX: 3,
               // marginY: 'auto',
               alignSelf: 'center',
               paddingY: { xs: 14, md: 18 }
            }}
         />
      </Box>
   );
}