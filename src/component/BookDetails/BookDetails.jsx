import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const perBooks = books.find((b) => b.bookId == bookId);

  // readbook
  const handleReadBook = () => {
    const saveReadBook = JSON.parse(localStorage.getItem("readBooks")) || [];
    const readBook = saveReadBook.find(
      (book) => book.bookId == perBooks.bookId
    );
    // console.log(readBook);
    const saveWishList = JSON.parse(localStorage.getItem("wishListBooks")) || [];
    const wishListBook = saveWishList.find(
      (book) => book.bookId == perBooks.bookId
    );
    

    if (readBook && wishListBook) {
      toast.warn("cannot added again");
    } else {
      saveReadBook.push(perBooks);
      const localBook = JSON.stringify(saveReadBook);
      
      localStorage.setItem("readBooks", localBook);
      toast("One book added !");
    }
  };

  // wishlist

  const handleWishList = () => {
    const saveReadBook = JSON.parse(localStorage.getItem("readBooks")) || [];
    const readBook = saveReadBook.find(
      (book) => book.bookId == perBooks.bookId
    );

    const saveWishList = JSON.parse(localStorage.getItem("wishListBooks")) || [];
    const wishListBook = saveWishList.find(
      (book) => book.bookId == perBooks.bookId
    );

    if (wishListBook || readBook) {
      toast.warn("cannot added again");
    } else {
      saveWishList.push(perBooks);
      const localBook = JSON.stringify(saveWishList);
      localStorage.setItem("wishListBooks", localBook);
      toast("one book added!");
    }
  };

  const {
    image,
    author,
    bookName,
    review,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = perBooks;

  return (
    <div className="container mx-auto mt-4">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            alt=""
            className="object-cover w-full h-52 dark:bg-gray-500"
            src={image}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{bookName}</h2>
          <p className=" font-extralight">By: {author}</p>
          <hr />
          <p className=" font-light">{category}</p>
          <hr />
          <p className="font-semibold">Review : {review}</p>
          <div className="flex gap-3 text-lime-500">
            {tags.map((tag, idx) => (
              <span key={idx}>{tag}</span>
            ))}
          </div>
          <hr />
          <p className="font-semibold">
            Number of Pages :
            <span className="text-lime-500">{totalPages}</span>
          </p>
          <p className="font-semibold">
            Publisher: <span className="text-lime-500">{publisher}</span>
          </p>
          <p className="font-semibold">
            year of publish :
            <span className="text-lime-500">{yearOfPublishing}</span>
          </p>
          <p className="font-semibold">
            rateing : <span className="text-lime-500">{rating}</span>
          </p>

          <div className="card-actions justify-end">
            <button
              onClick={handleReadBook}
              className="btn  bg-lime-600 text-white"
            >
              Read
            </button>
            <button
              onClick={handleWishList}
              className="btn  bg-blue-400 text-white"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
