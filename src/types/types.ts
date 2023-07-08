export type OneBookShort = {
   title: string,
   subtitle: string,
   isbn13: string,
   price: string,
   image: string,
   url: string
}

export type OneBookDetailed = {
   error: string,
   title: string,
   subtitle: string,
   authors: string,
   publisher: string,
   language: string,
   isbn10: string,
   isbn13: string,
   pages: string,
   year: string,
   rating: string,
   desc: string,
   price: string,
   image: string,
   url: string,
   pdf: Object
   // {
   //    "Chapter 2": "https://itbook.store/files/9781617294136/chapter2.pdf",
   //    "Chapter 5": "https://itbook.store/files/9781617294136/chapter5.pdf"
   // }
}

export type BookState = {
   books: OneBookShort[],
   bookDetailed: OneBookDetailed,
   searchInputValue: string,
   booksFoundByTitle: OneBookShort[]
}

export type BooksResponse = {
   error: string,
   total: string,
   books: OneBookShort[]
};

export type SearchBooksResponse = {
   error: string,
   total: string,
   page: string,
   books: OneBookShort[]
};

// Component Props
export type BookShortProps = {
   book: OneBookShort
};
export type OneBookPageProps = {
   book: OneBookDetailed
};