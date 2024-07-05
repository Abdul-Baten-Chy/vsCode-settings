const reducerFn = (books, action) => {
  if (action.type === "makeFav") {
    const bookIndex = books.findIndex((book) => book.id === action.bookId);

    const newBooks = [...books];
    newBooks[bookIndex].isFavrite = !newBooks[bookIndex].isFavrite;

    // setBooks(newBooks);
    return newBooks;
  } else if (action.type === "search") {
    const searchedItems = books.filter((book) =>
      book.name.toLowerCase().includes(action.searchKey.toLowerCase())
    );
    return [...searchedItems];
  }
};

export default reducerFn;
