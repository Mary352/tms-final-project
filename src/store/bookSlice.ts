import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
import { BookState, OneBookDetailed, OneBookShort } from '../types/types'
import { getBookByISBN, getNewBooks, searchBooks } from '../server/getBooks'

const initialState: BookState = {
   books: [],
   bookDetailed: {
      error: '',
      title: '',
      subtitle: '',
      authors: '',
      publisher: '',
      language: '',
      isbn10: '',
      isbn13: '',
      pages: '',
      year: '',
      rating: '',
      desc: '',
      price: '',
      image: '',
      url: '',
      pdf: {}
   },
   searchInputValue: '',
   booksFoundByTitle: []
}

export const getNewBooksThunk = createAsyncThunk('books/getNewBooksThunk', async () => {
   const serverBooks = await getNewBooks();
   return serverBooks
})

export const getBookByISBNThunk = createAsyncThunk('books/getBookByISBNThunk', async (isbn13: string) => {
   const serverBook = await getBookByISBN(isbn13);
   return serverBook
})

export const searchBooksThunk = createAsyncThunk('books/searchBooksThunk', async (title: string) => {
   const serverBooks = await searchBooks(title);
   return serverBooks
})

export const booksSlice = createSlice({
   name: 'books',
   initialState,
   reducers: {
      setSearchInput: (state, action: PayloadAction<string>) => {

         return { ...state, searchInputValue: action.payload }
         // state.posts = action.payload
      },
   },
   extraReducers(builder) {
      builder
         .addCase(getNewBooksThunk.fulfilled, (state, action: PayloadAction<OneBookShort[]>) => {
            return { ...state, books: action.payload }
         })
         .addCase(getBookByISBNThunk.fulfilled, (state, action: PayloadAction<OneBookDetailed>) => {
            return { ...state, bookDetailed: action.payload }
         })
         .addCase(searchBooksThunk.fulfilled, (state, action: PayloadAction<OneBookShort[]>) => {
            return { ...state, booksFoundByTitle: action.payload }
         })
   },
})

// Action creators are generated for each case reducer function
export const { setSearchInput } = booksSlice.actions

export const booksReducer = booksSlice.reducer