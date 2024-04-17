import React from "react";

const card = ({ book }) => {
  const { review, bookName, image } = book;
  return (
    <div className="my-5">
      <div className="card card-side bg-base-100 shadow-xl gap-10 p-5">
        <figure>
          <img className="h-[75%]" src={image} alt="Movie" />
        </figure>
        <div className="mx-auto mt-7">
          <h2 className="text-xl font-bold text-lime-500">
            Book-name: {bookName}
          </h2>
          <p className="text-yellow-500"> Review: {review}</p>
        </div>
      </div>
    </div>
  );
};

export default card;
