import { BooksResponse, OneBookDetailed } from "../types/types";

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