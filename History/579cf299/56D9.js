const reducerFn = (books, action) => {
  switch (action.type) {
    case "makeFav":
      const bookIndex = books.findIndex((book) => book.id === bookId);

      // const newBooks = [...books];
      // newBooks[bookIndex].isFavrite = !newBooks[bookIndex].isFavrite;

      // setBooks(newBooks);
      return;
  }
};

export default reducerFn;
