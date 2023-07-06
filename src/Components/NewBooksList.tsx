import Box, { BoxProps } from '@mui/material/Box';
import { BookShort } from './BookShort';
import { Grid } from '@mui/material';
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
      // getNewBooks().then(data => {
      //    console.log('data', data)
      // })

   }, [])

   return (
      <Grid container>
         {books.map((book: OneBookShort) => <BookShort book={book}></BookShort>)}
         {/* {books.map((book: OneBookShort) => <li className={styles['one-post']} key={post.id}><Post post={post} onImgClick={showImgPopup} /></li>)} */}
         {/* <BookShort></BookShort> */}

      </Grid>
   );
}