import { BooksResponse, OneBookDetailed, SearchBooksResponse } from "../types/types";

const DOMAIN = "https://api.itbook.store/1.0";
const NEW = "/new";
const BOOKS = "/books";
const SEARCH = "/search";

export const getNewBooks = async () => {
   const newBooksUrl = new URL(DOMAIN + NEW);

   const response = await fetch(newBooksUrl);
   const books: BooksResponse = await response.json();
   return books.books;
};

export const getBookByISBN = async (isbn13: string) => {
   const oneBookUrl = new URL(DOMAIN + BOOKS + `/${isbn13}`);

   const response = await fetch(oneBookUrl);
   const book: OneBookDetailed = await response.json();
   return book;
};

export const searchBooks = async (title: string) => {
   const searchBooksUrl = new URL(DOMAIN + SEARCH + `/${title}`);

   // localStorage.setItem('searchTitle', title)

   const response = await fetch(searchBooksUrl);
   const books: SearchBooksResponse = await response.json();
   return books.books;
};