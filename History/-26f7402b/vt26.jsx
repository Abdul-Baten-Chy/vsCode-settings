import { useState } from "react";
import star from "../assets/star.svg";
const Books = () => {
  const books = [
    {
      id: 1,
      name: "he Heaven & Earth Grocery Store",
      publish: 2023,
      img: "https://m.media-amazon.com/images/I/81FS3wyevDL._AC_UY218_.jpg",
      Writer: "Heiming way",
      price: 120,
      rating: 4,
      isFavrite: false,
    },
    {
      id: 2,
      name: "Lessons in Chemistry: A Novel",
      publish: 2022,
      Writer: "Bob way",
      img: "https://m.media-amazon.com/images/I/71dQACXhz6L._AC_UY218_.jpg",
      price: 100,
      rating: 5,
      isFavrite: false,
    },
    {
      id: 3,
      name: "Iron Flame (The Empyrean Book 2)",
      publish: 2020,
      Writer: "Henry Doglas",
      img: "https://m.media-amazon.com/images/I/912fTvsUKLL._AC_UY218_.jpg",
      price: 130,
      rating: 4,
      isFavrite: false,
    },
    {
      id: 4,
      name: "A Court of Mist and Fury (A Court of Thorns)",
      publish: 2022,
      Writer: "Fernandez way",
      price: 150,
      img: "https://m.media-amazon.com/images/I/81X7G446iEL._AC_UY218_.jpg",
      rating: 4,
      isFavrite: false,
    },
    {
      id: 5,
      name: "How to Know a Person: The Art",
      publish: 2023,
      Writer: "Heiming way",
      price: 170,
      img: "https://m.media-amazon.com/images/I/81Gvt3v-J3L._AC_UY218_.jpg",
      rating: 4,
      isFavrite: false,
    },
    {
      id: 6,
      name: "Ruthless Vows(Enchantment)",
      publish: 2023,
      Writer: "Jacob way",
      price: 100,
      img: "https://m.media-amazon.com/images/I/91r00c80xuL._AC_UY218_.jpg",
      rating: 4,
      isFavrite: false,
    },
    {
      id: 7,
      name: "Build the Life You Want journey",
      publish: 2021,
      img: "https://m.media-amazon.com/images/I/81um6F-a5kL._AC_UY218_.jpg",
      Writer: "Marphy",
      price: 120,
      rating: 4,
      isFavrite: false,
    },
    {
      id: 8,
      name: "The Silent Patient of New work city",
      publish: 2021,
      Writer: "Hog way",
      img: "https://m.media-amazon.com/images/I/91BbLCJOruL._AC_UY218_.jpg",
      price: 110,
      rating: 4,
      isFavrite: false,
    },
  ];
  const [favBook, setFavBook] = useState(books);
  const [updatedBook, setUpdatedBook] = useState({});
  const handleFavarite = (book) => {
    setUpdatedBook({ ...book, isFavrite: true });
    setFavBook([...books, updatedBook]);
    console.log(book);
  };
  return (
    <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {favBook.map((book) => (
        <div className="space-y-3" key={book.id}>
          <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
            <img className="max-w-[144px]" src={book.img} alt="book name" />
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-bold lg:text-xl">{book.name}</h4>
            <p className="text-xs lg:text-sm">
              By : <span>{book.Writer}</span>
            </p>
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold lg:text-xl">{book.price}</h4>

              <div className="flex items-center space-x-1">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <span className="text-xs lg:text-sm">(4 Star)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs lg:text-sm">
              <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                Add to Cart
              </button>
              {book.isFavrite ? (
                <button
                  className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#FB6B90]/[84%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5"
                  onClick={() => handleFavarite(book)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  Favourite
                </button>
              ) : (
                <button
                  className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5"
                  onClick={() => handleFavarite(book)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  Favourite
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
