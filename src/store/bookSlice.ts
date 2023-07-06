import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
import { BookState, OneBookShort } from '../types/types'
import { getNewBooks } from '../server/getBooks'

const initialState: BookState = {
   books: []
}

export const getNewBooksThunk = createAsyncThunk('posts/getNewBooksThunk', async () => {
   const serverBooks = await getNewBooks();
   return serverBooks
})

export const booksSlice = createSlice({
   name: 'books',
   initialState,
   reducers: {
      // setNewBooks: (state, action: PayloadAction<OneBookShort[]>) => {
      //    return { ...state, books: action.payload }
      //    // state.posts = action.payload
      // },
   },
   extraReducers(builder) {
      builder
         .addCase(getNewBooksThunk.fulfilled, (state, action: PayloadAction<OneBookShort[]>) => {
            return { ...state, books: action.payload }
            // state.posts = state.posts.concat(action.payload)
         })
   },
})

// Action creators are generated for each case reducer function
export const { } = booksSlice.actions

export const booksReducer = booksSlice.reducer