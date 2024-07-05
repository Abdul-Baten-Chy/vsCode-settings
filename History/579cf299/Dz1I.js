const reducerFn = (books, action) => {
  if (action.type === "makeFav") {
    const bookIndex = books.findIndex((book) => book.id === action.bookId);

    const newBooks = [...books];
    newBooks[bookIndex].isFavrite = !newBooks[bookIndex].isFavrite;

    // setBooks(newBooks);
    return newBooks;
  }
};

export default reducerFn;
