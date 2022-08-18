import React from "react";
import { books } from "./data";
import Book from "./Book";
function BookList() {
  return (
    <div className="booklist">
      {/* <Book
        img={books[0].image}
        author={books[0].author}
        title={books[0].title}
      />
      <Book
        img={secondBook.image}
        author={secondBook.author}
        title={secondBook.title}
      >
        50%
      </Book> */}
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </div>
  );

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "I am Here")
  // );
}

export default BookList;
