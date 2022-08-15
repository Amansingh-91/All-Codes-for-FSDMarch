import React from "react";
import { createRoot, ReactDom } from "react-dom/client";
// css
import "./index.css";
// First Component
// Jsx Rules
// always return single element
// use camelCase for html attrbutes
//
function BookList() {
  return (
    <div className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "I am Here")
  // );
}
const Book = () => {
  return (
    <div className="book">
      <Image />
      <Title />
      <Author />
    </div>
  );
};

const Image = () => {
  const image =
    "https://images-eu.ssl-images-amazon.com/images/I/818e+fq7+BL._AC_UL604_SR604,400_.jpg";
  return <img src={image} alt="" />;
};
const author = "Norman Lewis";
const Author = () => <h6>{author}</h6>;
const Title = () => <h3>Word Power Made Easy</h3>;

const root = createRoot(document.getElementById("root"));
root.render(<BookList />);
