import { RootState } from "../store/store"

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
}

export type SearchBooksThunkParams = {
   title: string,
   page: number
}


// Initial state types
export type BookState = {
   books: OneBookShort[],
   bookDetailed: OneBookDetailed,
   searchInputValue: string,
   booksFoundByTitle: OneBookShort[],
   total: number,
   page: number,
   pageQty: number,
   // booksPerPage: number
   status: string
}

// Response types
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

export type SearchInputProps = {
   tablet?: boolean,
   onSideBarClick?: (event: React.MouseEvent) => void
}