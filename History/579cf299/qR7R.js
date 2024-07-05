const reducerFn = (books, action) => {
  if (action.type === "makeFav") {
    const bookIndex = books.findIndex((book) => book.id === action.bookId);

    // const newBooks = [...books];
    // newBooks[bookIndex].isFavrite = !newBooks[bookIndex].isFavrite;
    const newBooks = books.filter((book) => {
      if (book.id === action.bookId) {
        return { ...book, isFavrite: !isFavrite };
      }
    });

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
